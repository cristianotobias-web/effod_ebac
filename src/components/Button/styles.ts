import styled from 'styled-components'
import { colors } from '../../styles'
import { Link } from 'react-router-dom'

export const ButtonContainer = styled.button`
  padding: 4px 6px;
  background-color: ${colors.pinkLight};
  color: ${colors.pink};
  width: 100%;
  font-size: 14px;
  border: none;
  cursor: pointer;
  font-weight: 900;
`
export const ButtonLink = styled(Link)`
  background-color: ${colors.pink};
  color: ${colors.pinkLight};
  padding: 5px;
  text-decoration: none;
`
