import React, {useEffect, useState} from 'react'
import axios from 'axios'
import Cookies from 'universal-cookie'

const AuthComponent = props => {

  const cookies = new Cookies();
  const token = cookies.get("TOKEN")
  const [message, setMessage] = useState("")
  const [email, setEmail] = useState("")
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
      <p className='text-[1rem] text-center mt-[.5rem] font-[400] text-[red] mb-[rem]'>You are logged in with this unique token:</p>
      <p className='text-center text-[green]'>{token}</p>
      <p className='text-[1rem] text-center mt-[rem] font-[400] mb-[.5rem] text-[red]'>Do not share it with anyone!</p>
      <button type='submit' className='block m-auto bg-[red] w-[5rem] h-[2.5rem] rounded-[6px] text-[white] mb-[.5rem]' onClick={() => logout()}variant='danger'>Logout</button>
      <hr className='w-[70%] mb-[.5rem] m-auto'></hr>
      <p className='text-center text-[1.6rem] font-[300]'>Welcome to the</p>
      <p className='text-center text-[1.7rem] font-[500]'>CryptoView Coin Tracker</p>
      {/* <p className='text-center'>{message}</p> */}
      <p className='text-center italic text-[1.1rem]'>The best coin hub on the internet!</p>
      {/* logout button */}
    </div>
  )
}

export default AuthComponent