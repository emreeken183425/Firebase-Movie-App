import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Login from '../pages/Login'
import Main from '../pages/Main'
import MoviDetail from '../pages/MovieDetail'
import Register from '../pages/Register'


const AppRouter=()=> {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Main/>} />
      <Route path='/Login' element={<Login/>} />
      <Route path='/register' element={<Register/>} />
      <Route path='/Details/:id' element={<MoviDetail/>} />

  
    </Routes>
    </BrowserRouter>
  )
}

export default AppRouter