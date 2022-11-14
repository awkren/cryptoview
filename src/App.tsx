import React from 'react';
import './App.css';
import Home from './Home';
import {Routes, BrowserRouter} from 'react-router-dom'
import About from './cryptoview-redir/About';
import RoutesRedir from './RoutesRedir';

function App() {
  return (
    <div className="App">
      <RoutesRedir/>
    </div>
  );
}

export default App;