import React from 'react'

import { NextPage } from 'next'

import { Layout } from '~/components'
import '~/styles/globals.scss'

type Props = {
  Component: NextPage & { layout: typeof Layout }
  pageProps: any
}

function MyApp({ Component, pageProps }: Props) {
  const CustomLayout = Component.layout ? Component.layout : React.Fragment

  return (
    <CustomLayout>
      <Component {...pageProps} />
    </CustomLayout>
  )
}

export default MyApp
