import React from 'react'
import { createContext } from 'react'

const AuthContext=createContext();
 const AuthContexProvider=({children})=> {
  return (
    <AuthContext.Provider>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContexProvider