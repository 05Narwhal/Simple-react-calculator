import React, { useState } from 'react';

import Buttons from './components/Buttons/Buttons';
import Footer from './components/Footer/Footer';
import './App.css';

function App() {
  const [screen, setScreen] = useState('0');
  const [result, setResult] = useState('');
  const [screenStyle, setScreenStyle] = useState({ fontSize: '1rem', color: 'gray' });
  const [resultStyle, setResultStyle] = useState({ fontSize: '1rem', color: 'gray' });

  const buttonNames = [
    '1', '2', '3',  '+', 
    '4', '5', '6',  '-', 
    '7', '8', '9',  'x', 
    'C', '0', 'DEL','÷', 
    '.', '='
  ];

  return (
    <div className="App">
      <h1>Calculator App</h1>
      
      <div className='main-calc'>
        <div className='screen'>
          <p style={screenStyle}>{screen}</p>
          <p style={resultStyle}>{result}</p>
        </div>
        <div className='buttons'>
          <Buttons 
            buttonNames={buttonNames} 
            screen={screen} 
            setScreen={setScreen} 
            setResult={setResult} 
            setScreenStyle={setScreenStyle} 
            setResultStyle={setResultStyle} 
            charLimit={20}
          />
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default App;