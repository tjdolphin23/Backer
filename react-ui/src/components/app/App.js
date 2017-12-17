import React, { Component } from 'react';
import NavBar from '../bootstrap/navbar.js';
import Container from '../bootstrap/container.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar/>
        <Container>
        </Container>
      </div>
    );
  }
}

export default App;
