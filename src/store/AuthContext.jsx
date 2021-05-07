import React, { createContext, useContext, useEffect, useState } from 'react'
import { auth } from '../firebase'

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext)
}

export function AuthProvider({ children }) {

  const [curUser, setCurUser] = useState();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      setCurUser(user);
    })
    return unsubscribe;
  }, [])

  const login = (user) => {
    setCurUser(user);
  }


  const logout = () => {
    setCurUser(null);
  }

  const value = { curUser, login, logout };


  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}
