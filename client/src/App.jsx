import React from 'react';
import Stopwatch from './components/stopwatch/Stopwatch';

function App() {
  return (
    <div className="flex h-screen flex-col items-center gap-y-4 bg-black text-white">
      <Stopwatch />
    </div>
  );
}

export default App;
