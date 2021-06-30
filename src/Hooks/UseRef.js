import React, { useState, useEffect, useRef } from 'react';

function UseRef() {
  let [timer, setTimer] = useState(0);
  let inputRef = useRef(null);
  let intervalRef = useRef();

  useEffect(() => {
    inputRef.current.focus();

    intervalRef.current = setInterval(() => {
      setTimer((e) => e + 1);
    }, 1000);

    return () => {
      clearInterval(intervalRef.current);
    };
  }, []);
  return (
    <div>
      <input type='text' ref={inputRef} />
      <p>Timer - {timer}</p>
      <button onClick={() => clearInterval(intervalRef.current)}>
        Stop Timer
      </button>
    </div>
  );
}

export default UseRef;
