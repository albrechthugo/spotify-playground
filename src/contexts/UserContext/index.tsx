import React, { createContext, useState } from 'react'

interface Props {
  children: React.ReactNode
}

interface UserContext {
  user: string
  setUser: React.Dispatch<React.SetStateAction<string>>
}

const DEFAULT_VALUE: UserContext = {
  user: 'Usuário',
  setUser: () => {}
}

export const UserContext = createContext<UserContext>(DEFAULT_VALUE)

const UserProvider = ({ children }: Props) => {
  const [user, setUser] = useState(DEFAULT_VALUE.user)

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  )
}

export default UserProvider
