import type { NextPage } from 'next'
import { useRouter } from 'next/router'

const Home: NextPage = () => {
  const { push } = useRouter()

  return (
    <>
      <h1>authpage</h1>
      <button onClick={() => push('dashboard')}>dashboard</button>
    </>
  )
}

export default Home
