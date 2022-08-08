import React from 'react'
import AppRouter from './router/AppRouter'
import AudioContextProvider from './context/AuthContext.jsx'
const App=()=> {
  return (
    <div>
      <AudioContextProvider>
      <AppRouter/>
      </AudioContextProvider>
       
    </div>
  )
}

export default App
