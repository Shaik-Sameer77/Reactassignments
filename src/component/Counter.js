// Counter.js

import React from "react";
import "./counter.css"

function Counter(props) {
  const { count, onIncrement, onDecrement } = props;

  return (
    <div className="counter-container">
      <h2>Counter App</h2>
      <p id="count">{count}</p>
      <button onClick={onIncrement}>Increase</button>
      <button onClick={onDecrement}>Decrease</button>
    </div>
  );
}

export default Counter;
