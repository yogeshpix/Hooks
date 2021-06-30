import React, { useState, useEffect } from 'react';

function UseEffect() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('');

  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const [display, setDisplay] = useState(true);

  const logMousePosition = (e) => {
    setX(e.clientX);
    setY(e.clientY);
  };
  useEffect(() => {
    console.log(`updating title`);
    document.title = `You clicked ${count} times`;
  }, [count]);

  useEffect(() => {
    console.log(`updating title`);
    window.addEventListener('mousemove', logMousePosition);
  }, []);

  let hookContainer = {
    backgroundColor: '#f1f1fa',
    padding: '15px',
    margin: '15px',
  };
  return (
    <div>
      <h1>useEffect Hooks</h1>
      <div style={hookContainer}>
        <h2>useEffect after render</h2>
        <button onClick={() => setCount(count + 1)}>click {count} times</button>
      </div>

      <div style={hookContainer}>
        <h2>useEffect conditionally run effects</h2>
        <input
          type='text'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button onClick={() => setCount(count + 1)}>click {count} times</button>
      </div>

      <div style={hookContainer}>
        <h2>useEffect run only once</h2>
        <p>
          Mouse Position = x: {x} & y: {y}
        </p>
      </div>
      <div style={hookContainer}>
        <h2>useEffect with cleanup</h2>

        <button onClick={() => setDisplay(!display)}>Toggle Button</button>
        {display && <p>Hello</p>}
      </div>
    </div>
  );
}

export default UseEffect;
