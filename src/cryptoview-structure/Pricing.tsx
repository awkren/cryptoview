import React from 'react'
import './Pricing.css'

const Pricing = () => {
  return (
    <div id='price-container' className='w-[80%] m-auto'>
      <p className='text-center text-[2.2rem] capitalize font-semibold mt-[4rem] mb-[3rem]'>Pricing</p>
      <div id='price-cards' className='flex flex-row justify-evenly'>
        <div id='card-1' className=''>
          <div id="card">
            {/* <img src="img_avatar.png" alt="Avatar" style="width:100%"> */}
            <p className='text-center text-[1.5rem] font-semibold pt-[.5rem]'>Personal</p>
            <div id="container-card">
              <ul>
                <li>Investment tips</li>
                <li>Access to courses</li>
              </ul>
            </div>
          </div>
        </div>
        <div id='card-2'>
          <div id="card">
            {/* <img src="img_avatar.png" alt="Avatar" style="width:100%"> */}
            <p className='text-center text-[1.5rem] font-semibold pt-[.5rem]'>Premium</p>
            <div id="container-card">
              <ul>
                <li>Investment tips</li>
                <li>Access to courses</li>
                <li>Priority infos</li>
              </ul>
            </div>
          </div>
        </div>
        <div id='card-3'>
          <div id="card">
            {/* <img src="img_avatar.png" alt="Avatar" style="width:100%"> */}
            <p className='text-center text-[1.5rem] font-semibold pt-[.5rem]'>Enterprise</p>
            <div id="container-card">
              <ul>
                <li>Investment tips</li>
                <li>Access to courses</li>
                <li>Priority infos</li>
                <li>24/7 consultors</li>
                <li>Custom support</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Pricing