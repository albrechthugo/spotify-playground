import { Header } from '../Header'
import { SideMenu } from '../SideMenu'
import * as S from './styles'

interface LayoutProps {
  children: React.ReactNode
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <S.Main>
      <Header />
      <SideMenu />
      <S.ChildrenWrapper>{children}</S.ChildrenWrapper>
    </S.Main>
  )
}
