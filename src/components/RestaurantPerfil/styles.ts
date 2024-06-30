import styled from 'styled-components'
import { breakpoints } from '../../styles'

export const RestaurantListContainer = styled.section`
  padding: 54px 0;
  @media (max-width: ${breakpoints.desktop}) {
    width: 100%;
  }
`

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 32px;
  row-gap: 32px;
  margin-bottom: 66px;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
  @media (max-width: ${breakpoints.desktop}) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: ${breakpoints.tablet}) {
    grid-template-columns: 1fr;
    width: 100%;
  }
`
export const Title = styled.h2`
  font-size: 18px;
  font-weight: bold;
`
