import styled from 'styled-components'
import { TagContainer } from '../Tag/styles'
import { cores } from '../../styles'

export const Image = styled.div`
  width: 100%;
  height: 280px;
  display: block;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;

  .container {
    position: relative;
    padding-top: 200px;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
  }
  ${TagContainer} {
    position: absolute;
    top: 25px;
    left: -20px;
  }
  /* Camada preta */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(
      0,
      0,
      0,
      0.2
    ); /* Ajuste a opacidade conforme necessário */
    z-index: 1; /* Para garantir que a camada preta fique entre a imagem e o texto */
  }
`

export const Title = styled.h2`
  font-size: 32px;
  font-weight: 900;
  color: ${cores.white};
  position: relative;
  z-index: 2;
`
