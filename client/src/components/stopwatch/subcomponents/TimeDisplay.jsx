import React from 'react';
import PropTypes from 'prop-types';

function TimeDisplay({ hours, minutes, seconds }) {
  const formatNumber = (num) => {
    if (num < 10) {
      return `0${num}`;
    }
    if (num === 60) {
      return '00';
    }
    return num;
  };

  return (
    <div className="flex items-center justify-between gap-2 text-2xl md:mx-2">
      <div className="rounded-lg border p-2 text-red-400">
        {formatNumber(hours)}
      </div>
      <div className="py-2">:</div>
      <div className="rounded-lg border p-2 text-orange-400">
        {formatNumber(minutes)}
      </div>
      <div className="py-2">:</div>
      <div className="rounded-lg border p-2 text-yellow-400">
        {formatNumber(seconds)}
      </div>
    </div>
  );
}

TimeDisplay.propTypes = {
  hours: PropTypes.number.isRequired,
  minutes: PropTypes.number.isRequired,
  seconds: PropTypes.number.isRequired,
};

export default TimeDisplay;
