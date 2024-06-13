import styled from 'styled-components'
import { cores } from '../../styles'
import vetor from '../../assets/images/Vector.svg'

export const ContainerFooter = styled.footer`
  background-image: url(${vetor});
  background-size: cover;
  background-position: center;
  background-color: ${cores.pink};
  .container {
    padding: 40px 0;
    height: 298px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    p {
      width: 480px;
      margin: 0 auto;
      font-size: 10px;
      text-align: center;
    }
    div {
      width: 800px;
      @media (max-width: 768px) {
        width: 400px;
      }
    }
  }
`
export const Logo = styled.img`
  width: 125px;
  height: auto;
  margin-bottom: 32px;
`
export const SectionFooter = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Links = styled.ul`
  display: flex;
`

export const Link = styled.a`
  color: ${cores.pink};
  text-decoration: none;
  margin-right: 3px;
`
