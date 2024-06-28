import styled from 'styled-components'
import { breakpoints, colors } from '../../styles'

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${colors.black};
  opacity: 0.7;
`
export const DeliveryContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  justify-content: flex-end;
  z-index: 2;
  &.visible {
    display: flex;
  }
`
export const FormContainer = styled.form`
  background-color: ${colors.pink};
  z-index: 1;
  max-width: 360px;
  width: 100%;
  padding: 10px;
  h3 {
    color: ${colors.pinkLight};
    margin-bottom: 16px;
    font-size: 16px;
  }
  button {
    margin-bottom: 10px;
  }
`
export const Sidebar = styled.aside`
  background-color: ${colors.pink};
  z-index: 1;
  padding: 40px 16px 0;
  max-width: 360px;
  width: 100%;
  max-height: 100vh; /* Altura máxima igual à altura da viewport */
  overflow-y: auto; /* Permitir rolagem vertical */

  h3 {
    color: ${colors.pinkLight};
    margin-bottom: 16px;
    font-size: 16px;
    font-weight: 700;
  }
`
export const Rows = styled.div`
  color: ${colors.pinkLight};
  margin-bottom: 24px;
`
export const InputWrapper = styled.div`
  display: flex;
  gap: 16px;
  color: ${colors.green};
  div {
    flex: 1;
  }
  &.error {
    border: 2px solid ${colors.red};
    color: ${colors.red};
  }
  @media (max-width: ${breakpoints.tablet}) {
    display: block;
  }
`
export const InputGroup = styled.div`
  flex: auto;
  label {
    font-size: 14px;
    margin-bottom: 8px;
    display: block;
    color: ${colors.white};
  }
  input {
    background-color: ${colors.white};
    height: 32px;
    padding: 0 8px;
    border: 1px solid ${colors.white};
    width: 100%;
    margin-bottom: 8px;
    font-size: 14px;
    color: ${colors.green};

    &.error {
      border: 2px solid ${colors.red};
      color: ${colors.red};
    }
  }
`
export const ButtonContainer = styled.div`
  margin-top: 24px;
`
