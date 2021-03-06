import { MutableRefObject, useEffect, useRef } from 'react'

interface UseTokenProps {
  token: MutableRefObject<string>
}

export const useToken = (): UseTokenProps => {
  const token = useRef('')

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.hash.substring(1))
    token.current = searchParams.get('access_token') as string
  }, [])

  return {
    token
  }
}
