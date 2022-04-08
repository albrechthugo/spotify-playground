import { CSSProperties, useEffect } from 'react'
import { useCookies } from 'react-cookie'

import type { NextPage } from 'next'
import { useRouter } from 'next/router'

import { Button } from '~/components'
import { config } from '~/core/config'
import { useToken } from '~/hooks'

const styles: CSSProperties = {
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
}

const Home: NextPage = () => {
  const { push } = useRouter()
  const [, setCookie] = useCookies(['token'])
  const { token } = useToken()
  const { auth_base_url, client_id, redirect_uri, scopes } = config

  useEffect(() => {
    if (token) {
      setCookie('token', token, {
        sameSite: true,
        path: '/'
      })

      push('/dashboard')
    }
  }, [push, setCookie, token])

  return (
    <main style={styles}>
      <Button
        label="Entrar com Spotify"
        onClick={() =>
          push({
            pathname: auth_base_url,
            query: {
              client_id,
              response_type: 'token',
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
