import React from 'react';
import ReactDOM from 'react-dom/client';
import Description from './templates/Description.js'
import Hero from './templates/Hero.js'

export default function App() {
  return (
    <div className="App">
      <div className="game"> 
        <Description />
        <Hero />
      </div>
    </div>
  );
}
