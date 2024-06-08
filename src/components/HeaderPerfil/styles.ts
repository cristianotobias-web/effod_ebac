import { styled } from 'styled-components'
import vetor from '../../assets/images/Vector.svg'
import { cores } from '../../styles'

export const HeaderBar = styled.header`
  background-image: url(${vetor});
  background-size: cover;
  background-position: center;
  padding-top: 20px;
  padding-bottom: 50px;

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`

export const Logo = styled.img`
  width: 100px;
  height: auto;
`
