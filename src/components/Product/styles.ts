import styled from 'styled-components'
import { cores } from '../../styles'
import { TagContainer } from '../Tag/styles'

export const Card = styled.div`
  background-color: ${cores.white};
  position: relative;
  border: 1px solid ${cores.pink};
  padding-bottom: 8px;
  img {
    width: 100%;
  }
  ${TagContainer} {
    margin-right: 8px;
  }
`
export const CardContent = styled.div`
  padding: 8px;
`
export const Title = styled.h3`
  font-weight: bold;
  font-size: 16px;
  display: block;
  margin-top: 16px;
  margin-bottom: 8px;
`
export const Description = styled.p`
  font-size: 14px;
  line-height: 22px;
  display: block;
  margin-top: 16px;
  padding-bottom: 20px;
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
  img {
    width: 16px;
  }
`
