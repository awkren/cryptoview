import React from 'react'
import { Route, BrowserRouter, Routes } from 'react-router-dom'
import Home from './Home'
import About from './cryptoview-redir/About'

const RoutesRedir = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Home/>} path="/"/>
        <Route element={<About/>} path="/about"/>
      </Routes>
    </BrowserRouter>
  )
}

export default RoutesRedir;