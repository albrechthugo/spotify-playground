import { PropsWithChildren } from 'react'

import { Header } from '../Header'
import { SideMenu } from '../SideMenu'
import * as S from './styles'

export const Layout = ({ children }: PropsWithChildren<any>) => {
  return (
    <S.Main>
      <Header />
      <SideMenu />
      <S.ChildrenWrapper>{children}</S.ChildrenWrapper>
    </S.Main>
  )
}
