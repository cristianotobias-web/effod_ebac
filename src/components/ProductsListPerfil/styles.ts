import styled from 'styled-components'

export const ProductsListContainer = styled.section`
  padding: 54px 0;
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
`
export const Title = styled.h2`
  font-size: 18px;
  font-weight: bold;
`
