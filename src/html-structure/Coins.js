import React, { useState, useEffect } from 'react'
import './Coins.css'
import axios from 'axios'
import { FiArrowUpRight, FiArrowDown } from 'react-icons/fi'

const Coins = () => {
  const [data, setData] = useState(null);
  const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&sparkline=false'

  useEffect(() =>{
    axios.get(url).then((response) =>{
      setData(response.data)
    }).catch((error) =>{
      console.log(error);
    })
  },[])

  console.log(data);

  if(!data) return null;

  return (
<div className='featured'>
            <div className='container'>
                {/* {Left Side} */}
                <div className='left'>
                    <h2 className='text-3xl'>Acompanhe moedas como Bitcoin, Ethereum, e Tether</h2>
                    <p className='text-3xl'>Garantimos <em className='not-italic font-semibold'>uptime de 99%</em>, 24 horas por dia, 7 dias por semana!</p>
                    <button className='btn'>See More Coins</button>

                </div>


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
                                <FiArrowUpRight className='icon'/>
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
                                <FiArrowUpRight className='icon'/>
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
                                <FiArrowUpRight className='icon'/>
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
                                <FiArrowUpRight className='icon'/>
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
                                <FiArrowUpRight className='icon'/>
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
                                <FiArrowUpRight className='icon'/>
                                {data[5].price_change_percentage_24h.toFixed(2)}%
                            </span>
                        )}
                    </div>
                    {/* <span><FiArrowUpRight/>3.5%</span> */}
                </div>
                <button className='btn-after'>See More Coins</button>

                {/* {Right Side} */}
            </div>
        </div>
 )
}

export default Coins