import { TagContainer } from './styles'

export type Props = {
  size?: 'small' | 'big' | 'normal'
  children: string
}
const Tag = ({ children, size }: Props) => (
  <TagContainer size={size}>{children}</TagContainer>
)

export default Tag
