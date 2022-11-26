import React, { useState } from 'react'
import { Route, BrowserRouter, Switch } from 'react-router-dom'
import Home from './Home'
import Earn from './cryptoview-structure/Earn'
import About from './cryptoview-redir/About'
import Login from './cryptoview-redir/Login.js'
import Profile from './cryptoview-redir/Profile'
import Register from './cryptoview-redir/Register.js'
import FreeComponent from './cryptoview-redir/FreeComponent'
import AuthComponent from './cryptoview-redir/AuthComponent.js'
import ProtectedRoutes from './cryptoview-redir/ProtectedRoutes.js'
import Courses from './cryptoview-structure/Courses'
import ReadDocs from './cryptoview-structure/ReadDocs'
import How from './cryptoview-structure/How'
import ReadMore from './cryptoview-structure/ReadMore'
import Press from './cryptoview-structure/Press'
import Developers from './cryptoview-structure/Developers'

const RoutesRedir = () => {
  return (
    <React.StrictMode>
    <BrowserRouter>
      <Switch>
        <Route exact component={Home} path="/"/>
        <Route component={About} path="/about"/>
        <Route exact component={Register} path='/register'/>
        <Route exact component={Login} path='/login'/>
        <Route component={Profile} path='/profile'/>
        <Route component={FreeComponent} path='/demo'/>
        <Route component={Earn} path='/earn'/>
        <Route component={Courses} path='/courses'/>
        <Route component={ReadDocs} path='/docs'/>
        <Route component={How} path='/howitworks'/>
        <Route component={ReadMore} path='/readmore'/>
        <Route component={Press} path='/press'/>
        <Route component={Developers} path='/developers'/>
        <ProtectedRoutes component={AuthComponent} path='/coins'/>
      </Switch>
    </BrowserRouter>
    </React.StrictMode>
  )
}

export default RoutesRedir;