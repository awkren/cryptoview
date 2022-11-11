import React from 'react'
import './Pricing.css'

const Pricing = () => {
  return (
    <div id='price-container' className='w-[80%] pb-[4rem] m-auto'>
      <p className='text-center text-[2.2rem] capitalize font-semibold mt-[4rem] mb-[3rem]'>Pricing</p>
      
      <div id="container">

<div id="travel-card">
<div id="title-price">
  <p id="">Personal</p>
</div>
<div id='card-body-one'>
  <p>Investment tips</p>
  <p>Access to courses</p>
</div>
<div id='card-price'>
  <p id='price'>Free</p>
</div>
</div>

<div id="travel-card">
<div id="title-price">
  <p id="">Premium</p>
</div>
<div id='card-body-two'>
  <p>Investment tips</p>
  <p>Access to courses</p>
  <p>Priority infos</p>
</div>
<div id='card-price'>
  <p id='price'>R$ 29,90</p>
</div>
</div>

<div id="travel-card">
<div id="title-price">
  <p id="">Enterprise</p>
</div>
<div id='card-body-three'>
  <p>Investment tips</p>
  <p>Access to courses</p>
  <p>Priority infos</p>
  <p>24/7 consultors</p>
  <p>Custom support</p>
</div>
<div id='card-price'>
  <p id='price'>Book a call</p>
</div>
</div>

</div>

    </div>
  )
}

export default Pricing