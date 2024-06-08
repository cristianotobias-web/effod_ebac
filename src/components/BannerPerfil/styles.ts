import styled from 'styled-components'
import { TagContainer } from '../Tag/styles'
import { cores } from '../../styles'

export const Image = styled.div`
  width: 100%;
  height: 280px;
  display: block;
  background-repeat: no-repeat;
  background-size: cover;

  .container {
    position: relative;
    padding-top: 200px;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
  }
  ${TagContainer} {
    position: absolute;
    top: 32px;
  }
`
export const Title = styled.h2`
  font-size: 36px;
  font-weight: bold;
  max-width: 450px;
  color: ${cores.white};
`
