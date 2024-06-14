import { styled } from 'styled-components'
import vetor from '../../assets/images/Vector.svg'
import { cores } from '../../styles'

export const HeaderBar = styled.header`
  background-image: url(${vetor});
  background-size: cover;
  background-position: center;
  height: 360px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  text-align: center;
  padding-top: 40px;
  padding-bottom: 40px;
`

export const Logo = styled.img`
  width: 125px;
  height: auto;
`

export const HeaderTitle = styled.h1`
  font-size: 36px;
  color: ${cores.pink};
  font-weight: 900;
  width: 539px;
  @media (max-width: 768px) {
    font-size: 18px;
    width: 80%;
  }
`
