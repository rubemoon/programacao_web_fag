import React, { useState } from 'react';

const NumberList: React.FC = () => {
  const [numbers, setNumbers] = useState<number[]>([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

  const addRandomNumber = () => {
    setNumbers([...numbers, Math.floor(Math.random() * 100) + 1]);
  };

  return (
    <div>
      <ul>
        {numbers.map((number, index) => (
          <li key={index}>{number}</li>
        ))}
      </ul>
      <button onClick={addRandomNumber}>Add Random Number</button>
    </div>
  );
};

export default NumberList;