import styled from 'styled-components'
import { colors } from '../../styles'
import { ButtonContainer } from '../Button/styles'
import close from '../../assets/images/lixeira-de-reciclagem.png'

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${colors.black};
  opacity: 0.7;
`
export const CartContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  justify-content: flex-end;
  z-index: 2;
  &.is-open {
    display: flex;
  }
`
export const SidebarContainer = styled.div`
  background-color: ${colors.pink};
  z-index: 1;
  max-width: 360px;
  width: 100%;
`
export const Sidebar = styled.aside`
  background-color: ${colors.pink};
  z-index: 1;
  padding: 40px 16px 0;
  max-width: 360px;
  width: 100%;
  max-height: 100vh; /* Altura máxima igual à altura da viewport */
  overflow-y: auto; /* Permitir rolagem vertical */
  ${ButtonContainer} {
    max-width: 100%;
    width: 100%;
    margin-bottom: 20px;
  }
  p {
    font-size: 14px;
    text-align: center;
    color: ${colors.pinkLight};
  }
`
export const Price = styled.p`
  font-weight: bold;
  font-size: 16px;
  display: flex;
  justify-content: space-between;
  color: ${colors.pinkLight};
  margin: 50px 0 18px;
`
export const CartItem = styled.li`
  display: flex;
  background-color: ${colors.pinkLight};
  padding: 8px;
  position: relative;
  margin-bottom: 10px;
  img {
    height: 80px;
    width: 80px;
    object-fit: cover;
    margin-right: 24px;
  }
  h3 {
    color: ${colors.pink};
    font-weight: bold;
    font-size: 16px;
    margin-bottom: 16px;
  }
  span {
    display: block;
    font-size: 14px;
    color: ${colors.pink};
  }
  button {
    background-image: url(${close});
    width: 16px;
    height: 16px;
    border: none;
    background-color: transparent;
    position: absolute;
    bottom: 8px;
    right: 8px;
    cursor: pointer;
  }
`
