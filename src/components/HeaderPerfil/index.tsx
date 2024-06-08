import { HeaderBar, Logo } from './styles'
import logo from '../../assets/images/logo.svg'
import { Link } from 'react-router-dom'

const HeaderPerfil = () => {
  return (
    <HeaderBar>
      <div className="container">
        <div>Restaurantes</div>
        <Link to="/">
          <Logo src={logo} alt="Logo" />
        </Link>
        <div>0 produto(s) no carrinho</div>
      </div>
    </HeaderBar>
  )
}

export default HeaderPerfil
