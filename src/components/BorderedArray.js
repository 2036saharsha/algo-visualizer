import React, { useState } from 'react';
import { generateRandomArray } from './RandomArray';
import { InsertionSort } from '../algos/InsertionSort'
import '../styles/BorderedArray.css';

const BorderedArray = ({ setCurrPicked, setCurrColor }) => {
  const arrayLength = 8;
  const min_num = -10;
  const max_num = 50;
  const zips = generateRandomArray(arrayLength, min_num, max_num);
  const [elements, setElements] = useState(zips);

  return (
    <div className="array" >
      {elements.map(([randomNumber, randomColor], index) => (
        <div
          key={index}
          className="number"
          style={{
            backgroundColor: randomColor,
            fontSize: `20px`,
          }}
        >       
          {randomNumber}
        </div>
      ))}
      <button onClick={() => InsertionSort(elements, setElements, setCurrPicked, setCurrColor)}>Next Step</button>
    </div>
  );
};

export default BorderedArray;
