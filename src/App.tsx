import React from 'react';
import './App.css';
import Home from './Home';
import { BrowserRouter} from 'react-router-dom'
import About from './cryptoview-redir/About';
import RoutesRedir from './RoutesRedir.js';

function App() {
  alert('server is running on local now :p');
  return (
    <div className="App">
      <RoutesRedir/>
    </div>
  );
}

export default App;