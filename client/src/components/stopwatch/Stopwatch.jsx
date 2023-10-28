import React, { useState } from 'react';
import { AiFillPauseCircle, AiFillPlayCircle } from 'react-icons/ai';
import { GrPowerReset } from 'react-icons/gr';
import TimeDisplay from './subcomponents/TimeDisplay';

function Stopwatch() {
  const [isRunning, setIsRunning] = useState(false);
  const [time, setTime] = useState({ s: 0, m: 0, h: 0 });
  const [interv, setInterv] = useState();

  let updatedS = time.s;
  let updatedM = time.m;
  let updatedH = time.h;

  const run = () => {
    if (updatedM === 60) {
      updatedH += 1;
      updatedM = 0;
    }
    if (updatedS === 60) {
      updatedM += 1;
      updatedS = 0;
    }
    updatedS += 1;
    return setTime({ s: updatedS, m: updatedM, h: updatedH });
  };

  const start = () => {
    run();
    setIsRunning(true);
    setInterv(setInterval(run, 1000));
  };

  const stop = () => {
    clearInterval(interv);
    setIsRunning(false);
  };

  const reset = () => {
    clearInterval(interv);
    setIsRunning(false);
    setTime({ s: 0, m: 0, h: 0 });
  };

  return (
    <div className="m-5 flex gap-2">
      <button
        type="button"
      >
        {
        isRunning
          ? (
            <AiFillPauseCircle
              className="h-10 w-auto cursor-pointer rounded-full border border-white text-red-500 active:border-none"
              onClick={stop}
            />
          )
          : (
            <AiFillPlayCircle
              className="h-10 w-auto cursor-pointer rounded-full border border-white text-green-500 active:border-none"
              onClick={start}
            />
          )
      }
      </button>
      <button
        type="button"
      >
        <GrPowerReset
          className="h-10 w-auto cursor-pointer rounded-full border border-white bg-gray-200 duration-500 active:rotate-90 active:scale-95"
          onClick={reset}
        />
      </button>
      <TimeDisplay
        hours={time.h}
        minutes={time.m}
        seconds={time.s}
      />
    </div>
  );
}

export default Stopwatch;
