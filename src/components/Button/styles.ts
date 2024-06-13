import styled from 'styled-components'
import { cores } from '../../styles'
import { Link } from 'react-router-dom'

export const ButtonContainer = styled.button`
  padding: 4px 6px;
  background-color: ${cores.pinkLight};
  color: ${cores.pink};
  width: 100%;
  font-size: 14px;
  border: none;
  cursor: pointer;
  font-weight: 900;
`
export const ButtonLink = styled(Link)`
  background-color: ${cores.pink};
  color: ${cores.pinkLight};
  padding: 5px;
  text-decoration: none;
`
