import styled from 'styled-components'
import { cores } from '../../styles'
import { Link } from 'react-router-dom'

export const ButtonContainer = styled.button`
  padding: 8px;
  background-color: ${cores.pinkLight};
  color: ${cores.pink};
  width: 100%;
  font-size: 16px;
  border: none;
  cursor: pointer;
`
export const ButtonLink = styled(Link)`
  background-color: ${cores.pink};
  color: ${cores.white};
  padding: 5px;
  text-decoration: none;
`
