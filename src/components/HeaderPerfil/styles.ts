import { styled } from 'styled-components'
import vetor from '../../assets/images/Vector.svg'
import { Link } from 'react-router-dom'
import { cores } from '../../styles'

export const HeaderBar = styled.header`
  background-image: url(${vetor});
  background-size: cover;
  background-position: center;
  padding-top: 40px;
  padding-bottom: 65px;

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
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
