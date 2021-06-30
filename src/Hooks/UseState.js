import React, { useState } from 'react';
import Cart from '../Component/Cart';

function UseState() {
  let [count, setCount] = useState(0);
  let [name, setName] = useState({ firstName: '', lastName: '' });
  let [items, setItems] = useState([]);

  let increment = () => {
    count += 1;
    setCount(count);
  };

  let increment5 = () => {
    setCount((ele) => ele + 5);
  };

  let decrement = () => {
    count -= 1;
    setCount(count);
  };

  const addItem = () => {
    // let newItem = +prompt('Enter your new Item', '');
    setItems([
      ...items,
      {
        id: items.length,
        value: Math.floor(Math.random() * 10) + 1,
      },
    ]);

    totalItem();
  };

  const totalItem = () => {
    let sum = 0;
    items.map((item) => {
      return (sum += item.value);
    });

    document.getElementById('totalitem').innerHTML = sum;
  };

  let hookContainer = {
    backgroundColor: '#f1f1fa',
    padding: '15px',
    margin: '15px',
  };

  return (
    <div>
      <h2>useState Hooks</h2>
      <div style={hookContainer}>
        <h3>useState Hook with Previous Value</h3>
        <Cart value={count} color='red' />
        <button onClick={increment5}>Increment by 5</button>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={() => setCount(0)}>Reset</button>
      </div>

      <div style={hookContainer}>
        <h3>useState Hook with Object</h3>
        <p style={{ color: 'red' }}>
          {name.firstName} {name.lastName}
        </p>
        <input
          type='text'
          value={name.firstName}
          onChange={(e) => setName({ ...name, firstName: e.target.value })}
        />

        <input
          type='text'
          value={name.lastName}
          onChange={(e) => setName({ ...name, lastName: e.target.value })}
        />
      </div>

      <div style={hookContainer}>
        <h3>useState Hook with Array</h3>
        <button onClick={addItem}>Add a number</button>
        <ul>
          {items.map((item) => {
            return <li key={item.id}>{item.value}</li>;
          })}
        </ul>
        <p>
          Total :<span id='totalitem'>0</span>
        </p>
      </div>
    </div>
  );
}

export default UseState;
