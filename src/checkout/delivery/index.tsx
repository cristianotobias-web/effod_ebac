import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer, AppDispatch } from '../../store'
import InputMask from 'react-input-mask'

import Button from '../../components/Button'
import {
  setVisibility,
  setDeliveryData,
  fetchCEPData
} from '../../store/reducers/delivery'
import { setPaymentVisibility } from '../../store/reducers/payment'
import { setCep } from '../../store/reducers/delivery'
import { open } from '../../store/reducers/cart'

import * as S from './styles'

/**
 * Componente Delivery
 *
 * Este componente gerencia o formulário de entrega, permitindo que o usuário insira informações
 * do destinatário e do endereço. Realiza validações nos campos, garante a formatação correta
 * dos dados e busca informações do CEP ao ser digitado. Ao enviar o formulário, redireciona para
 * a tela de pagamento.
 */

// Função utilitária para capitalizar nomes
const capitalizeNames = (value: string): string => {
  if (!value) return ''

  // Remove múltiplos espaços em branco com uma expressão regular
  const normalizedValue = value.replace(/\s{2,}/g, ' ')

  // Capitaliza o primeiro caractere de cada palavra após dividir pela regex de espaço
  const capitalizedNames = normalizedValue
    .split(' ')
    .map((name) => name.charAt(0).toUpperCase() + name.slice(1).toLowerCase())

  return capitalizedNames.join(' ')
}

// Função utilitária para remover zeros à esquerda de um número
function trimTrailingZeros(number: string) {
  return number.replace(/^0+/, '')
}

const Delivery: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>()
  const isVisible = useSelector(
    (state: RootReducer) => state.delivery.isVisible
  )
  const { receiver, address } = useSelector(
    (state: RootReducer) => state.delivery
  )

  const [errors, setErrors] = useState<{
    [key: string]: string | { [key: string]: string | undefined }
  }>({})

  const { cep } = useSelector((state: RootReducer) => state.delivery)

  // Função para lidar com a mudança de inputs do formulário de destinatário
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    const capitalizedValue =
      name === 'receiver' ? capitalizeNames(value) : value
    dispatch(setDeliveryData({ [name]: capitalizedValue }))

    // Validar comprimento mínimo para o nome do destinatário
    if (name === 'receiver') {
      validateName(capitalizedValue)
    } else {
      validateField(name, value)
    }
  }

  // Função para validar o nome do destinatário
  const validateName = (value: string): string | undefined => {
    let error: string | undefined
    const names = value.trim().split(/\s+/)

    // Função para verificar se contém apenas letras de a-z
    const containsOnlyLetters = (value: string): boolean =>
      /^[a-zA-Z\s]*$/.test(value.trim())

    // Verificar se há pelo menos dois nomes
    if (names.length < 2) {
      error = 'Nome completo é necessário (pelo menos dois nomes)'
    } else {
      // Verificar se o primeiro nome tem pelo menos 3 caracteres
      if (names[0].length < 3) {
        error = 'O primeiro nome deve ter pelo menos 3 caracteres'
      }

      // Verificar se os outros nomes têm pelo menos 2 caracteres cada
      for (let i = 1; i < names.length; i++) {
        if (names[i].length < 2) {
          error = 'Os outros nomes devem ter pelo menos 2 caracteres cada'
          break
        }
      }
    }

    // Verificar se contém apenas letras a-z
    if (!containsOnlyLetters(value)) {
      error = 'Os nomes precisam conter apenas letras de a-z'
    }

    setErrors((prevErrors) => ({
      ...prevErrors,
      receiver: error ?? ''
    }))

    return error // Retorna o erro, se houver, ou undefined se estiver válido
  }

  // Função para lidar com a mudança de inputs do endereço
  const handleAddressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    dispatch(setDeliveryData({ address: { ...address, [name]: value } }))
    validateField(`address.${name}`, value)
  }

  // Função para lidar com o envio do formulário
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const validationErrors = validate()
    setErrors(validationErrors)

    if (Object.keys(validationErrors).length === 0) {
      console.log('Formulário enviado:', { receiver, address })
      dispatch(setPaymentVisibility(true))
      dispatch(setVisibility(false))
    } else {
      console.log('O formulário contém erros. Não pode ser enviado.')
      console.log(Object.keys(validationErrors))
      // Aqui você pode adicionar uma mensagem de erro ou lidar com o feedback ao usuário
    }
  }

  // Função para validar um campo específico
  const validateField = (name: string, value: string) => {
    let error: string | undefined

    if (name.startsWith('address.')) {
      const addressField = name.split('.')[1]
      if (addressField === 'zipCode') {
        error = !validateCEP(value) ? 'CEP deve conter 8 dígitos' : undefined
      } else if (addressField === 'number' && value === '0') {
        error = 'Número não pode ser 0'
      } else {
        error = value.trim() === '' ? 'Este campo é obrigatório' : undefined
      }

      setErrors((prevErrors) => ({
        ...prevErrors,
        address: {
          ...(prevErrors.address as { [key: string]: string | undefined }),
          [addressField]: error
        }
      }))
    } else {
      error = value.trim() === '' ? 'Este campo é obrigatório' : undefined
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: error ?? ''
      }))
    }
  }

  // Função para validar o formato do CEP
  const validateCEP = (cep: string) => {
    const cleanedCep = cep.replace(/\D/g, '')
    return cleanedCep.length === 8
  }

  // Função para validar todos os campos do formulário
  const validate = () => {
    const validationErrors: {
      [key: string]: string | { [key: string]: string | undefined }
    } = {}

    // Validar campo 'receiver'
    if (!receiver || receiver.trim() === '') {
      validationErrors.receiver = 'Quem irá receber é obrigatório'
    } else {
      const nameError = validateName(receiver)
      if (nameError) {
        validationErrors.receiver = nameError
      }
    }

    // Validar campo 'address'
    const addressErrors: { [key: string]: string | undefined } = {}
    if (!address?.description) {
      addressErrors.description = 'Endereço é obrigatório'
    }
    if (!address?.city) {
      addressErrors.city = 'Cidade é obrigatória'
    }
    if (!validateCEP(address?.zipCode || '')) {
      addressErrors.zipCode = 'CEP deve conter 8 dígitos'
    } else if (
      typeof errors.address === 'object' &&
      errors.address?.zipCode === 'CEP inválido ou não encontrado'
    ) {
      addressErrors.zipCode = 'CEP inválido ou não encontrado'
    }
    if (!address?.number || address.number === '0') {
      addressErrors.number = 'Número é obrigatório e não pode ser 0'
    }

    if (Object.keys(addressErrors).length > 0) {
      validationErrors.address = addressErrors
    }

    return validationErrors
  }

  // Função para lidar com a mudança de input do CEP
  const handleCEPChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target

    // Remover a máscara para obter apenas os dígitos
    const cleanedCep = value.replace(/\D/g, '')

    // Verifica se o valor realmente mudou antes de atualizar o estado
    if (cleanedCep !== cep) {
      dispatch(setCep(cleanedCep)) // Atualiza o estado local do CEP

      // Limpar os erros antes de validar
      setErrors((prevErrors) => {
        const addressErrors = prevErrors.address
          ? { ...(prevErrors.address as { [key: string]: string | undefined }) }
          : {}

        // Remove o erro de zipCode se o valor do CEP for válido
        if (validateCEP(cleanedCep)) {
          delete addressErrors.zipCode
        }

        return {
          ...prevErrors,
          address: addressErrors
        }
      })

      // Verificar se o valor do CEP é um CEP válido antes de buscar
      if (cleanedCep.length === 8 && validateCEP(cleanedCep)) {
        handleFetchCEP(cleanedCep) // Envia diretamente os 8 dígitos do CEP para a API
      } else {
        // Limpar os dados do endereço quando o CEP for modificado
        dispatch(
          setDeliveryData({
            address: {
              ...address,
              description: '',
              city: '',
              state: '',
              zipCode: '',
              number: '',
              complement: ''
            }
          })
        )
      }
    }
  }

  // Função para buscar dados do CEP na API
  const handleFetchCEP = async (cep: string) => {
    const response: Address | null = await dispatch(fetchCEPData(cep))
    if (response && response.city) {
      console.log('Dados retornados da API:', response)
      // Atualiza o estado com os dados recebidos da API
      dispatch(setDeliveryData({ address: response }))

      // Limpa os erros de description e city, se houver
      setErrors((prevErrors) => ({
        ...prevErrors,
        address: {
          ...(prevErrors.address as { [key: string]: string | undefined }),
          description: undefined,
          city: undefined
        }
      }))
    } else {
      console.log('CEP não encontrado ou erro na API', response)
      setErrors((prevErrors) => ({
        ...prevErrors,
        address: {
          ...((prevErrors.address as { [key: string]: string | undefined }) ||
            {}),
          zipCode: 'CEP inválido ou não encontrado'
        }
      }))
    }
  }

  // Função para capitalizar a primeira letra de uma palavra
  const capitalizeFirstLetter = (value: string) => {
    if (!value) return ''
    return value.charAt(0).toUpperCase() + value.slice(1)
  }

  // Função para voltar para o carrinho e limpar o formulário
  const handleBackToCart = () => {
    setCep('')
    clearForm()
    dispatch(setVisibility(false))
    dispatch(open())
  }

  // Função para limpar todos os campos do formulário
  const clearForm = () => {
    dispatch(
      setDeliveryData({
        receiver: '',
        address: {
          description: '',
          city: '',
          state: '',
          zipCode: '',
          number: '',
          complement: ''
        }
      })
    )
  }

  return (
    <>
      <S.DeliveryContainer className={isVisible ? 'visible' : ''}>
        <S.Overlay />
        <S.FormContainer onSubmit={handleSubmit} noValidate>
          <h3>Entrega</h3>
          <S.InputGroup>
            <label htmlFor="receiver">Quem irá receber</label>
            <input
              id="receiver"
              type="text"
              name="receiver"
              value={receiver || ''}
              onChange={(e) => handleChange(e)}
              onBlur={(e) => {
                const { name, value } = e.target
                dispatch(
                  setDeliveryData({ [name]: capitalizeFirstLetter(value) })
                )
              }}
              className={errors.receiver ? 'error' : ''}
            />
          </S.InputGroup>
          <S.InputGroup>
            <label htmlFor="addressDescription">Endereço</label>
            <input
              id="addressDescription"
              type="text"
              name="description"
              value={address?.description || ''}
              onChange={handleAddressChange}
              readOnly
              className={
                typeof errors.address === 'object' &&
                typeof errors.address?.description === 'string'
                  ? 'error'
                  : ''
              }
            />
          </S.InputGroup>
          <S.InputGroup>
            <label htmlFor="addressCity">Cidade</label>
            <input
              id="addressCity"
              type="text"
              name="city"
              value={address?.city || ''}
              onChange={handleAddressChange}
              readOnly
              className={
                typeof errors.address === 'object' &&
                typeof errors.address?.city === 'string'
                  ? 'error'
                  : ''
              }
            />
          </S.InputGroup>
          <S.InputWrapper>
            <S.InputGroup>
              <label htmlFor="addressZipCode">CEP</label>
              <InputMask
                id="addressZipCode"
                mask="99999-999"
                maskChar={null}
                name="zipCode"
                value={cep} // Controla o valor pelo estado local
                onChange={handleCEPChange}
                className={
                  typeof errors.address === 'object' &&
                  typeof errors.address?.zipCode === 'string'
                    ? 'error'
                    : ''
                }
              />
            </S.InputGroup>
            <S.InputGroup>
              <label htmlFor="addressNumber">Número</label>
              <InputMask
                id="addressNumber"
                type="text"
                name="number"
                value={address?.number || ''}
                onChange={handleAddressChange}
                onBlur={(e) => {
                  const { name, value } = e.target
                  const trimmedValue = trimTrailingZeros(value) // Remove os zeros à esquerda

                  dispatch(
                    setDeliveryData({
                      address: {
                        ...address,
                        [name]: trimmedValue
                      }
                    })
                  )
                }}
                maskChar={null}
                mask="999999"
                className={
                  typeof errors.address === 'object' &&
                  typeof errors.address?.number === 'string'
                    ? 'error'
                    : ''
                }
              />
            </S.InputGroup>
          </S.InputWrapper>
          <S.InputGroup>
            <label htmlFor="addressComplement">Complemento (opcional)</label>
            <input
              id="addressComplement"
              type="text"
              name="complement"
              value={address?.complement || ''}
              onChange={handleAddressChange}
            />
          </S.InputGroup>
          <S.ButtonContainer>
            <Button type="submit">Continuar com o pagamento</Button>
            <Button type="button" onClick={handleBackToCart}>
              Voltar para o carrinho
            </Button>
          </S.ButtonContainer>
        </S.FormContainer>
      </S.DeliveryContainer>
    </>
  )
}

export default Delivery
