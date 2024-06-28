import styled from 'styled-components'
import { colors } from '../../styles'

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${colors.black};
  opacity: 0.7;
`
export const OrderContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  justify-content: flex-end;
  z-index: 2;
  h3 {
    font-size: 16px;
  }
  h3,
  p {
    color: ${colors.pinkLight};
    margin-bottom: 16px;
  }
  p {
    font-size: 14px;
    line-height: 22px;
  }
  &.visible {
    display: flex;
  }
`
export const OrderContent = styled.form`
  background-color: ${colors.pink};
  z-index: 1;
  max-width: 360px;
  width: 100%;
  padding: 23px 10px;
`
