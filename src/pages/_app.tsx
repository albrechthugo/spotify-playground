import React from 'react'

import { NextPage } from 'next'
import NextNProgress from 'nextjs-progressbar'

import { Layout } from '~/components'
import '~/styles/globals.scss'

type Props = {
  Component: NextPage & { layout: typeof Layout }
  pageProps: any
}

function MyApp({ Component, pageProps }: Props) {
  const CustomLayout = Component.layout ? Component.layout : React.Fragment

  return (
    <>
      <NextNProgress color="#c2f8cb" stopDelayMs={200} />
      <CustomLayout>
        <Component {...pageProps} />
      </CustomLayout>
    </>
  )
}

export default MyApp
