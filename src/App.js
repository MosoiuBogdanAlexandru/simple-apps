//import logo from './logo.svg';
import React, { useState } from 'react';
import Counter from './components/Counter';
import './App.css';
import { findRenderedComponentWithType } from 'react-dom/test-utils';

function App() {

  return (
    <div className="App">
      <Counter />
    </div>
  );
}

export default App;
