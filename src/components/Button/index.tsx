import * as S from './styles'

type Props = {
  type: 'button' | 'link' | 'submit'
  to?: string
  onClick?: () => void
  children: React.ReactNode
  disabled?: boolean
}

const Button = ({ type, to, onClick, children, disabled }: Props) => {
  if (type === 'submit') {
    return (
      <S.ButtonContainer type="submit" onClick={onClick} disabled={disabled}>
        {children}
      </S.ButtonContainer>
    )
  }
  if (type === 'button') {
    return (
      <S.ButtonContainer type="button" onClick={onClick}>
        {children}
      </S.ButtonContainer>
    )
  }
  return <S.ButtonLink to={to as string}>{children}</S.ButtonLink>
}

export default Button
