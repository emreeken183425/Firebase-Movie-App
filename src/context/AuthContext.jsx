import React, { useEffect } from 'react'
import { createContext ,useState} from 'react'

export const AuthContext=createContext();
 const AuthContexProvider=({children})=> {
  const [currentUser, setCurrentUser] = useState(false)

 useEffect(() => {
   setCurrentUser(JSON.parse(sessionStorage.getItem('user')))
 }, [])
 
  return (
    <AuthContext.Provider value={currentUser } >
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContexProvider