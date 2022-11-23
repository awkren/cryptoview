import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { FiArrowUp, FiArrowDown } from 'react-icons/fi'
import '../cryptoview-styles/FreeComponent.css'

const FreeComponent = () => {

  const [message, setMessage] = useState('');
  const [data, setData] = useState(null)

  const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=90&page=1&sparkline=false'

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

  useEffect(() => {
    axios
      .get(url).then((response) => {
        setData(response.data)
      })
      .catch((error) => {
        console.log(error)
      })
  }, []);

  if(!data) return null;

  return (<>
    <div>
      <p className='text-center mt-[.5rem] text-[1.2rem]'>You are logged in as <em className='not-italic font-[500] text-[red]'>Guest</em></p>
      <p className='text-center underline text-[1.2rem] text-[blue] font-semibold'><a href='/register'>Create an account to access the full version!</a></p>
      <h1 className='text-center text-[1.4rem] font-bold'>CryptoView demo</h1>
    </div>

    <div className='featured mt-[4rem] mb-[2.5rem]'>
      <div className='container'>
        <div className='right'>

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

          <div className='card'>
            <div className='top'>
              {/* <img src={BTC} alt='/'/> */}
              <img src={data[5].image} alt='/'/>
            </div>
            <div>
              <h5 className='coin-name'>{data[5].name}</h5>
              <p className='coin-price'>${data[5].current_price.toLocaleString()}</p>
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

        </div>
      </div>
    </div>

    <div id='demo-info' className='text-center mb-[2.5rem] mt[3rem] font-semibold text-[1.4rem]'>
      <div id='about-demo-div'>
        <p className=''>CryptoView is a coin tracker, we provide you info about the top coins in the market.</p>
        <p>Our data comes from trusted partners, and are curated by specialists...</p>
        <p>So you can get all the info about your favorite coins, 24/7!</p>
      </div>
      <p className='mt-[1rem]' id='before-demo-create-acc'><a href='/register' id='demo-create-acc' className=' border-blue-500 bg-[blue] text-[white] pb-[.4rem] pt-[.4rem] pr-[.8rem] pl-[.8rem] rounded-[50px]'>Create Account</a></p>
    </div>

    <div className='featured mt-[5rem]'>
      <div className='container'>
        <div className='right'>

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

        </div>
      </div>
    </div>

  </>)
}

export default FreeComponent