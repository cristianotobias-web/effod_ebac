import styled from 'styled-components'
import { breakpoints } from '../../styles'

export const RestaurantsListContainer = styled.section`
  padding-top: 80px;
  margin-bottom: 120px;
  @media (max-width: ${breakpoints.tablet}) {
    max-width: 100%;
  }
`

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 75px;
  row-gap: 54px;
  @media (max-width: ${breakpoints.desktop}) {
    gap: 20px;
  }
  @media (max-width: ${breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`
export const Title = styled.h2`
  font-size: 18px;
  font-weight: bold;
`
