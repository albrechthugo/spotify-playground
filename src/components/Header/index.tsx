import Link from 'next/link'

import { useUser } from '~/hooks'

import * as S from './styles'

export const Header = () => {
  const { user } = useUser()

  const [firstName] = user.split(' ')

  return (
    <S.Header>
      <Link href="/" passHref>
        <S.Title>Spotify Playground</S.Title>
      </Link>
      <S.Username>Bem vindo, {firstName}</S.Username>
    </S.Header>
  )
}
