import React from 'react'

import { RouterContext } from 'next/dist/shared/lib/router-context'
import { NextRouter } from 'next/router'

type RenderWithRouter = {
  router?: Partial<NextRouter>
  children: React.ReactNode
}

export function RenderWithRouter({ children, router = {} }: RenderWithRouter) {
  const {
    route = '',
    pathname = '',
    query = {},
    asPath = '',
    push = async () => true,
    replace = async () => true,
    reload = () => null,
    back = () => null,
    prefetch = async () => undefined,
    beforePopState = () => null,
    isFallback = false,
    events = {
      on: () => null,
      off: () => null,
      emit: () => null
    }
  } = router

  return (
    <RouterContext.Provider
      value={
        {
          route,
          pathname,
          query,
          asPath,
          push,
          replace,
          reload,
          back,
          prefetch,
          beforePopState,
          isFallback,
          events
        } as any
      }
    >
      {children}
    </RouterContext.Provider>
  )
}
