import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import StopwatchPanel from './components/StopwatchPanel';

function RouteSwitch() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/stopwatch" element={<StopwatchPanel />} />
      </Routes>
    </BrowserRouter>
  );
}

export default RouteSwitch;
