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
      {/* coin search */}
      <label></label>
      <input className='border-2 w-[30rem] mt-[1rem] mb-[1rem] pl-[.5rem] text-[1.2rem] h-[3rem] rounded-[6px] border-gray-500 block m-auto' type='text' placeholder='Enter a coin name. e.g. Bitcoin'/>
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
                            <h5 className='coin-name'>{data[0].name}</h5>
                            <p className='coin-price'>${data[0].current_price.toLocaleString()}</p>
                        </div>

                        {data[0].price_change_percentage_24h < 0 ? (
                            <span className='red'>
                                <p className='percentage'><FiArrowDown className='icon'/>{data[0].price_change_percentage_24h.toFixed(2)}%</p>
                            </span>
                        ) : (
                            <span className='green'>
                                <p className='percentage'><FiArrowUp className='icon'/>{data[0].price_change_percentage_24h.toFixed(2)}%</p>
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
                            <h5 className='coin-name'>{data[1].name}</h5>
                            <p className='coin-price'>${data[1].current_price.toLocaleString()}</p>
                        </div>

                        {data[1].price_change_percentage_24h < 0 ? (
                            <span className='red'>
                                <p className='percentage'><FiArrowDown className='icon'/>{data[1].price_change_percentage_24h.toFixed(2)}%</p>
                            </span>
                        ) : (
                            <span className='green'>
                                <p className='percentage'><FiArrowUp className='icon'/>{data[1].price_change_percentage_24h.toFixed(2)}%</p>
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
                            <h5 className='coin-name'>{data[2].name}</h5>
                            <p className='coin-price'>${data[2].current_price.toLocaleString()}</p>
                        </div>

                        {data[2].price_change_percentage_24h < 0 ? (
                            <span className='red'>
                                <p className='percentage'><FiArrowDown className='icon'/>{data[2].price_change_percentage_24h.toFixed(2)}%</p>
                            </span>
                        ) : (
                            <span className='green'>
                                <p className='percentage'><FiArrowUp className='icon'/>{data[2].price_change_percentage_24h.toFixed(2)}%</p>
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
                            <h5 className='coin-name'>{data[3].name}</h5>
                            <p className='coin-price'>${data[3].current_price.toLocaleString()}</p>
                        </div>

                        {data[3].price_change_percentage_24h < 0 ? (
                            <span className='red'>
                                <p className='percentage'><FiArrowDown className='icon'/>{data[3].price_change_percentage_24h.toFixed(2)}%</p>
                            </span>
                        ) : (
                            <span className='green'>
                                <p className='percentage'><FiArrowUp className='icon'/>{data[3].price_change_percentage_24h.toFixed(2)}%</p>
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
                            <h5 className='coin-name'>{data[4].name}</h5>
                            <p className='coin-price'>${data[4].current_price.toLocaleString()}</p>
                        </div>

                        {data[4].price_change_percentage_24h < 0 ? (
                            <span className='red'>
                                <p className='percentage'><FiArrowDown className='icon'/>{data[4].price_change_percentage_24h.toFixed(2)}%</p>
                            </span>
                        ) : (
                            <span className='green'>
                                <p className='percentage'><FiArrowUp className='icon'/>{data[4].price_change_percentage_24h.toFixed(2)}%</p>
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
                            <h5 className='coin-name'>{data[5].name}</h5>
                            <p className='coin-price' >${data[5].current_price.toLocaleString()}</p>
                        </div>

                        {data[5].price_change_percentage_24h < 0 ? (
                            <span className='red'>
                                <p className='percentage'><FiArrowDown className='icon'/>{data[5].price_change_percentage_24h.toFixed(2)}%</p>
                            </span>
                        ) : (
                            <span className='green'>
                                <p className='percentage'><FiArrowUp className='icon'/>{data[5].price_change_percentage_24h.toFixed(2)}%</p>
                            </span>
                        )}
                    </div>

                    <div className='card'>
                        <div className='top'>
                            {/* <img src={BTC} alt='/'/> */}
                            <img src={data[6].image} alt='/'/>
                        </div>
                        <div>
                            <h5 className='coin-name'>{data[6].name}</h5>
                            <p className='coin-price'>${data[6].current_price.toLocaleString()}</p>
                        </div>

                        {data[6].price_change_percentage_24h < 0 ? (
                            <span className='red'>
                                <p className='percentage'><FiArrowDown className='icon'/>{data[6].price_change_percentage_24h.toFixed(2)}%</p>
                            </span>
                        ) : (
                            <span className='green'>
                                <p className='percentage'><FiArrowUp className='icon'/>{data[6].price_change_percentage_24h.toFixed(2)}%</p>
                            </span>
                        )}
                    </div>

                    <div className='card'>
                        <div className='top'>
                            {/* <img src={BTC} alt='/'/> */}
                            <img src={data[7].image} alt='/'/>
                        </div>
                        <div>
                            <h5 className='coin-name'>{data[7].name}</h5>
                            <p className='coin-price'>${data[7].current_price.toLocaleString()}</p>
                        </div>

                        {data[7].price_change_percentage_24h < 0 ? (
                            <span className='red'>
                                <p className='percentage'><FiArrowDown className='icon'/>{data[7].price_change_percentage_24h.toFixed(2)}%</p>
                            </span>
                        ) : (
                            <span className='green'>
                                <p className='percentage'><FiArrowUp className='icon'/>{data[7].price_change_percentage_24h.toFixed(2)}%</p>
                            </span>
                        )}
                    </div>

                    <div className='card'>
                        <div className='top'>
                            {/* <img src={BTC} alt='/'/> */}
                            <img src={data[8].image} alt='/'/>
                        </div>
                        <div>
                            <h5 className='coin-name'>{data[8].name}</h5>
                            <p className='coin-price'>${data[8].current_price.toLocaleString()}</p>
                        </div>

                        {data[8].price_change_percentage_24h < 0 ? (
                            <span className='red'>
                                <p className='percentage'><FiArrowDown className='icon'/>{data[8].price_change_percentage_24h.toFixed(2)}%</p>
                            </span>
                        ) : (
                            <span className='green'>
                                <p className='percentage'><FiArrowUp className='icon'/>{data[8].price_change_percentage_24h.toFixed(2)}%</p>
                            </span>
                        )}
                    </div>

                    <div className='card'>
                        <div className='top'>
                            {/* <img src={BTC} alt='/'/> */}
                            <img src={data[9].image} alt='/'/>
                        </div>
                        <div>
                            <h5 className='coin-name'>{data[9].name}</h5>
                            <p className='coin-price'>${data[9].current_price.toLocaleString()}</p>
                        </div>

                        {data[9].price_change_percentage_24h < 0 ? (
                            <span className='red'>
                                <p className='percentage'><FiArrowDown className='icon'/>{data[9].price_change_percentage_24h.toFixed(2)}%</p>
                            </span>
                        ) : (
                            <span className='green'>
                                <p className='percentage'><FiArrowUp className='icon'/>{data[9].price_change_percentage_24h.toFixed(2)}%</p>
                            </span>
                        )}
                    </div>

                    <div className='card'>
                        <div className='top'>
                            {/* <img src={BTC} alt='/'/> */}
                            <img src={data[10].image} alt='/'/>
                        </div>
                        <div>
                            <h5 className='coin-name'>{data[10].name}</h5>
                            <p className='coin-price'>${data[10].current_price.toLocaleString()}</p>
                        </div>

                        {data[10].price_change_percentage_24h < 0 ? (
                            <span className='red'>
                                <p className='percentage'><FiArrowDown className='icon'/>{data[10].price_change_percentage_24h.toFixed(2)}%</p>
                            </span>
                        ) : (
                            <span className='green'>
                                <p className='percentage'><FiArrowUp className='icon'/>{data[10].price_change_percentage_24h.toFixed(2)}%</p>
                            </span>
                        )}
                    </div>

                    <div className='card'>
                        <div className='top'>
                            {/* <img src={BTC} alt='/'/> */}
                            <img src={data[11].image} alt='/'/>
                        </div>
                        <div>
                            <h5 className='coin-name'>{data[11].name}</h5>
                            <p className='coin-price'>${data[11].current_price.toLocaleString()}</p>
                        </div>

                        {data[11].price_change_percentage_24h < 0 ? (
                            <span className='red'>
                                <p className='percentage'><FiArrowDown className='icon'/>{data[11].price_change_percentage_24h.toFixed(2)}%</p>
                            </span>
                        ) : (
                            <span className='green'>
                                <p className='percentage'><FiArrowUp className='icon'/>{data[11].price_change_percentage_24h.toFixed(2)}%</p>
                            </span>
                        )}
                    </div>

                    <div className='card'>
                        <div className='top'>
                            {/* <img src={BTC} alt='/'/> */}
                            <img src={data[12].image} alt='/'/>
                        </div>
                        <div>
                            <h5 className='coin-name'>{data[12].name}</h5>
                            <p className='coin-price'>${data[12].current_price.toLocaleString()}</p>
                        </div>

                        {data[12].price_change_percentage_24h < 0 ? (
                            <span className='red'>
                                <p className='percentage'><FiArrowDown className='icon'/>{data[12].price_change_percentage_24h.toFixed(2)}%</p>
                            </span>
                        ) : (
                            <span className='green'>
                                <p className='percentage'><FiArrowUp className='icon'/>{data[12].price_change_percentage_24h.toFixed(2)}%</p>
                            </span>
                        )}
                    </div>

                    <div className='card'>
                        <div className='top'>
                            {/* <img src={BTC} alt='/'/> */}
                            <img src={data[13].image} alt='/'/>
                        </div>
                        <div>
                            <h5 className='coin-name'>{data[13].name}</h5>
                            <p className='coin-price'>${data[13].current_price.toLocaleString()}</p>
                        </div>

                        {data[13].price_change_percentage_24h < 0 ? (
                            <span className='red'>
                                <p className='percentage'><FiArrowDown className='icon'/>{data[13].price_change_percentage_24h.toFixed(2)}%</p>
                            </span>
                        ) : (
                            <span className='green'>
                                <p className='percentage'><FiArrowUp className='icon'/>{data[13].price_change_percentage_24h.toFixed(2)}%</p>
                            </span>
                        )}
                    </div>

                    <div className='card'>
                        <div className='top'>
                            {/* <img src={BTC} alt='/'/> */}
                            <img src={data[14].image} alt='/'/>
                        </div>
                        <div>
                            <h5 className='coin-name'>{data[14].name}</h5>
                            <p className='coin-price'>${data[14].current_price.toLocaleString()}</p>
                        </div>

                        {data[14].price_change_percentage_24h < 0 ? (
                            <span className='red'>
                                <p className='percentage'><FiArrowDown className='icon'/>{data[14].price_change_percentage_24h.toFixed(2)}%</p>
                            </span>
                        ) : (
                            <span className='green'>
                                <p className='percentage'><FiArrowUp className='icon'/>{data[14].price_change_percentage_24h.toFixed(2)}%</p>
                            </span>
                        )}
                    </div>

                    <div className='card'>
                        <div className='top'>
                            {/* <img src={BTC} alt='/'/> */}
                            <img src={data[15].image} alt='/'/>
                        </div>
                        <div>
                            <h5 className='coin-name'>{data[15].name}</h5>
                            <p className='coin-price'>${data[15].current_price.toLocaleString()}</p>
                        </div>

                        {data[15].price_change_percentage_24h < 0 ? (
                            <span className='red'>
                                <p className='percentage'><FiArrowDown className='icon'/>{data[15].price_change_percentage_24h.toFixed(2)}%</p>
                            </span>
                        ) : (
                            <span className='green'>
                                <p className='percentage'><FiArrowUp className='icon'/>{data[15].price_change_percentage_24h.toFixed(2)}%</p>
                            </span>
                        )}
                    </div>

                    <div className='card'>
                        <div className='top'>
                            {/* <img src={BTC} alt='/'/> */}
                            <img src={data[16].image} alt='/'/>
                        </div>
                        <div>
                            <h5 className='coin-name'>{data[16].name}</h5>
                            <p className='coin-price'>${data[16].current_price.toLocaleString()}</p>
                        </div>

                        {data[16].price_change_percentage_24h < 0 ? (
                            <span className='red'>
                                <p className='percentage'><FiArrowDown className='icon'/>{data[16].price_change_percentage_24h.toFixed(2)}%</p>
                            </span>
                        ) : (
                            <span className='green'>
                                <p className='percentage'><FiArrowUp className='icon'/>{data[16].price_change_percentage_24h.toFixed(2)}%</p>
                            </span>
                        )}
                    </div>

                    <div className='card'>
                        <div className='top'>
                            {/* <img src={BTC} alt='/'/> */}
                            <img src={data[17].image} alt='/'/>
                        </div>
                        <div>
                            <h5 className='coin-name'>{data[17].name}</h5>
                            <p className='coin-price'>${data[17].current_price.toLocaleString()}</p>
                        </div>

                        {data[17].price_change_percentage_24h < 0 ? (
                            <span className='red'>
                                <p className='percentage'><FiArrowDown className='icon'/>{data[17].price_change_percentage_24h.toFixed(2)}%</p>
                            </span>
                        ) : (
                            <span className='green'>
                                <p className='percentage'><FiArrowUp className='icon'/>{data[17].price_change_percentage_24h.toFixed(2)}%</p>
                            </span>
                        )}
                    </div>

                    <div className='card'>
                        <div className='top'>
                            {/* <img src={BTC} alt='/'/> */}
                            <img src={data[18].image} alt='/'/>
                        </div>
                        <div>
                            <h5 className='coin-name'>{data[18].name}</h5>
                            <p className='coin-price'>${data[18].current_price.toLocaleString()}</p>
                        </div>

                        {data[18].price_change_percentage_24h < 0 ? (
                            <span className='red'>
                                <p className='percentage'><FiArrowDown className='icon'/>{data[18].price_change_percentage_24h.toFixed(2)}%</p>
                            </span>
                        ) : (
                            <span className='green'>
                                <p className='percentage'><FiArrowUp className='icon'/>{data[18].price_change_percentage_24h.toFixed(2)}%</p>
                            </span>
                        )}
                    </div>

                    <div className='card'>
                        <div className='top'>
                            {/* <img src={BTC} alt='/'/> */}
                            <img src={data[19].image} alt='/'/>
                        </div>
                        <div>
                            <h5 className='coin-name'>{data[19].name}</h5>
                            <p className='coin-price'>${data[19].current_price.toLocaleString()}</p>
                        </div>

                        {data[19].price_change_percentage_24h < 0 ? (
                            <span className='red'>
                                <p className='percentage'><FiArrowDown className='icon'/>{data[19].price_change_percentage_24h.toFixed(2)}%</p>
                            </span>
                        ) : (
                            <span className='green'>
                                <p className='percentage'><FiArrowUp className='icon'/>{data[19].price_change_percentage_24h.toFixed(2)}%</p>
                            </span>
                        )}
                    </div>

                    <div className='card'>
                        <div className='top'>
                            {/* <img src={BTC} alt='/'/> */}
                            <img src={data[20].image} alt='/'/>
                        </div>
                        <div>
                            <h5 className='coin-name'>{data[20].name}</h5>
                            <p className='coin-price'>${data[20].current_price.toLocaleString()}</p>
                        </div>

                        {data[20].price_change_percentage_24h < 0 ? (
                            <span className='red'>
                                <p className='percentage'><FiArrowDown className='icon'/>{data[20].price_change_percentage_24h.toFixed(2)}%</p>
                            </span>
                        ) : (
                            <span className='green'>
                                <p className='percentage'><FiArrowUp className='icon'/>{data[20].price_change_percentage_24h.toFixed(2)}%</p>
                            </span>
                        )}
                    </div>

                    <div className='card'>
                        <div className='top'>
                            {/* <img src={BTC} alt='/'/> */}
                            <img src={data[21].image} alt='/'/>
                        </div>
                        <div>
                            <h5 className='coin-name'>{data[21].name}</h5>
                            <p className='coin-price'>${data[21].current_price.toLocaleString()}</p>
                        </div>

                        {data[21].price_change_percentage_24h < 0 ? (
                            <span className='red'>
                                <p className='percentage'><FiArrowDown className='icon'/>{data[21].price_change_percentage_24h.toFixed(2)}%</p>
                            </span>
                        ) : (
                            <span className='green'>
                                <p className='percentage'><FiArrowUp className='icon'/>{data[21].price_change_percentage_24h.toFixed(2)}%</p>
                            </span>
                        )}
                    </div>

                    <div className='card'>
                        <div className='top'>
                            {/* <img src={BTC} alt='/'/> */}
                            <img src={data[22].image} alt='/'/>
                        </div>
                        <div>
                            <h5 className='coin-name'>{data[22].name}</h5>
                            <p className='coin-price'>${data[22].current_price.toLocaleString()}</p>
                        </div>

                        {data[22].price_change_percentage_24h < 0 ? (
                            <span className='red'>
                                <p className='percentage'><FiArrowDown className='icon'/>{data[22].price_change_percentage_24h.toFixed(2)}%</p>
                            </span>
                        ) : (
                            <span className='green'>
                                <p className='percentage'><FiArrowUp className='icon'/>{data[22].price_change_percentage_24h.toFixed(2)}%</p>
                            </span>
                        )}
                    </div>

                    <div className='card'>
                        <div className='top'>
                            {/* <img src={BTC} alt='/'/> */}
                            <img src={data[23].image} alt='/'/>
                        </div>
                        <div>
                            <h5 className='coin-name'>{data[23].name}</h5>
                            <p className='coin-price'>${data[23].current_price.toLocaleString()}</p>
                        </div>

                        {data[23].price_change_percentage_24h < 0 ? (
                            <span className='red'>
                                <p className='percentage'><FiArrowDown className='icon'/>{data[23].price_change_percentage_24h.toFixed(2)}%</p>
                            </span>
                        ) : (
                            <span className='green'>
                                <p className='percentage'><FiArrowUp className='icon'/>{data[23].price_change_percentage_24h.toFixed(2)}%</p>
                            </span>
                        )}
                    </div>

                    <div className='card'>
                        <div className='top'>
                            {/* <img src={BTC} alt='/'/> */}
                            <img src={data[24].image} alt='/'/>
                        </div>
                        <div>
                            <h5 className='coin-name'>{data[24].name}</h5>
                            <p className='coin-price'>${data[24].current_price.toLocaleString()}</p>
                        </div>

                        {data[24].price_change_percentage_24h < 0 ? (
                            <span className='red'>
                                <p className='percentage'><FiArrowDown className='icon'/>{data[24].price_change_percentage_24h.toFixed(2)}%</p>
                            </span>
                        ) : (
                            <span className='green'>
                                <p className='percentage'><FiArrowUp className='icon'/>{data[24].price_change_percentage_24h.toFixed(2)}%</p>
                            </span>
                        )}
                    </div>

                    <div className='card'>
                        <div className='top'>
                            {/* <img src={BTC} alt='/'/> */}
                            <img src={data[25].image} alt='/'/>
                        </div>
                        <div>
                            <h5 className='coin-name'>{data[25].name}</h5>
                            <p className='coin-price'>${data[25].current_price.toLocaleString()}</p>
                        </div>

                        {data[25].price_change_percentage_24h < 0 ? (
                            <span className='red'>
                                <p className='percentage'><FiArrowDown className='icon'/>{data[25].price_change_percentage_24h.toFixed(2)}%</p>
                            </span>
                        ) : (
                            <span className='green'>
                                <p className='percentage'><FiArrowUp className='icon'/>{data[25].price_change_percentage_24h.toFixed(2)}%</p>
                            </span>
                        )}
                    </div>

                    <div className='card'>
                        <div className='top'>
                            {/* <img src={BTC} alt='/'/> */}
                            <img src={data[26].image} alt='/'/>
                        </div>
                        <div>
                            <h5 className='coin-name'>{data[26].name}</h5>
                            <p className='coin-price'>${data[26].current_price.toLocaleString()}</p>
                        </div>

                        {data[26].price_change_percentage_24h < 0 ? (
                            <span className='red'>
                                <p className='percentage'><FiArrowDown className='icon'/>{data[26].price_change_percentage_24h.toFixed(2)}%</p>
                            </span>
                        ) : (
                            <span className='green'>
                                <p className='percentage'><FiArrowUp className='icon'/>{data[26].price_change_percentage_24h.toFixed(2)}%</p>
                            </span>
                        )}
                    </div>

                    <div className='card'>
                        <div className='top'>
                            {/* <img src={BTC} alt='/'/> */}
                            <img src={data[27].image} alt='/'/>
                        </div>
                        <div>
                            <h5 className='coin-name'>{data[27].name}</h5>
                            <p className='coin-price'>${data[27].current_price.toLocaleString()}</p>
                        </div>

                        {data[27].price_change_percentage_24h < 0 ? (
                            <span className='red'>
                                <p className='percentage'><FiArrowDown className='icon'/>{data[27].price_change_percentage_24h.toFixed(2)}%</p>
                            </span>
                        ) : (
                            <span className='green'>
                                <p className='percentage'><FiArrowUp className='icon'/>{data[27].price_change_percentage_24h.toFixed(2)}%</p>
                            </span>
                        )}
                    </div>

                    <div className='card'>
                        <div className='top'>
                            {/* <img src={BTC} alt='/'/> */}
                            <img src={data[28].image} alt='/'/>
                        </div>
                        <div>
                            <h5 className='coin-name'>{data[28].name}</h5>
                            <p className='coin-price'>${data[28].current_price.toLocaleString()}</p>
                        </div>

                        {data[28].price_change_percentage_24h < 0 ? (
                            <span className='red'>
                                <p className='percentage'><FiArrowDown className='icon'/>{data[28].price_change_percentage_24h.toFixed(2)}%</p>
                            </span>
                        ) : (
                            <span className='green'>
                                <p className='percentage'><FiArrowUp className='icon'/>{data[28].price_change_percentage_24h.toFixed(2)}%</p>
                            </span>
                        )}
                    </div>

                    <div className='card'>
                        <div className='top'>
                            {/* <img src={BTC} alt='/'/> */}
                            <img src={data[29].image} alt='/'/>
                        </div>
                        <div>
                            <h5 className='coin-name'>{data[29].name}</h5>
                            <p className='coin-price'>${data[29].current_price.toLocaleString()}</p>
                        </div>

                        {data[29].price_change_percentage_24h < 0 ? (
                            <span className='red'>
                                <p className='percentage'><FiArrowDown className='icon'/>{data[29].price_change_percentage_24h.toFixed(2)}%</p>
                            </span>
                        ) : (
                            <span className='green'>
                                <p className='percentage'><FiArrowUp className='icon'/>{data[29].price_change_percentage_24h.toFixed(2)}%</p>
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