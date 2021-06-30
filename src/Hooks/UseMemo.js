import React, { useState, useMemo } from 'react';

function UseMemo() {
  let [count, setCount] = useState(0);
  let [count2, setCount2] = useState(0);

  let handleCount = () => {
    setCount((e) => e + 1);
  };
  let handleCount2 = () => {
    setCount2((e) => e + 1);
  };
  const isEven = useMemo(() => {
    let i = 0;
    while (i < 2000000000) i++;
    return count % 2 === 0;
  }, [count]);

  return (
    <div>
      <p>
        <button onClick={handleCount}>Counter 1: {count}</button>
        <span>{isEven ? 'Even' : 'Odd'}</span>
      </p>
      <p>
        {' '}
        <button onClick={handleCount2}>Counter 2: {count2}</button>
      </p>
    </div>
  );
}

export default UseMemo;
