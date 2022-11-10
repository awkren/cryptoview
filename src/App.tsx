import React from 'react';
import './App.css';
import FirstSec from './cryptoview-structure/FirstSec';
import Header from './cryptoview-structure/Header';
import HowItWorks from './cryptoview-structure/HowItWorks';
import Pricing from './cryptoview-structure/Pricing';
import SecondSec from './cryptoview-structure/SecondSec';
import ThirdSec from './cryptoview-structure/ThirdSec';

function App() {
  return (
    <div className="App">
      <Header/>
      <FirstSec/>
      <SecondSec/>
      <HowItWorks/>
      <ThirdSec/>
      <Pricing/>
    </div>
  );
}

export default App;