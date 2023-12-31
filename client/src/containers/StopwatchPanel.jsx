import React, { useState } from 'react';
import Stopwatch from './stopwatch/Stopwatch';
import idGenerator from '../utils/idGenerator';

function StopwatchPanel() {
  const [stopwatchNumber, setStopwatchNumber] = useState(['base0']);

  const addStopwatch = () => {
    setStopwatchNumber((prev) => [...prev, idGenerator(5)]);
  };

  const deleteStopwatch = (index) => {
    setStopwatchNumber((prev) => prev.filter((item) => item !== index));
  };

  return (
    <div className="w-full px-[5%] text-end text-white lg:px-[20%]">
      <button
        type="button"
        className="mb-2 mt-10 cursor-pointer select-none rounded-lg bg-green-500 p-2 pb-1 pt-0 text-4xl font-bold shadow-sm shadow-white active:scale-95"
        onClick={addStopwatch}
      >
        +
      </button>
      {stopwatchNumber.map((item) => (
        <Stopwatch
          key={item}
          deleteStopwatch={() => deleteStopwatch(item)}
        />
      ))}
    </div>
  );
}

export default StopwatchPanel;
