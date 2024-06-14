import {
  CartCount,
  CartHeaderPerfil,
  HeaderBar,
  Logo,
  StyledLink
} from './styles'
import logo from '../../assets/images/logo.svg'

type HeaderProps = {
  cartCount: number
}

const HeaderPerfil: React.FC<HeaderProps> = ({ cartCount }) => {
  return (
    <HeaderBar>
      <div className="container">
        <StyledLink to="/">Restaurantes</StyledLink>
        <Logo src={logo} alt="Logo" />
        <CartHeaderPerfil>
          <CartCount>{cartCount}</CartCount>produto(s) no carrinho
        </CartHeaderPerfil>
      </div>
    </HeaderBar>
  )
}

export default HeaderPerfil
