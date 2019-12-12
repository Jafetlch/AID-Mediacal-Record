import React, { createContext, useContext } from 'react'
import { useUsers } from '../hooks/useUsers'

export const UserContext = createContext()

export const UserProvider = ({ children }) => {
  const {
    users,
    setUsers,
    currentUser,
    setCurrentUser,
    selectedUser,
    setSelectedUser
  } = useUsers()

  return (
    <UserContext.Provider
      value={{
        users,
        setUsers,
        currentUser,
        setCurrentUser,
        selectedUser,
        setSelectedUser
      }}
    >
      {children}
    </UserContext.Provider>
  )
}

export const useUsersValues = () => useContext(UserContext)
