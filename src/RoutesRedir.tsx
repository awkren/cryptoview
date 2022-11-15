import React from 'react'
import { Route, BrowserRouter, Routes } from 'react-router-dom'
import Home from './Home'
import About from './cryptoview-redir/About'
import Register from './cryptoview-redir/Register'
import Login from './cryptoview-redir/Login'
import Profile from './cryptoview-redir/Profile'

const RoutesRedir = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Home/>} path="/"/>
        <Route element={<About/>} path="/about"/>
        <Route element={<Register/>} path='/register'/>
        <Route element={<Login/>} path='/login'/>
        <Route element={<Profile/>} path='/profile'/>
      </Routes>
    </BrowserRouter>
  )
}

export default RoutesRedir;