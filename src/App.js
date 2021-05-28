import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import { RemoteReset } from './features/remoteReset/RemoteReset';
import './App.css';

function App() {
  return (
    <div className="App">
 
      <header className="App-header">
      <span>App</span>
        <img src={logo} className="App-logo" alt="logo" />
        <span>Counter Component</span>
        <Counter />
        <br></br>
        <span>Remote Reset Component</span>
        <RemoteReset/>
      </header>
    </div>
  );
}

export default App;
