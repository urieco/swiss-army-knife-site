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
    <div className="text-2xl text-white">
      <span className="mx-2 border p-2 text-red-400">
        {formatNumber(hours)}
      </span>
      <span className="mx-2">:</span>
      <span className="mx-2 border p-2 text-orange-400">
        {formatNumber(minutes)}
      </span>
      <span className="mx-2">:</span>
      <span className="mx-2 border p-2 text-yellow-400">
        {formatNumber(seconds)}
      </span>
    </div>
  );
}

TimeDisplay.propTypes = {
  hours: PropTypes.number.isRequired,
  minutes: PropTypes.number.isRequired,
  seconds: PropTypes.number.isRequired,
};

export default TimeDisplay;
