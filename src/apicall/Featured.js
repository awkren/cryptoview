import React, {useState, useEffect} from 'react'
import axios from 'axios'
// import BTC from '../assets/btc-img.png'
import './Featured.css'
import {FiArrowUpRight, FiArrowDown} from 'react-icons/fi'


const Featured = () => {

    const [data, setData] = useState(null)

    const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=99&page=1&sparkline=false'

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
               
        <div className='flex pr-[5px] p-[10px]'>
            {/* first coin */}
            <div id='card' className='text-center'>
                <div id='top'>
                    <img src={data[0].image} alt='/' id='img-coin' />
                </div>
                <div>
                    <p className='text-[1.3rem] font-semibold capitalize text-center mt-[1rem]'>{data[0].name}</p>
                    <p className='font-bold text-[1.5rem] mt-[3px] text-center'>${data[0].current_price.toLocaleString()}</p>
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
            <div id='card' className='text-center'>
                <div id='top'>
                    <img src={data[1].image} alt='/' id='img-coin' />
                </div>
                <div>
                    <p className='text-[1.3rem] font-semibold capitalize text-center mt-[1rem]'>{data[1].name}</p>
                    <p className='font-bold text-[1.5rem] mt-[3px] text-center'>${data[1].current_price.toLocaleString()}</p>
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
            <div id='card' className='text-center'>
                <div id='top'>
                    <img src={data[21].image} alt='/' id='img-coin'/>
                </div>
                <div>
                    <p className='text-[1.3rem] font-semibold capitalize mt-[1rem] text-center'>{data[2].name}</p>
                    <p className='font-bold text-[1.5rem] mt-[3px] text-center'>${data[2].current_price.toLocaleString()}</p>
                </div>
                {data[2].price_change_percentage_24h < 0 ? (
                    <span id='red'>
                        <FiArrowDown id='icon'/>
                        {data[2].price_change_percentage_24h.toFixed(2)}%
                    </span>
                ) : (
                    <span id='green'>
                        <FiArrowUpRight id='icon'/>
                        {data[2].price_change_percentage_24h.toFixed(2)}%
                    </span>
                )}
            </div>

            {/* fourth coin */}
            <div id='card' className='text-center'>
                <div id='top'>
                    <img src={data[89].image} alt='/' id='img-coin' class='resize'/>
                </div>
                <div>
                    <p className='text-[1.3rem] font-semibold capitalize text-center mt-[1rem]'>{data[89].name}</p>
                    <p className='font-bold text-[1.5rem] mt-[3px] text-center'>${data[89].current_price.toLocaleString()}</p>
                </div>
                {data[89].price_change_percentage_24h < 0 ? (
                    <span id='red'>
                        <FiArrowDown id='icon'/>
                        {data[89].price_change_percentage_24h.toFixed(2)}%
                    </span>
                ) : (
                    <span id='green'>
                        <FiArrowUpRight id='icon'/>
                        {data[89].price_change_percentage_24h.toFixed(2)}%
                    </span>
                )}
            </div>
            
            {/* fifth coin */}
            <div id='card' className='text-center'>
                <div id='top'>
                    <img src={data[76].image} alt='/' id='img-coin' />
                </div>
                <div>
                    <p className='text-[1.3rem] font-semibold capitalize text-center mt-[1rem]'>{data[76].name}</p>
                    <p className='font-bold text-[1.5rem] mt-[3px] text-center'>${data[76].current_price.toLocaleString()}</p>
                </div>
                {data[76].price_change_percentage_24h < 0 ? (
                    <span id='red'>
                        <FiArrowDown id='icon'/>
                        {data[76].price_change_percentage_24h.toFixed(2)}%
                    </span>
                ) : (
                    <span id='green'>
                        <FiArrowUpRight id='icon'/>
                        {data[76].price_change_percentage_24h.toFixed(2)}%
                    </span>
                )}
            </div>

        </div>
</>)
}

export default Featured