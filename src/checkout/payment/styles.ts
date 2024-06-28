import styled from 'styled-components'
import { breakpoints, colors } from '../../styles'

type InputGroupProps = {
  maxWidth?: string
  marginTop?: string
}

export const Row = styled.div<InputGroupProps>`
  display: flex;
  align-items: flex-end;
  column-gap: 24px;
  margin-top: ${(props) => props.marginTop || '0'};
  @media (max-width: ${breakpoints.tablet}) {
    display: block;
  }
`
export const InputGroup = styled.div<InputGroupProps>`
  flex: auto;
  max-width: ${(props) => props.maxWidth || 'auto'};
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
    @media (max-width: ${breakpoints.tablet}) {
      margin-top: 16px;
    }
  }
`
export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${colors.black};
  opacity: 0.7;
`
export const PaymentContainer = styled.div`
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
  h3 {
    font-size: 16px;
    margin-bottom: 16px;
  }
`
export const PaymentForm = styled.form`
  background-color: ${colors.pink};
  z-index: 1;
  max-width: 360px;
  width: 100%;
  padding: 10px;
  h3 {
    color: ${colors.pinkLight};
  }
`
export const ButtonContainer = styled.div`
  margin-top: 24px;
  display: flex;
  flex-direction: column;
  gap: 5px;
`
