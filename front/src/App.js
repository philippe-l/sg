import React from 'react';
import './App.css';
import InstantPiCamera from './components/InstantPiCamera';
import TempAndHumidity from './components/TempAndHumidity';

function App() {
  return (
    <div>
      <h1>My super green monitoring app</h1>
      <InstantPiCamera data-test="InstantPiCamera" />
      <TempAndHumidity />
    </div>
  );
}

export default App;
