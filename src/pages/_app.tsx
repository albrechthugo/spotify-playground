import React from 'react'
import { CookiesProvider } from 'react-cookie'

import { ThemeProvider } from '@mui/material'
import { NextPage } from 'next'
import NextNProgress from 'nextjs-progressbar'

import { Layout } from '~/components'
import UserProvider from '~/contexts/UserContext'
import GlobalStyle from '~/styles/global.styles'
import theme from '~/styles/theme'

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
          <ThemeProvider theme={theme}>
            <CustomLayout>
              <GlobalStyle />
              <Component {...pageProps} />
            </CustomLayout>
          </ThemeProvider>
        </UserProvider>
      </CookiesProvider>
    </>
  )
}

export default MyApp
