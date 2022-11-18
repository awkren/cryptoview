import React, {useEffect, useState} from 'react'
import axios from 'axios'

const FreeComponent = () => {
  const [message, setMessage] = useState('');
  useEffect(() => {
    //set configs for api call
    const configuration = {
      method: 'get',
      url: 'https://cryptoview-server-production.up.railway.app/free-endpoint',
    }
  //make api calls
  axios(configuration)
    .then((result) => {
      //assign msg in result to the msg we initiliaze above
      setMessage(result.data.message)
    })
    .catch((error) => {
      error = new Error()
    })
  }, [])
  return (
    <div>
      <h1 className='text-center'>Free Component</h1>
      {/* display msg from api call */}
      <h3 className='text-center text-danger'>{message}</h3>
    </div>
  )
}

export default FreeComponent