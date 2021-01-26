import './App.css';
import React, { useState, useEffect } from 'react';
import Heart from './components/Heart'
import Header from './components/Header'

function App() {

  const [toggle, setToggle] = useState(false)

  const handleClick = () => {
    setToggle(!toggle)
  }

  return (
    <div className='App'>
      <Header
      toggle={toggle} />
      <Heart
      handleClick={handleClick}
      toggle={toggle} />
    </div>
);
}

export default App;
