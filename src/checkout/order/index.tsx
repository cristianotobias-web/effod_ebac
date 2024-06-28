import { useDispatch, useSelector } from 'react-redux' // Importação dos hooks do Redux para dispatch e seleção de estado

import { RootReducer } from '../../store' // Importação do tipo de estado raiz do Redux
import { setOrderVisibility } from '../../store/reducers/order' // Ação para ajustar a visibilidade do pedido
import { clear } from '../../store/reducers/cart' // Ação para limpar o carrinho

import * as S from './styles' // Importação dos estilos estilizados
import Button from '../../components/Button' // Componente de botão utilizado

/**
 * Componente responsável por exibir a confirmação de um pedido realizado.
 * Inclui informações sobre o pedido e permite ao usuário concluir o processo.
 */
const OrderConfirmed = () => {
  const isVisible = useSelector((state: RootReducer) => state.orderId.isVisible) // Estado de visibilidade do pedido
  const orderId = useSelector((state: RootReducer) => state.orderId.orderId) // ID do pedido obtido do estado Redux

  const dispatch = useDispatch() // Hook para despachar ações Redux

  /**
   * Função para concluir o pedido, limpando o carrinho e ocultando a confirmação do pedido.
   */
  const completeOrder = () => {
    dispatch(clear()) // Limpar o carrinho após o pedido ser concluído
    dispatch(setOrderVisibility(false)) // Ocultar a confirmação de pedido após a conclusão
  }

  return (
    <S.OrderContainer className={isVisible ? 'visible' : ''}>
      <S.Overlay />
      <S.OrderContent>
        <h3>Pedido realizado - {orderId}</h3>
        <p>
          Estamos felizes em informar que seu pedido já está em processo de
          preparação e, em breve, será entregue no endereço fornecido.
        </p>
        <p>
          Gostaríamos de ressaltar que nossos entregadores não estão autorizados
          a realizar cobranças extras.
        </p>
        <p>
          Lembre-se da importância de higienizar as mãos após o recebimento do
          pedido, garantindo assim sua segurança e bem-estar durante a refeição.
        </p>
        <p>
          Esperamos que desfrute de uma deliciosa e agradável experiência
          gastronômica. Bom apetite!
        </p>
        <Button type="button" onClick={completeOrder}>
          Concluir
        </Button>
      </S.OrderContent>
    </S.OrderContainer>
  )
}

export default OrderConfirmed
