import React, { useState } from 'react';
import Stopwatch from './stopwatch/Stopwatch';

function StopwatchPanel() {
  const [stopwatchNumber, setStopwatchNumber] = useState([0]);

  const addStopwatch = () => {
    setStopwatchNumber((prev) => [...prev, prev[prev.length - 1] + 1]);
  };

  const deleteStopwatch = (index) => {
    setStopwatchNumber((prev) => prev.filter((item) => item !== index));
  };

  return (
    <div className="flex flex-col gap-y-10">
      <button
        type="button"
        className="w-fit cursor-pointer select-none self-end rounded-lg bg-green-500 p-2 py-0 pb-1 text-4xl font-bold shadow-sm shadow-white active:scale-95"
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
