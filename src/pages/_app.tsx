import React from 'react'
import { CookiesProvider } from 'react-cookie'

import { NextPage } from 'next'
import NextNProgress from 'nextjs-progressbar'

import { Layout } from '~/components'
import GlobalStyle from '~/styles/global.styles'

type Props = {
  Component: NextPage & { layout: typeof Layout }
  pageProps: any
}

function MyApp({ Component, pageProps }: Props) {
  const CustomLayout = Component.layout ? Component.layout : React.Fragment

  return (
    <>
      <NextNProgress color="#c2f8cb" stopDelayMs={200} />
      <CookiesProvider>
        <CustomLayout>
          <GlobalStyle />
          <Component {...pageProps} />
        </CustomLayout>
      </CookiesProvider>
    </>
  )
}

export default MyApp
