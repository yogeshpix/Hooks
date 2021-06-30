import React, { useReducer } from 'react';

let initialState = {
  firstCounter: 0,
  secondCounter: 10,
};
let reducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return { ...state, firstCounter: state.firstCounter + action.value };
    case 'decrement':
      return { ...state, firstCounter: state.firstCounter - action.value };
    case 'increment2':
      return { ...state, secondCounter: state.secondCounter + action.value };
    case 'decrement2':
      return { ...state, secondCounter: state.secondCounter - action.value };
    case 'reset':
      return initialState;
    default:
      return state;
  }
};

function UseReducer2() {
  let [count, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <p>Display Counter 1: {count.firstCounter}</p>
      <p>Display Counter 2: {count.secondCounter}</p>
      <button onClick={() => dispatch({ type: 'increment', value: 1 })}>
        Increment
      </button>
      <button onClick={() => dispatch({ type: 'decrement', value: 1 })}>
        Decrement
      </button>
      <button onClick={() => dispatch({ type: 'increment2', value: 1 })}>
        Increment2
      </button>
      <button onClick={() => dispatch({ type: 'decrement2', value: 1 })}>
        Decrement2
      </button>
      <button onClick={() => dispatch({ type: 'increment', value: 5 })}>
        Increment 5
      </button>
      <button onClick={() => dispatch({ type: 'decrement', value: 5 })}>
        Decrement 5
      </button>
      <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
    </>
  );
}

export default UseReducer2;
