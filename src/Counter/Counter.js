import React, { useState } from 'react';
import './Counter.css';

const Counter = () => {
  const [counterValue, setCounterValue] = useState(0);
  const [inputValue, setInputValue] = useState(1);

  return (
    <div>
      <h1 data-testid='header'>My Counter</h1>
      <h2 data-testid='counter'>{counterValue}</h2>
      <button data-testid='subtract-btn'>-</button>
      <input
        type='number'
        data-testid='input'
        className='text-center'
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
      />
      <button
        data-testid='add-btn'
        onClick={(e) => {
          setCounterValue('1');
        }}
      >
        +
      </button>
    </div>
  );
};

export default Counter;
