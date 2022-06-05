import { useUser } from '~/hooks'

import * as S from './styles'

export const Header = () => {
  const { user } = useUser()

  const [firstName] = user.split(' ')

  return (
    <S.Header>
      <S.Title>Spotify Playground</S.Title>
      <S.Username>Bem vindo, {firstName}</S.Username>
    </S.Header>
  )
}
