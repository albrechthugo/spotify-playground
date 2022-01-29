import headerStyles from '~/styles/Header.module.scss'

export const Header = () => {
  return (
    <header className={headerStyles.container}>
      <h1 className={headerStyles.title}>Spotify Playground</h1>
      <span className={headerStyles.username}>Stephen Curry</span>
    </header>
  )
}
