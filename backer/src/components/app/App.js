import React, { Component } from 'react';
import NavBar from '../bootstrap/navbar.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar navName="Potato" testNum={5+7}/>
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
