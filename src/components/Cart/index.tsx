import { useDispatch, useSelector } from 'react-redux'

import { parseToBrl } from '../../utils'
import Button from '../Button'

import { RootReducer } from '../../store'
import { close, remove } from '../../store/reducers/cart'
import { setVisibility } from '../../store/reducers/delivery'

import * as S from './styles'

/**
 * Componente Cart
 *
 * Este componente renderiza o carrinho de compras da aplicação. Ele permite ao usuário:
 * - Visualizar os itens adicionados ao carrinho.
 * - Remover itens do carrinho.
 * - Visualizar o valor total dos itens no carrinho.
 * - Continuar para a etapa de entrega.
 *
 * Utiliza hooks do react-redux para acessar o estado global do carrinho e para despachar ações
 * que manipulam o estado, como fechar o carrinho, remover itens e mudar a visibilidade da entrega.
 *
 * Os estilos são importados do módulo './styles' e aplicados aos elementos do componente para
 * garantir uma aparência consistente.
 */
const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)
  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }

  const getTotalPrice = () => {
    return items.reduce((accumulator, currentValue) => {
      return (accumulator += currentValue.preco)
    }, 0)
  }

  const removeToCart = (id: number) => {
    dispatch(remove(id))
  }

  const handleChangeCart = () => {
    dispatch(close())
    dispatch(setVisibility(true))
  }

  return (
    <>
      <S.CartContainer className={isOpen ? 'is-open' : ''}>
        <S.Overlay onClick={closeCart} />
        <S.SidebarContainer>
          <S.Sidebar>
            {items.length > 0 ? (
              <>
                <ul>
                  {items.map((item) => (
                    <S.CartItem key={item.id}>
                      <img src={item.foto} alt={item.nome} />
                      <div>
                        <h3>{item.nome}</h3>
                        <span>{parseToBrl(item.preco)}</span>
                      </div>
                      <button onClick={() => removeToCart(item.id)}></button>
                    </S.CartItem>
                  ))}
                </ul>
                <S.Price>
                  <span>Valor Total</span>
                  <span>{parseToBrl(getTotalPrice())}</span>
                </S.Price>
                <Button type="button" onClick={handleChangeCart}>
                  Continuar com a entrega
                </Button>
              </>
            ) : (
              <p>Sem items no carrinho, faça seu pedido!</p>
            )}
          </S.Sidebar>
        </S.SidebarContainer>
      </S.CartContainer>
    </>
  )
}

export default Cart
