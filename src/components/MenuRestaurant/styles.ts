import styled from 'styled-components'
import { breakpoints, colors } from '../../styles'
import { TagContainer } from '../Tag/styles'

export const Card = styled.div`
  background-color: ${colors.pink};
  color: ${colors.pinkLight};
  padding: 8px;
  position: relative;
  border-radius: 5px;
  img {
    max-width: 100%;
    object-fit: cover;
    width: 100%;
    height: 167px;
  }
  ${TagContainer} {
    margin-right: 8px;
  }
`
export const Title = styled.h3`
  font-weight: bold;
  font-size: 16px;
  display: block;
  margin-top: 8px;
  margin-bottom: 8px;
`
export const Description = styled.p`
  font-size: 14px;
  line-height: 22px;
  display: block;
  margin-top: 8px;
  padding-bottom: 10px;
  height: 180px;
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
export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.73);
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.5s ease, visibility 0.5s ease;
  &.visible {
    opacity: 1;
    visibility: visible;
  }
  @media (max-width: ${breakpoints.tablet}) {
    width: 100%;
  }
`

export const ModalContent = styled.div`
  padding: 20px;
  display: flex;
  width: 100%;
  padding: 32px;
  gap: 20px;
  justify-content: space between;
  background-color: ${colors.pink};
  color: ${colors.white};
  position: relative;
  @media (max-width: ${breakpoints.tablet}) {
    flex-direction: column;
    width: 100%;
  }
`
export const CloseModal = styled.div`
  position: absolute;
  top: 5px;
  right: 5px;
`
export const ModalTitle = styled.div`
  img {
    width: 280px;
    height: 280px;
    object-fit: cover;
    @media (max-width: 768px) {
      width: 100%;
    }
  }
`
export const ModalBody = styled.div`
  h4 {
    font-size: 18px;
    @media (max-width: 768px) {
      font-size: 12px;
    }
  }
  h4,
  p {
    margin-bottom: 18px;
    @media (max-width: 768px) {
      margin-bottom: 10px;
    }
  }
  p {
    line-height: 22px;
    font-size: 14px;
    @media (max-width: 768px) {
      line-height: 18px;
      font-size: 10px;
    }
  }
  button {
    font-size: 14px;
    padding: 4px;
    width: 215px;
  }
`
