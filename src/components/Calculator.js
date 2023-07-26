import React, { useState } from 'react';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [displayValue, setDisplayValue] = useState('0');
  const [calculatorData, setCalculatorData] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const handleButtonClick = (buttonName) => {
    const newData = calculate(calculatorData, buttonName);
    setCalculatorData(newData);

    // Update displayValue based on newData
    const { total, next } = newData;
    const display = next || total || '0';
    setDisplayValue(display);
  };

  return (
    <div className="top-container">
      <div className="main-container">
        <h1>Let&apos;s do some math!</h1>
        <div className="calculator">
          <div className="display">
            {displayValue}
          </div>
          <div className="keys">
            <button type="button" onClick={() => handleButtonClick('AC')}>AC</button>
            <button type="button" onClick={() => handleButtonClick('+/-')}>+/-</button>
            <button type="button" onClick={() => handleButtonClick('%')}>%</button>
            <button type="button" className="color-btn" onClick={() => handleButtonClick('÷')}>÷</button>
            <button type="button" onClick={() => handleButtonClick('7')}>7</button>
            <button type="button" onClick={() => handleButtonClick('8')}>8</button>
            <button type="button" onClick={() => handleButtonClick('9')}>9</button>
            <button type="button" className="color-btn" onClick={() => handleButtonClick('*')}>*</button>
            <button type="button" onClick={() => handleButtonClick('4')}>4</button>
            <button type="button" onClick={() => handleButtonClick('5')}>5</button>
            <button type="button" onClick={() => handleButtonClick('6')}>6</button>
            <button type="button" className="color-btn" onClick={() => handleButtonClick('-')}>-</button>
            <button type="button" onClick={() => handleButtonClick('1')}>1</button>
            <button type="button" onClick={() => handleButtonClick('2')}>2</button>
            <button type="button" onClick={() => handleButtonClick('3')}>3</button>
            <button type="button" className="color-btn" onClick={() => handleButtonClick('+')}>+</button>
            <button type="button" className="big-btn" onClick={() => handleButtonClick('0')}>0</button>
            <button type="button" onClick={() => handleButtonClick('.')}>.</button>
            <button type="button" className="color-btn" onClick={() => handleButtonClick('=')}>=</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
