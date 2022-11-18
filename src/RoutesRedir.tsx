import React from 'react'
import { Route, BrowserRouter, Routes } from 'react-router-dom'
import Home from './Home'
import About from './cryptoview-redir/About'
import Login from './cryptoview-redir/Login.js'
import Profile from './cryptoview-redir/Profile'
import Register from './cryptoview-redir/Register.js'
import FreeComponent from './cryptoview-redir/FreeComponent'
import AuthComponent from './cryptoview-redir/AuthComponent'


const RoutesRedir = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Home/>} path="/"/>
        <Route element={<About/>} path="/about"/>
        <Route element={<Register/>} path='/register'/>
        <Route element={<Login/>} path='/login'/>
        <Route element={<Profile/>} path='/profile'/>
        <Route element={<FreeComponent/>} path='/free'/>
        <Route element={<AuthComponent/>} path='/auth'/>
      </Routes>
    </BrowserRouter>
  )
}

export default RoutesRedir;