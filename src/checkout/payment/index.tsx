import { useFormik } from 'formik'
import * as Yup from 'yup'
import InputMask from 'react-input-mask'

import { usePurchaseMutation } from '../../services/api' // Importar a mutação de compra
import { useDispatch, useSelector } from 'react-redux'
import {
  setVisibility,
  clearDeliveryData,
  setCep
} from '../../store/reducers/delivery'
import { setPaymentVisibility } from '../../store/reducers/payment' // Ajustar a visibilidade do pagamento
import { RootReducer } from '../../store'
import { setOrderId, setOrderVisibility } from '../../store/reducers/order'

import { parseToBrl } from '../../utils'

import * as S from './styles'
import Button from '../../components/Button'

// Variáveis para calcular o ano e mês atuais
const currentYear = new Date().getFullYear()
const currentMonth = new Date().getMonth() + 1

// Função utilitária para capitalizar nomes
const capitalizeNames = (value: string): string => {
  if (!value) return ''
  const names = value.split(' ')
  const capitalizedNames = names.map(
    (name) => name.charAt(0).toUpperCase() + name.slice(1).toLowerCase()
  )
  return capitalizedNames.join(' ')
}

const Payment = () => {
  const dispatch = useDispatch()
  const isVisible = useSelector((state: RootReducer) => state.payment.isVisible) // Verificar se o componente de pagamento é visível
  const deliveryData = useSelector((state: RootReducer) => state.delivery) // Obter dados de entrega do estado Redux
  const { items } = useSelector((state: RootReducer) => state.cart) // Obter itens do carrinho do estado Redux
  const [purchase, { isSuccess, data, isLoading }] = usePurchaseMutation() // Utilizar a mutação de compra da API

  // Se a compra for bem-sucedida, armazena o ID do pedido no estado Redux
  if (isSuccess && data) {
    dispatch(setOrderId(data.orderId))
  }

  // Função de validação personalizada para o mês de expiração do cartão
  const validateExpireMonth = (
    value: string | undefined,
    context: Yup.TestContext
  ) => {
    if (!value) return false

    const { expireYear } = context.parent as { expireYear: string }
    const month = parseInt(value, 10)
    const year = parseInt(expireYear, 10)

    if (year === currentYear) {
      return month >= currentMonth && month <= 12
    }

    return month >= 1 && month <= 12
  }

  // Função para verificar se o número do cartão de crédito é válido
  const isValidCreditCardNumber = (value: string): boolean => {
    // Remove espaços em branco do número do cartão
    const sanitized = value.replace(/\s+/g, '')
    let sum = 0
    let shouldDouble = false

    // Loop de trás para frente sobre os dígitos do número do cartão
    for (let i = sanitized.length - 1; i >= 0; i--) {
      let digit = parseInt(sanitized.charAt(i), 10)

      if (shouldDouble) {
        if ((digit *= 2) > 9) digit -= 9
      }

      sum += digit
      shouldDouble = !shouldDouble
    }

    // Retorna verdadeiro se o número do cartão de crédito for válido, falso caso contrário
    return sum % 10 === 0
  }

  // Formulário Formik para gerenciar o estado do formulário e validação
  const form = useFormik({
    initialValues: {
      cardNumber: '',
      cardName: '',
      expireMonth: '',
      expireYear: '',
      cvv: ''
    },
    validationSchema: Yup.object({
      cardNumber: Yup.string()
        .test('is-valid-credit-card', 'Número do cartão inválido', (value) =>
          value ? isValidCreditCardNumber(value) : false
        )
        .required('O campo é obrigatório'),
      cardName: Yup.string()
        .min(3, 'O campo precisa ter pelo menos cinco caracteres')
        .matches(/^[a-zA-Z\s]*$/, 'O campo deve conter apenas letras de A-Z')
        .test('two-names', 'Insira pelo menos dois nomes', (value) => {
          if (!value) return false
          const names = value.trim().split(' ')
          return names.length >= 2
        })
        .required('O campo é obrigatório'),
      expireMonth: Yup.string()
        .test(
          'is-valid-month',
          'O valor precisa ser entre 1 e 12',
          validateExpireMonth
        )
        .required('O campo é obrigatório'),
      expireYear: Yup.number()
        .min(currentYear, 'O ano mínimo é o atual')
        .required('O campo é obrigatório'),
      cvv: Yup.string()
        .min(3, 'CVV inválido')
        .notOneOf(['000'], 'CVV inválido')
        .required('O campo é obrigatório')
    }),
    onSubmit: async (values, { resetForm }) => {
      try {
        // Monta o payload para enviar à API de compra
        const payload = {
          products: items.map((item) => ({
            id: item.id,
            price: item.preco
          })),
          delivery: {
            receiver: deliveryData.receiver,
            address: {
              ...deliveryData.address,
              complement: deliveryData.address.complement || ''
            }
          },
          payment: {
            card: {
              name: values.cardName,
              number: values.cardNumber,
              code: Number(values.cvv),
              expires: {
                month: Number(values.expireMonth),
                year: Number(values.expireYear)
              }
            }
          }
        }

        // Executa a mutação de compra
        await purchase(payload)

        // Limpa os dados de entrega e reseta o formulário
        dispatch(setCep(''))
        dispatch(clearDeliveryData())
        resetForm()

        // Exibe o componente de confirmação do pedido e oculta o pagamento
        dispatch(setOrderVisibility(true))
        dispatch(setPaymentVisibility(false))
      } catch (error) {
        console.error('Erro ao enviar pedido:', error)
      }
    }
  })

  // Função para verificar se um campo de entrada tem erro
  const checkInputHasError = (fieldName: string) => {
    const isTouched = fieldName in form.touched
    const isInvalid = fieldName in form.errors
    const hasError = isTouched && isInvalid
    return hasError
  }

  // Função para calcular o preço total dos itens no carrinho
  const getTotalPrice = () => {
    return items.reduce((accumulator, currentValue) => {
      return (accumulator += currentValue.preco)
    }, 0)
  }

  // Função para lidar com a edição do endereço de entrega
  const handleEditDelivery = () => {
    dispatch(setVisibility(true)) // Exibe o formulário de edição de endereço de entrega
    dispatch(setPaymentVisibility(false)) // Oculta o componente de pagamento
  }

  return (
    <S.PaymentContainer className={isVisible ? 'visible' : ''}>
      <S.Overlay />
      <S.PaymentForm onSubmit={form.handleSubmit}>
        <h3>Pagamento - valor a pagar {parseToBrl(getTotalPrice())}</h3>
        <S.InputGroup>
          <label htmlFor="cardName">Nome no Cartão</label>
          <input
            id="cardName"
            type="text"
            name="cardName"
            value={capitalizeNames(form.values.cardName)} // Capitaliza o valor do campo de nome no cartão
            onChange={form.handleChange}
            onBlur={form.handleBlur}
            className={checkInputHasError('cardName') ? 'error' : ''}
          />
        </S.InputGroup>
        <S.Row>
          <S.InputGroup>
            <label htmlFor="cardNumber">Número do Cartão</label>
            <InputMask
              id="cardNumber"
              type="text"
              name="cardNumber"
              value={form.values.cardNumber}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
              mask="9999 9999 9999 9999"
              maskChar={null}
              className={checkInputHasError('cardNumber') ? 'error' : ''}
            />
          </S.InputGroup>
          <S.InputGroup $maxwidth="56px">
            <label htmlFor="cvv">CVV</label>
            <InputMask
              id="cvv"
              type="text"
              name="cvv"
              value={form.values.cvv}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
              mask="999"
              maskChar={null}
              className={checkInputHasError('cvv') ? 'error' : ''}
            />
          </S.InputGroup>
        </S.Row>

        <S.Row>
          <S.InputGroup>
            <label htmlFor="expireMonth">Mês de vencimento</label>
            <InputMask
              id="expireMonth"
              type="text"
              name="expireMonth"
              value={form.values.expireMonth}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
              mask="99"
              maskChar={null}
              className={checkInputHasError('expireMonth') ? 'error' : ''}
            />
          </S.InputGroup>
          <S.InputGroup>
            <label htmlFor="expireYear">Ano de vencimento</label>
            <InputMask
              id="expireYear"
              type="text"
              name="expireYear"
              value={form.values.expireYear}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
              mask="9999"
              className={checkInputHasError('expireYear') ? 'error' : ''}
            />
          </S.InputGroup>
        </S.Row>
        <S.ButtonContainer>
          <Button type="submit" disabled={isLoading}>
            {isLoading ? 'Finalizando pagamento' : 'Finalizar Pagamento'}
          </Button>
          <Button type="button" onClick={handleEditDelivery}>
            Voltar para a edição de endereço
          </Button>
        </S.ButtonContainer>
      </S.PaymentForm>
    </S.PaymentContainer>
  )
}

export default Payment
