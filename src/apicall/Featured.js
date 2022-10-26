import React, {useState, useEffect} from 'react'
import axios from 'axios'
// import BTC from '../assets/btc-img.png'
import './Featured.css'
import {FiArrowUpRight, FiArrowDown} from 'react-icons/fi'


const Featured = () => {

    const [data, setData] = useState(null)

    const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=6&page=1&sparkline=false'

    useEffect(() =>{
        axios.get(url).then((response) =>{
            setData(response.data)
        }).catch((error) =>{
            console.log(error)
        })
    },[]);

    // pra ver se tá vindo data :p
    console.log(data);

    if(!data) return null;

    return (<>
               
        <div className='flex '>
            {/* first coin */}
            <div id='card'>
                <div id='top'>
                    {/* <img src={BTC} alt='/'/> */}
                    <img src={data[0].image} alt='/'/>
                </div>
                <div>
                    <h5>{data[0].name}</h5>
                    <p>${data[0].current_price.toLocaleString()}</p>
                </div>

                {data[0].price_change_percentage_24h < 0 ? (
                <span id='red'>
                    <FiArrowDown id='icon'/>
                    {data[0].price_change_percentage_24h.toFixed(2)}%
                </span>
                ) : (
                <span id='green'>
                    <FiArrowUpRight id='icon'/>
                    {data[0].price_change_percentage_24h.toFixed(2)}%
                </span>
                )}
            </div>

            {/* second coin */}
            <div id='card'>
                <div id='top'>
                    <img src={data[1].image} alt='/'/>
                </div>
                <div>
                    <h5>{data[1].name}</h5>
                    <p>${data[1].current_price.toLocaleString()}</p>
                </div>
                {data[1].price_change_percentage_24h < 0 ? (
                    <span id='red'>
                        <FiArrowDown id='icon'/>
                        {data[1].price_change_percentage_24h.toFixed(2)}%
                    </span>
                ) : (
                    <span id='green'>
                        <FiArrowUpRight id='icon'/>
                        {data[1].price_change_percentage_24h.toFixed(2)}%
                    </span>
                )}
            </div>

            {/* third coin */}
            <div id='card'>
                <div id='top'>
                    <img src={data[3].image} alt='/'/>
                </div>
                <div>
                    <h5>{data[3].name}</h5>
                    <p>${data[3].current_price.toLocaleString()}</p>
                </div>
                {data[3].price_change_percentage_24h < 0 ? (
                    <span id='red'>
                        <FiArrowDown id='icon'/>
                        {data[3].price_change_percentage_24h.toFixed(2)}%
                    </span>
                ) : (
                    <span id='green'>
                        <FiArrowUpRight id='icon'/>
                        {data[3].price_change_percentage_24h.toFixed(2)}%
                    </span>
                )}
            </div>
            

        </div>
</>)
}

export default Featured