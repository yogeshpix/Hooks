import React, { useState, useCallback } from 'react';
import Title from '../Component/Title';
import Button from '../Component/Button';
import Count from '../Component/Count';

function UseCallback() {
  let [age, setAge] = useState(26);
  let [salary, setSalary] = useState(50000);

  let incrementAge = useCallback(() => {
    setAge((prev) => prev + 1);
  }, [age]);

  let incrementSalary = useCallback(() => {
    setSalary((prev) => prev + 1000);
  }, [salary]);

  return (
    <div>
      <Title />
      <Count text='Age' count={age} />
      <Button handleClick={incrementAge}>Increment Age</Button>
      <Count text='Salary' count={salary} />
      <Button handleClick={incrementSalary}>Increment Salary</Button>
    </div>
  );
}

export default UseCallback;
