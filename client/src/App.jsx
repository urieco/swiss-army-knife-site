import React from 'react';
import StopwatchContextProvider from './context/StopwatchContextProvider';
import RouteSwitch from './RouteSwitch';

function App() {
  return (
    <StopwatchContextProvider>
      <RouteSwitch />
    </StopwatchContextProvider>
  );
}

export default App;
