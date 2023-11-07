import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { AiFillPauseCircle, AiFillPlayCircle } from 'react-icons/ai';
import { GrPowerReset } from 'react-icons/gr';
import TimeDisplay from './subcomponents/TimeDisplay';
import StopwatchLabel from './subcomponents/StopwatchLabel';

function Stopwatch({ deleteStopwatch }) {
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
    <div className="relative md:grid md:grid-cols-8 md:items-center md:justify-between">
      <div className="flex">
        <div className="flex">
          <button
            type="button"
            className="absolute top-3 md:static md:col-span-1"
          >
            {
              isRunning
                ? (
                  <AiFillPauseCircle
                    className="h-12 w-auto cursor-pointer rounded-full border border-white text-red-500 active:border-none"
                    onClick={stop}
                  />
                )
                : (
                  <AiFillPlayCircle
                    className="h-12 w-auto cursor-pointer rounded-full border border-white text-green-500 active:border-none"
                    onClick={start}
                  />
                )
          }
          </button>
          <button
            type="button"
            className="absolute left-14 top-3 ml-2 flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-gray-200 duration-300 active:rotate-180 active:scale-95 md:static md:w-auto md:px-1"
          >
            <GrPowerReset
              className="text-4xl"
              onClick={reset}
            />
          </button>
        </div>
      </div>
      <div className="my-4 flex flex-col-reverse gap-4 md:col-span-7 md:w-auto md:flex-row">
        <TimeDisplay
          hours={time.h}
          minutes={time.m}
          seconds={time.s}
        />
        <StopwatchLabel />
        <button
          type="button"
          className="select-none self-end rounded bg-red-500 px-3 py-1 text-3xl font-bold text-black shadow-sm shadow-white active:shadow-none md:static md:my-0 md:ml-2 md:self-center"
          onClick={deleteStopwatch}
        >
          X
        </button>
      </div>
    </div>
  );
}

Stopwatch.propTypes = {
  deleteStopwatch: PropTypes.func.isRequired,
};

export default Stopwatch;
