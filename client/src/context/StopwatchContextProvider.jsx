import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

const StopwatchContext = createContext();
const StopwatchUpdateContext = createContext();

function StopwatchContextProvider({ children }) {
  const [stopwatchData, setStopwatchData] = useState();

  return (
    <StopwatchContext.Provider value={stopwatchData}>
      <StopwatchUpdateContext.Provider value={setStopwatchData}>
        {children}
      </StopwatchUpdateContext.Provider>
    </StopwatchContext.Provider>
  );
}

StopwatchContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default StopwatchContextProvider;
