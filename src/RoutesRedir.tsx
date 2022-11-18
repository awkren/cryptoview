import React from 'react'
import { Route, BrowserRouter, Switch } from 'react-router-dom'
import Home from './Home'
import About from './cryptoview-redir/About'
import Login from './cryptoview-redir/Login.js'
import Profile from './cryptoview-redir/Profile'
import Register from './cryptoview-redir/Register.js'
import FreeComponent from './cryptoview-redir/FreeComponent'
import AuthComponent from './cryptoview-redir/AuthComponent.js'
import ProtectedRoutes from './cryptoview-redir/ProtectedRoutes.js'


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
        <Route component={FreeComponent} path='/free'/>
        <ProtectedRoutes component={<AuthComponent/>} path='/auth'/>
      </Switch>
    </BrowserRouter>
    </React.StrictMode>
  )
}

export default RoutesRedir;