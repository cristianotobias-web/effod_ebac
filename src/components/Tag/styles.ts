import styled from 'styled-components'
import { cores } from '../../styles'
import { Props } from '.'

export const TagContainer = styled.div<Props>`
  color: ${cores.pinkLight};
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
      return '32px'
    } else if (props.size === 'small') {
      return '12px'
    } else if (props.size === 'normal') {
      return '14px'
    }
  }};
  font-weight: ${(props) => {
    if (props.size === 'big') {
      return '100'
    } else if (props.size === 'small') {
      return '700'
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
