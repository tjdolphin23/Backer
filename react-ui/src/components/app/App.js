import React, { Component } from 'react';
import NavBar from '../bootstrap/navbar.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar navName="Go Fish"/>
      </div>
    );
  }
}

export default App;
