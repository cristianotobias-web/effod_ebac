import styled from 'styled-components'

export const ProductsListContainer = styled.section`
  padding: 32px 0;
`

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 60px;
  row-gap: 20px;
  margin-top: 56px;
  margin-bottom: 120px;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`
export const Title = styled.h2`
  font-size: 18px;
  font-weight: bold;
`
