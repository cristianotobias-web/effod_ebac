import logo from '../../assets/images/logo.svg'

import * as S from './styles'

const Header = () => {
  return (
    <S.HeaderBar>
      <S.Logo src={logo} alt="Logo" />
      <S.HeaderTitle>
        Viva experiências gastronômicas no conforto da sua casa
      </S.HeaderTitle>
    </S.HeaderBar>
  )
}

export default Header
