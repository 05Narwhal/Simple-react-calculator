import React from "react";

import './Buttons.css';

function Buttons ({ buttonNames, screen, setScreen, setResult, setScreenStyle, setResultStyle, charLimit }) {
  return (
    <>
      {buttonNames.map((buttonName, index) => {
        return (
          <button key={index} onClick={() => {
            if (buttonName === '=') {
              try {
                const evalResult = eval(screen
                  .replace('x', '*')
                  .replace('÷', '/')).toString();
                setResult(evalResult);
                setResultStyle({ fontSize: '2rem', color: 'white' });
                setScreenStyle({ fontSize: '1.35rem', color: 'gray' });
              } catch {
                setScreen('Error');
                setResult('');
              }
            } else if (buttonName === 'C') {
              setScreen('0');
              setResult('');
              setScreenStyle({ fontSize: '2rem', color: 'white' });
              setResultStyle({ fontSize: '1.35rem', color: 'gray' });
            } else if (buttonName === 'DEL' || buttonName === 'CE') {
              setScreen(screen.slice(0, -1));
            } else {
              if (buttonName !== '=') {
                setScreenStyle({ fontSize: '2rem', color: 'white' });
                setResultStyle({ fontSize: '1.35rem', color: 'gray' });
              }
              if (screen.length < charLimit) {
                if (screen === '0') {
                  if (buttonName === '.') {
                    setScreen(screen + buttonName);
                  } else {
                    setScreen(buttonName);
                  }
                } else if (screen === 'Error' && buttonName !== 'C' && buttonName !== 'DEL') {
                  setScreen(buttonName);
                } else {
                  setScreen(screen + buttonName);
                }
              }
            }
          }}>
            {buttonName}
          </button>
        );
      })}
    </>
  );
};

export default Buttons;