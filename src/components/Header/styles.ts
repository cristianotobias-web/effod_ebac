import { styled } from 'styled-components'
import vetor from '../../assets/images/Vector.svg'
import { cores } from '../../styles'

export const HeaderBar = styled.header`
  background-image: url(${vetor});
  background-size: cover;
  background-position: center;
  height: 384px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  text-align: center;
`

export const Logo = styled.img`
  width: 100px;
  height: auto;
`

export const HeaderTitle = styled.h1`
  margin: 0;
  font-size: 1.2rem;
  color: ${cores.pink};
  font-weight: bold;
`
