import {
  CartCount,
  CartHeaderPerfil,
  HeaderBar,
  Logo,
  StyledLink,
  CartButton
} from './styles'
import logo from '../../assets/images/logo.svg'
import { open } from '../../store/reducers/cart'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'

const HeaderPerfil: React.FC = () => {
  const dispatch = useDispatch()
  const { items } = useSelector((state: RootReducer) => state.cart)
  const openCart = () => {
    dispatch(open())
  }
  return (
    <HeaderBar>
      <div className="container">
        <StyledLink to="/">Restaurantes</StyledLink>
        <Logo src={logo} alt="Logo" />
        <CartHeaderPerfil>
          <CartCount>{items.length}</CartCount>
          <CartButton onClick={openCart}>produto(s) no carrinho</CartButton>
        </CartHeaderPerfil>
      </div>
    </HeaderBar>
  )
}

export default HeaderPerfil
