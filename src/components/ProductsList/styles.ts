import styled from 'styled-components'

export const ProductsListContainer = styled.section`
  margin-top: 54px;
  margin-bottom: 120px;
`

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 75px;
  row-gap: 54px;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`
export const Title = styled.h2`
  font-size: 18px;
  font-weight: bold;
`
