import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import Cookies from 'universal-cookie'
const cookies = new Cookies();  

//receives component and any other props represented by ...rest
export default function ProtectedRoutes({ component: Component, ...rest}){
  return(
    //this route takes other routes assigned to it from the main routes setup and return the same route if condition is met
    <Route
      {...rest}
      render = {(props) => {
        //get cookie from browser if logged in
        const token = cookies.get("TOKEN")
        //returns route if there is a valid token set in the cookies
        if(token){
          return <Component {...props}/>
        } else {
          //redirect user to login page if user aint logged in
          return (
            <Redirect
              to={{
                pathname: '/login',
                state: {
                  from: props.location,
                },
              }}
            />
          )
        }
      }}
    />
  )
}