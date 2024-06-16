import { styled } from 'styled-components'
import { Link as RouterLink } from 'react-router-dom'
import vetor from '../../assets/images/Vector.svg'
import { Link } from 'react-router-dom'
import { cores } from '../../styles'

export const HeaderBar = styled.header`
  background-image: url(${vetor});
  background-size: cover;
  background-position: center;
  padding-top: 40px;
  padding-bottom: 65px;
  z-index: 1;
  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media (max-width: 768px) {
      flex-direction: column;
    }
  }
`

export const Logo = styled.img`
  width: 125px;
  height: auto;
`
export const TitleHeaderPerfil = styled(Link)`
  text-decoration: none;
  h2 {
    font-size: 18px;
    font-weight: 900;
    color: ${cores.pink};
  }
`
export const CartHeaderPerfil = styled.div`
  font-size: 18px;
  font-weight: 900;
`
export const CartCount = styled.span`
  margin-right: 5px;
`
export const StyledLink = styled(RouterLink)`
  text-decoration: none;
  color: ${cores.pink};
  font-weight: 900;
  font-size: 18px;
  @media (max-width: 768px) {
    margin-bottom: 20px;
  }
`
export const CartButton = styled.a`
  cursor: pointer;
`
