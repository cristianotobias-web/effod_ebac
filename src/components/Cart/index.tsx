import Button from '../Button'
import {
  Overlay,
  CartContainer,
  Sidebar,
  Price,
  CartItem,
  SidebarContainer
} from './styles'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { close, remove } from '../../store/reducers/cart'
import { priceFormated } from '../MenuRestaurant'

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
  return (
    <CartContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={closeCart} />
      <SidebarContainer>
        <Sidebar>
          <ul>
            {items.map((item) => (
              <CartItem key={item.id}>
                <img src={item.foto} alt={item.nome} />
                <div>
                  <h3>{item.nome}</h3>
                  <span>{priceFormated(item.preco)}</span>
                </div>
                <button onClick={() => removeToCart(item.id)}></button>
              </CartItem>
            ))}
          </ul>
          <Price>
            <span>Valor Total</span>
            <span>{priceFormated(getTotalPrice())}</span>
          </Price>
          <Button type="button">Continuar com a compra</Button>
        </Sidebar>
      </SidebarContainer>
    </CartContainer>
  )
}
export default Cart
