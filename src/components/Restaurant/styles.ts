import styled from 'styled-components'
import { breakpoints, colors } from '../../styles'
import { TagContainer } from '../Tag/styles'

export const Card = styled.div`
  background-color: ${colors.white};
  position: relative;
  border: 1px solid ${colors.pink};
  > img {
    width: 100%;
    max-height: 217px;
    object-fit: cover;
    @media (max-width: ${breakpoints.desktop}) {
      max-height: 167px;
      min-height: 167px;
      height: 250px;
    }
  }
  ${TagContainer} {
    margin-right: 8px;
  }
`
export const CardContent = styled.div`
  padding: 8px;
`
export const Title = styled.h3`
  font-weight: 700;
  font-size: 18px;
  display: block;
`
export const Description = styled.p`
  font-size: 14px;
  line-height: 22px;
  font-weight: 400;
  display: block;
  margin-top: 16px;
  padding-bottom: 20px;
  height: 120px;
  @media (max-width: ${breakpoints.desktop}) {
    height: 40%;
  }
  @media (max-width: ${breakpoints.tablet}) {
    height: 40%;
  }
`
export const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const CategoriesContainer = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
`
export const GradeContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  p {
    font-size: 18px;
    font-weight: 700;
  }
  img {
    width: 20px;
  }
`
