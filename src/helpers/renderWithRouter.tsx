import React, { PropsWithChildren } from 'react'

import { RouterContext } from 'next/dist/shared/lib/router-context'
import { NextRouter } from 'next/router'

export function RenderWithRouter({
  children,
  router = {}
}: PropsWithChildren<{ router: Partial<NextRouter> }>) {
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
