import React from 'react';
import './App.css';
import FirstSec from './cryptoview-structure/FirstSec';
import Header from './cryptoview-structure/Header';
import SecondSec from './cryptoview-structure/SecondSec';

function App() {
  return (
    <div className="App">
      <Header/>
      <FirstSec/>
      <SecondSec/>
    </div>
  );
}

export default App;
