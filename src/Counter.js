// src/Counter.js
import React from 'react';

const Counter = ({ value, onIncrement, onDecrement, onInputChange, inputtext }) => (
  <div>
    <h1>Counter: {value}</h1>
    <button onClick={onIncrement}>Increment</button>
    <button onClick={onDecrement}>Decrement</button>

    <div>
        <input type='text' placeholder='enter chumma' id='demo'></input>
        <button onClick={onInputChange}>change</button>
        <textarea value={inputtext}></textarea>
    </div>
  </div>
);

export default Counter;
