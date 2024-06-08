import { HeaderBar, Logo, HeaderTitle } from './styles'
import logo from '../../assets/images/logo.svg'

const Header = () => {
  return (
    <HeaderBar>
      <Logo src={logo} alt="Logo" />
      <HeaderTitle>
        Viva experiências gastronômicas no conforto da sua casa
      </HeaderTitle>
    </HeaderBar>
  )
}

export default Header
