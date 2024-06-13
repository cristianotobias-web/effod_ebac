import { CartHeaderPerfil, HeaderBar, Logo, TitleHeaderPerfil } from './styles'
import logo from '../../assets/images/logo.svg'

const HeaderPerfil = () => {
  return (
    <HeaderBar>
      <div className="container">
        <div>
          <TitleHeaderPerfil to="/">
            <h2>Restaurantes</h2>
          </TitleHeaderPerfil>
        </div>

        <Logo src={logo} alt="Logo" />

        <CartHeaderPerfil>0 produto(s) no carrinho</CartHeaderPerfil>
      </div>
    </HeaderBar>
  )
}

export default HeaderPerfil
