import logo from './logo.svg';
import React from 'react';
import './App.css';
import Gallery from './Gallery';

function App() {
  return (
    <div className="App">
      <h1 style={{textAlign:'center'}}>Image Gallery</h1>
      <Gallery/>
    </div>
  );
}

export default App;
