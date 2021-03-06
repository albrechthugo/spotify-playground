import * as S from './styles'

interface ButtonProps {
  label: string
  onClick: () => void
}

export const Button = ({ label, onClick }: ButtonProps): JSX.Element => {
  return <S.Button onClick={onClick}>{label}</S.Button>
}
