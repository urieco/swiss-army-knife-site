import React from 'react';
import StopwatchPanel from './components/StopwatchPanel';

function App() {
  return (
    <div className="flex h-screen flex-col items-center gap-y-4 bg-black text-white">
      <StopwatchPanel />
    </div>
  );
}

export default App;
