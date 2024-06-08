import styled from 'styled-components'
import { cores } from '../../styles'
import { Props } from '.'

export const TagContainer = styled.div<Props>`
  color: ${cores.white};
  margin-left: 5px;
  background-color: ${(props) => {
    if (props.size === 'big') {
      return cores.transparent
    } else if (props.size === 'small') {
      return cores.pink
    } else if (props.size === 'normal') {
      return cores.pink
    }
  }};
  font-size: ${(props) => {
    if (props.size === 'big') {
      return '30px'
    } else if (props.size === 'small') {
      return '14px'
    } else if (props.size === 'normal') {
      return '16px'
    }
  }};
  font-weight: ${(props) => {
    if (props.size === 'big') {
      return 'normal'
    } else if (props.size === 'small') {
      return 'bold'
    } else if (props.size === 'normal') {
      return 'normal'
    }
  }};
  padding: ${(props) => {
    if (props.size === 'big') {
      return '8px 16px'
    } else if (props.size === 'small') {
      return '4px 6px'
    } else if (props.size === 'normal') {
      return '4px 6px'
    }
  }};
  display: inline-block;
`
