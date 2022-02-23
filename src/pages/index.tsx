import { CSSProperties, useEffect } from 'react'

import type { NextPage } from 'next'
import { useRouter } from 'next/router'

import { Button } from '~/components'
import { config } from '~/core/config'

const styles: CSSProperties = {
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
}

const Home: NextPage = () => {
  const { push, query } = useRouter()
  const { auth_base_url, client_id, redirect_uri, scopes } = config

  useEffect(() => {
    if (query?.code) push('/dashboard')
  }, [push, query])

  return (
    <main style={styles}>
      <Button
        label="Entrar com Spotify"
        onClick={() =>
          push({
            pathname: auth_base_url,
            query: {
              client_id,
              response_type: 'code',
              redirect_uri,
              scope: scopes
            }
          })
        }
      />
    </main>
  )
}

export default Home
