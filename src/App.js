import React from 'react';
import './App.scss';
import {Wrapper} from './components/Wrapper'
import {Header} from './components/Header'

function App() {
  return (
    <div className="App">
      <Header/>
      <Wrapper/>
    </div>
  );
}

export default App;
