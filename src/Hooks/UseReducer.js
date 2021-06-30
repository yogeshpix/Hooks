import React, { useReducer } from 'react';

let initialState = 0;
let reducer = (state, action) => {
  switch (action) {
    case 'increment':
      return state + 1;
    case 'decrement':
      return state - 1;
    case 'reset':
      return initialState;
    default:
      return state;
  }
};

function UseReducer() {
  let [count, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <p>Display Count: {count}</p>
      <button onClick={() => dispatch('increment')}>Increment</button>
      <button onClick={() => dispatch('decrement')}>Decrement</button>
      <button onClick={() => dispatch('reset')}>Reset</button>
    </>
  );
}

export default UseReducer;
