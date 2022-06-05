import React, { useContext } from 'react'

import { UserContext } from '~/contexts'

export const useUser = (): {
  user: string
  setCurrentUser: (user: string) => void
} => {
  const { user, setUser } = useContext(UserContext)

  const setCurrentUser = (user: string): void => {
    setUser(user)
  }

  return {
    user,
    setCurrentUser
  }
}
