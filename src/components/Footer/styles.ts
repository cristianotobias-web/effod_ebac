import styled from 'styled-components'
import { cores } from '../../styles'
import vetor from '../../assets/images/Vector.svg'

export const ContainerFooter = styled.footer`
  background-image: url(${vetor});
  background-size: cover;
  background-position: center;
  background-color: ${cores.pink};
  padding: 32px 0;
  font-size: 14px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  text-align: center;
  div {
    width: 800px;
    @media (max-width: 768px) {
      width: 400px;
    }
  }
`
export const Logo = styled.img`
  width: 100px;
  height: auto;
`
export const SectionFooter = styled.div`
  margin-bottom: 64px;
  display: flex;
  justify-content: center;
`

export const Links = styled.ul`
  display: flex;
  margin-top: 32px;
`

export const Link = styled.a`
  color: ${cores.pink};
  text-decoration: none;
  margin-right: 3px;
`
