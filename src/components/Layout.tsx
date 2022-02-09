import layoutStyles from '~/styles/Layout.module.scss'

import { Header } from './Header'
import { SideMenu } from './SideMenu'

interface LayoutProps {
  children: React.ReactNode
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <main className={layoutStyles.gridContainer}>
      <Header />
      <SideMenu />
      <section className={layoutStyles.contentWrapper}>{children}</section>
    </main>
  )
}
