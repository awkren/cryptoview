import React, {useEffect, useState} from 'react'
import axios from 'axios'
import Cookies from 'universal-cookie'
import {FiArrowUp, FiArrowDown} from 'react-icons/fi'
import '../cryptoview-styles/AuthComponent.css'

const AuthComponent = props => {

  const cookies = new Cookies();
  const token = cookies.get("TOKEN")
  const [message, setMessage] = useState("")
  const [data, setData] = useState(null)

  const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=90&page=1&sparkline=false'

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
  
  useEffect(() => {
    axios
      .get(url).then((response) => {
        setData(response.data)
      })
      .catch((error) => {
        console.log(error)
      })
  }, []);

  // console.log(data) to check if api is working

  if(!data) return null;

  return (<>
    <div>
      <p className='text-[1rem] text-center mt-[.5rem] font-[400] text-[red] mb-[rem]'>You are logged in with this unique token:</p>
      <p className='text-center text-[green]'>{token}</p>
      <p className='text-[1rem] text-center mt-[rem] font-[400] mb-[.5rem] text-[red]'>Do not share it with anyone!</p>
      <button type='submit' className='block m-auto bg-[red] w-[5rem] h-[2.5rem] rounded-[6px] text-[white] mb-[.5rem]' onClick={() => logout()}variant='danger'>Logout</button>
      {/* <p className='text-center italic'>powered by CoinGecko</p> */}
      <hr className='w-[70%] mb-[.5rem] m-auto'></hr>
      <p className='text-center text-[1.6rem] font-[300]'>Welcome to the</p>
      <p className='text-center text-[1.7rem] font-[500]'>CryptoView Coin Tracker</p>
      {/* <p className='text-center'>{message}</p> */}
      <p className='text-center italic text-[1.1rem]'>The best coin hub on the internet!</p>
      {/* logout button */}
    </div>

    <div className='featured'>
            <div className='container'>
                {/* {Left Side} */}
                <div className='right'>

                    {/* first coin | index zero */}
                    <div className='card'>
                        <div className='top'>
                            {/* <img src={BTC} alt='/'/> */}
                            <img src={data[0].image} alt='/'/>
                        </div>
                        <div>
                            <h5>{data[0].name}</h5>
                            <p>${data[0].current_price.toLocaleString()}</p>
                        </div>

                        {data[0].price_change_percentage_24h < 0 ? (
                            <span className='red'>
                                <FiArrowDown className='icon'/>
                                {data[0].price_change_percentage_24h.toFixed(2)}%
                            </span>
                        ) : (
                            <span className='green'>
                                <FiArrowUp className='icon'/>
                                {data[0].price_change_percentage_24h.toFixed(2)}%
                            </span>
                        )}
                    </div>

                    {/* second coin | index one */}
                    <div className='card'>
                        <div className='top'>
                            {/* <img src={BTC} alt='/'/> */}
                            <img src={data[1].image} alt='/'/>
                        </div>
                        <div>
                            <h5>{data[1].name}</h5>
                            <p>${data[1].current_price.toLocaleString()}</p>
                        </div>

                        {data[1].price_change_percentage_24h < 0 ? (
                            <span className='red'>
                                <FiArrowDown className='icon'/>
                                {data[1].price_change_percentage_24h.toFixed(2)}%
                            </span>
                        ) : (
                            <span className='green'>
                                <FiArrowUp className='icon'/>
                                {data[1].price_change_percentage_24h.toFixed(2)}%
                            </span>
                        )}
                    </div>

                    {/* third coin | index two */}
                    <div className='card'>
                        <div className='top'>
                            {/* <img src={BTC} alt='/'/> */}
                            <img src={data[2].image} alt='/'/>
                        </div>
                        <div>
                            <h5>{data[2].name}</h5>
                            <p>${data[2].current_price.toLocaleString()}</p>
                        </div>

                        {data[2].price_change_percentage_24h < 0 ? (
                            <span className='red'>
                                <FiArrowDown className='icon'/>
                                {data[2].price_change_percentage_24h.toFixed(2)}%
                            </span>
                        ) : (
                            <span className='green'>
                                <FiArrowUp className='icon'/>
                                {data[2].price_change_percentage_24h.toFixed(2)}%
                            </span>
                        )}
                    </div>

                    {/* fourth coin | index three */}
                    <div className='card'>
                        <div className='top'>
                            {/* <img src={BTC} alt='/'/> */}
                            <img src={data[3].image} alt='/'/>
                        </div>
                        <div>
                            <h5>{data[3].name}</h5>
                            <p>${data[3].current_price.toLocaleString()}</p>
                        </div>

                        {data[3].price_change_percentage_24h < 0 ? (
                            <span className='red'>
                                <FiArrowDown className='icon'/>
                                {data[3].price_change_percentage_24h.toFixed(2)}%
                            </span>
                        ) : (
                            <span className='green'>
                                <FiArrowUp className='icon'/>
                                {data[3].price_change_percentage_24h.toFixed(2)}%
                            </span>
                        )}
                    </div>

                    {/* fifth coin | index four */}
                    <div className='card'>
                        <div className='top'>
                            {/* <img src={BTC} alt='/'/> */}
                            <img src={data[4].image} alt='/'/>
                        </div>
                        <div>
                            <h5>{data[4].name}</h5>
                            <p>${data[4].current_price.toLocaleString()}</p>
                        </div>

                        {data[4].price_change_percentage_24h < 0 ? (
                            <span className='red'>
                                <FiArrowDown className='icon'/>
                                {data[4].price_change_percentage_24h.toFixed(2)}%
                            </span>
                        ) : (
                            <span className='green'>
                                <FiArrowUp className='icon'/>
                                {data[4].price_change_percentage_24h.toFixed(2)}%
                            </span>
                        )}
                    </div>

                    {/* sixth coin | index five */}
                    <div className='card'>
                        <div className='top'>
                            {/* <img src={BTC} alt='/'/> */}
                            <img src={data[5].image} alt='/'/>
                        </div>
                        <div>
                            <h5>{data[5].name}</h5>
                            <p>${data[5].current_price.toLocaleString()}</p>
                        </div>

                        {data[5].price_change_percentage_24h < 0 ? (
                            <span className='red'>
                                <FiArrowDown className='icon'/>
                                {data[5].price_change_percentage_24h.toFixed(2)}%
                            </span>
                        ) : (
                            <span className='green'>
                                <FiArrowUp className='icon'/>
                                {data[5].price_change_percentage_24h.toFixed(2)}%
                            </span>
                        )}
                    </div>

                    <div className='card'>
                        <div className='top'>
                            {/* <img src={BTC} alt='/'/> */}
                            <img src={data[5].image} alt='/'/>
                        </div>
                        <div>
                            <h5>{data[5].name}</h5>
                            <p>${data[5].current_price.toLocaleString()}</p>
                        </div>

                        {data[5].price_change_percentage_24h < 0 ? (
                            <span className='red'>
                                <FiArrowDown className='icon'/>
                                {data[5].price_change_percentage_24h.toFixed(2)}%
                            </span>
                        ) : (
                            <span className='green'>
                                <FiArrowUp className='icon'/>
                                {data[5].price_change_percentage_24h.toFixed(2)}%
                            </span>
                        )}
                    </div>

                    <div className='card'>
                        <div className='top'>
                            {/* <img src={BTC} alt='/'/> */}
                            <img src={data[5].image} alt='/'/>
                        </div>
                        <div>
                            <h5>{data[5].name}</h5>
                            <p>${data[5].current_price.toLocaleString()}</p>
                        </div>

                        {data[5].price_change_percentage_24h < 0 ? (
                            <span className='red'>
                                <FiArrowDown className='icon'/>
                                {data[5].price_change_percentage_24h.toFixed(2)}%
                            </span>
                        ) : (
                            <span className='green'>
                                <FiArrowUp className='icon'/>
                                {data[5].price_change_percentage_24h.toFixed(2)}%
                            </span>
                        )}
                    </div>

                    <div className='card'>
                        <div className='top'>
                            {/* <img src={BTC} alt='/'/> */}
                            <img src={data[5].image} alt='/'/>
                        </div>
                        <div>
                            <h5>{data[5].name}</h5>
                            <p>${data[5].current_price.toLocaleString()}</p>
                        </div>

                        {data[5].price_change_percentage_24h < 0 ? (
                            <span className='red'>
                                <FiArrowDown className='icon'/>
                                {data[5].price_change_percentage_24h.toFixed(2)}%
                            </span>
                        ) : (
                            <span className='green'>
                                <FiArrowUp className='icon'/>
                                {data[5].price_change_percentage_24h.toFixed(2)}%
                            </span>
                        )}
                    </div>

                    <div className='card'>
                        <div className='top'>
                            {/* <img src={BTC} alt='/'/> */}
                            <img src={data[5].image} alt='/'/>
                        </div>
                        <div>
                            <h5>{data[5].name}</h5>
                            <p>${data[5].current_price.toLocaleString()}</p>
                        </div>

                        {data[5].price_change_percentage_24h < 0 ? (
                            <span className='red'>
                                <FiArrowDown className='icon'/>
                                {data[5].price_change_percentage_24h.toFixed(2)}%
                            </span>
                        ) : (
                            <span className='green'>
                                <FiArrowUp className='icon'/>
                                {data[5].price_change_percentage_24h.toFixed(2)}%
                            </span>
                        )}
                    </div>

                    <div className='card'>
                        <div className='top'>
                            {/* <img src={BTC} alt='/'/> */}
                            <img src={data[5].image} alt='/'/>
                        </div>
                        <div>
                            <h5>{data[5].name}</h5>
                            <p>${data[5].current_price.toLocaleString()}</p>
                        </div>

                        {data[5].price_change_percentage_24h < 0 ? (
                            <span className='red'>
                                <FiArrowDown className='icon'/>
                                {data[5].price_change_percentage_24h.toFixed(2)}%
                            </span>
                        ) : (
                            <span className='green'>
                                <FiArrowUp className='icon'/>
                                {data[5].price_change_percentage_24h.toFixed(2)}%
                            </span>
                        )}
                    </div>

                    <div className='card'>
                        <div className='top'>
                            {/* <img src={BTC} alt='/'/> */}
                            <img src={data[5].image} alt='/'/>
                        </div>
                        <div>
                            <h5>{data[5].name}</h5>
                            <p>${data[5].current_price.toLocaleString()}</p>
                        </div>

                        {data[5].price_change_percentage_24h < 0 ? (
                            <span className='red'>
                                <FiArrowDown className='icon'/>
                                {data[5].price_change_percentage_24h.toFixed(2)}%
                            </span>
                        ) : (
                            <span className='green'>
                                <FiArrowUp className='icon'/>
                                {data[5].price_change_percentage_24h.toFixed(2)}%
                            </span>
                        )}
                    </div>

                    <div className='card'>
                        <div className='top'>
                            {/* <img src={BTC} alt='/'/> */}
                            <img src={data[5].image} alt='/'/>
                        </div>
                        <div>
                            <h5>{data[5].name}</h5>
                            <p>${data[5].current_price.toLocaleString()}</p>
                        </div>

                        {data[5].price_change_percentage_24h < 0 ? (
                            <span className='red'>
                                <FiArrowDown className='icon'/>
                                {data[5].price_change_percentage_24h.toFixed(2)}%
                            </span>
                        ) : (
                            <span className='green'>
                                <FiArrowUp className='icon'/>
                                {data[5].price_change_percentage_24h.toFixed(2)}%
                            </span>
                        )}
                    </div>

                    <div className='card'>
                        <div className='top'>
                            {/* <img src={BTC} alt='/'/> */}
                            <img src={data[5].image} alt='/'/>
                        </div>
                        <div>
                            <h5>{data[5].name}</h5>
                            <p>${data[5].current_price.toLocaleString()}</p>
                        </div>

                        {data[5].price_change_percentage_24h < 0 ? (
                            <span className='red'>
                                <FiArrowDown className='icon'/>
                                {data[5].price_change_percentage_24h.toFixed(2)}%
                            </span>
                        ) : (
                            <span className='green'>
                                <FiArrowUp className='icon'/>
                                {data[5].price_change_percentage_24h.toFixed(2)}%
                            </span>
                        )}
                    </div>

                    <div className='card'>
                        <div className='top'>
                            {/* <img src={BTC} alt='/'/> */}
                            <img src={data[5].image} alt='/'/>
                        </div>
                        <div>
                            <h5>{data[5].name}</h5>
                            <p>${data[5].current_price.toLocaleString()}</p>
                        </div>

                        {data[5].price_change_percentage_24h < 0 ? (
                            <span className='red'>
                                <FiArrowDown className='icon'/>
                                {data[5].price_change_percentage_24h.toFixed(2)}%
                            </span>
                        ) : (
                            <span className='green'>
                                <FiArrowUp className='icon'/>
                                {data[5].price_change_percentage_24h.toFixed(2)}%
                            </span>
                        )}
                    </div>

                    <div className='card'>
                        <div className='top'>
                            {/* <img src={BTC} alt='/'/> */}
                            <img src={data[5].image} alt='/'/>
                        </div>
                        <div>
                            <h5>{data[5].name}</h5>
                            <p>${data[5].current_price.toLocaleString()}</p>
                        </div>

                        {data[5].price_change_percentage_24h < 0 ? (
                            <span className='red'>
                                <FiArrowDown className='icon'/>
                                {data[5].price_change_percentage_24h.toFixed(2)}%
                            </span>
                        ) : (
                            <span className='green'>
                                <FiArrowUp className='icon'/>
                                {data[5].price_change_percentage_24h.toFixed(2)}%
                            </span>
                        )}
                    </div>

                    <div className='card'>
                        <div className='top'>
                            {/* <img src={BTC} alt='/'/> */}
                            <img src={data[5].image} alt='/'/>
                        </div>
                        <div>
                            <h5>{data[5].name}</h5>
                            <p>${data[5].current_price.toLocaleString()}</p>
                        </div>

                        {data[5].price_change_percentage_24h < 0 ? (
                            <span className='red'>
                                <FiArrowDown className='icon'/>
                                {data[5].price_change_percentage_24h.toFixed(2)}%
                            </span>
                        ) : (
                            <span className='green'>
                                <FiArrowUp className='icon'/>
                                {data[5].price_change_percentage_24h.toFixed(2)}%
                            </span>
                        )}
                    </div>

                    <div className='card'>
                        <div className='top'>
                            {/* <img src={BTC} alt='/'/> */}
                            <img src={data[5].image} alt='/'/>
                        </div>
                        <div>
                            <h5>{data[5].name}</h5>
                            <p>${data[5].current_price.toLocaleString()}</p>
                        </div>

                        {data[5].price_change_percentage_24h < 0 ? (
                            <span className='red'>
                                <FiArrowDown className='icon'/>
                                {data[5].price_change_percentage_24h.toFixed(2)}%
                            </span>
                        ) : (
                            <span className='green'>
                                <FiArrowUp className='icon'/>
                                {data[5].price_change_percentage_24h.toFixed(2)}%
                            </span>
                        )}
                    </div>

                    <div className='card'>
                        <div className='top'>
                            {/* <img src={BTC} alt='/'/> */}
                            <img src={data[5].image} alt='/'/>
                        </div>
                        <div>
                            <h5>{data[5].name}</h5>
                            <p>${data[5].current_price.toLocaleString()}</p>
                        </div>

                        {data[5].price_change_percentage_24h < 0 ? (
                            <span className='red'>
                                <FiArrowDown className='icon'/>
                                {data[5].price_change_percentage_24h.toFixed(2)}%
                            </span>
                        ) : (
                            <span className='green'>
                                <FiArrowUp className='icon'/>
                                {data[5].price_change_percentage_24h.toFixed(2)}%
                            </span>
                        )}
                    </div>

                    <div className='card'>
                        <div className='top'>
                            {/* <img src={BTC} alt='/'/> */}
                            <img src={data[5].image} alt='/'/>
                        </div>
                        <div>
                            <h5>{data[5].name}</h5>
                            <p>${data[5].current_price.toLocaleString()}</p>
                        </div>

                        {data[5].price_change_percentage_24h < 0 ? (
                            <span className='red'>
                                <FiArrowDown className='icon'/>
                                {data[5].price_change_percentage_24h.toFixed(2)}%
                            </span>
                        ) : (
                            <span className='green'>
                                <FiArrowUp className='icon'/>
                                {data[5].price_change_percentage_24h.toFixed(2)}%
                            </span>
                        )}
                    </div>

                    <div className='card'>
                        <div className='top'>
                            {/* <img src={BTC} alt='/'/> */}
                            <img src={data[5].image} alt='/'/>
                        </div>
                        <div>
                            <h5>{data[5].name}</h5>
                            <p>${data[5].current_price.toLocaleString()}</p>
                        </div>

                        {data[5].price_change_percentage_24h < 0 ? (
                            <span className='red'>
                                <FiArrowDown className='icon'/>
                                {data[5].price_change_percentage_24h.toFixed(2)}%
                            </span>
                        ) : (
                            <span className='green'>
                                <FiArrowUp className='icon'/>
                                {data[5].price_change_percentage_24h.toFixed(2)}%
                            </span>
                        )}
                    </div>

                    <div className='card'>
                        <div className='top'>
                            {/* <img src={BTC} alt='/'/> */}
                            <img src={data[5].image} alt='/'/>
                        </div>
                        <div>
                            <h5>{data[5].name}</h5>
                            <p>${data[5].current_price.toLocaleString()}</p>
                        </div>

                        {data[5].price_change_percentage_24h < 0 ? (
                            <span className='red'>
                                <FiArrowDown className='icon'/>
                                {data[5].price_change_percentage_24h.toFixed(2)}%
                            </span>
                        ) : (
                            <span className='green'>
                                <FiArrowUp className='icon'/>
                                {data[5].price_change_percentage_24h.toFixed(2)}%
                            </span>
                        )}
                    </div>

                    <div className='card'>
                        <div className='top'>
                            {/* <img src={BTC} alt='/'/> */}
                            <img src={data[5].image} alt='/'/>
                        </div>
                        <div>
                            <h5>{data[5].name}</h5>
                            <p>${data[5].current_price.toLocaleString()}</p>
                        </div>

                        {data[5].price_change_percentage_24h < 0 ? (
                            <span className='red'>
                                <FiArrowDown className='icon'/>
                                {data[5].price_change_percentage_24h.toFixed(2)}%
                            </span>
                        ) : (
                            <span className='green'>
                                <FiArrowUp className='icon'/>
                                {data[5].price_change_percentage_24h.toFixed(2)}%
                            </span>
                        )}
                    </div>

                    <div className='card'>
                        <div className='top'>
                            {/* <img src={BTC} alt='/'/> */}
                            <img src={data[5].image} alt='/'/>
                        </div>
                        <div>
                            <h5>{data[5].name}</h5>
                            <p>${data[5].current_price.toLocaleString()}</p>
                        </div>

                        {data[5].price_change_percentage_24h < 0 ? (
                            <span className='red'>
                                <FiArrowDown className='icon'/>
                                {data[5].price_change_percentage_24h.toFixed(2)}%
                            </span>
                        ) : (
                            <span className='green'>
                                <FiArrowUp className='icon'/>
                                {data[5].price_change_percentage_24h.toFixed(2)}%
                            </span>
                        )}
                    </div>

                    <div className='card'>
                        <div className='top'>
                            {/* <img src={BTC} alt='/'/> */}
                            <img src={data[5].image} alt='/'/>
                        </div>
                        <div>
                            <h5>{data[5].name}</h5>
                            <p>${data[5].current_price.toLocaleString()}</p>
                        </div>

                        {data[5].price_change_percentage_24h < 0 ? (
                            <span className='red'>
                                <FiArrowDown className='icon'/>
                                {data[5].price_change_percentage_24h.toFixed(2)}%
                            </span>
                        ) : (
                            <span className='green'>
                                <FiArrowUp className='icon'/>
                                {data[5].price_change_percentage_24h.toFixed(2)}%
                            </span>
                        )}
                    </div>

                    {/* <span><FiArrowUpRight/>3.5%</span> */}
                </div>
                {/* {Right Side} */}
            </div>
        </div>
      
  </>)
}

export default AuthComponent