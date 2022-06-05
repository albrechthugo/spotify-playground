import React from 'react'
import { CookiesProvider } from 'react-cookie'

import { NextPage } from 'next'
import NextNProgress from 'nextjs-progressbar'

import { Layout } from '~/components'
import UserProvider from '~/contexts/UserContext'
import GlobalStyle from '~/styles/global.styles'

interface MyAppProps {
  Component: NextPage & { layout: typeof Layout }
  pageProps: any
}

function MyApp({ Component, pageProps }: MyAppProps) {
  const CustomLayout = Component.layout ? Component.layout : React.Fragment

  return (
    <>
      <NextNProgress color="#c2f8cb" stopDelayMs={200} />
      <CookiesProvider>
        <UserProvider>
          <CustomLayout>
            <GlobalStyle />
            <Component {...pageProps} />
          </CustomLayout>
        </UserProvider>
      </CookiesProvider>
    </>
  )
}

export default MyApp
