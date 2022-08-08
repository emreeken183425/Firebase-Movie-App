import React from 'react'
import { createContext ,useState} from 'react'

export const AuthContext=createContext();
 const AuthContexProvider=({children})=> {
  const [currentUser, setCurrentUser] = useState(false)
  return (
    <AuthContext.Provider value={currentUser } >
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContexProvider