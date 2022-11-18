import React, {useEffect, useState} from 'react'
import axios from 'axios'
import Cookies from 'universal-cookie'

const AuthComponent = () => {
  const cookies = new Cookies();
  const token = cookies.get("TOKEN")
  const [message, setMessage] = useState("")
  useEffect(() => {
    //set configs for api call
    const configuration = {
      method: 'get',
      url: 'https://cryptoview-server-production.up.railway.app/auth-endpoint',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
    //make api call
    axios(configuration)
      .then((result) => {
        //assign msg in our result to the msg we initialize above
        setMessage(result.data.message)
      })
      .catch((error) => {
        error = new Error()
      })
  }, [])

  // logout func
  const logout = () =>{
    //destroy cookie
    cookies.remove("TOKEN", { path: '/'})
    //redirect user to home
    window.location.href= '/'
  }
  return (
    <div>
      <h1 className='text-center'>Auth Component</h1>
      <h3 className='text-center'>{message}</h3>
      {/* logout button */}
      <button type='submit' onClick={() => logout()}variant='danger'>Logout</button>
    </div>
  )
}

export default AuthComponent