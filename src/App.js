import React from 'react';
import './App.css';
import Greeting from './greeting'
import Username from './username'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <marquee><h3>tugas 2.2</h3></marquee>
        
        <Greeting name="abyan" age="22" gender="Men"/>
       <marquee> <h3>Tugas 2.4</h3></marquee>
        <Username/>
        
      </header>
    </div>
  );
}

export default App;
