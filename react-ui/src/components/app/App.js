import React, { Component } from 'react';
import NavBar from '../bootstrap/navbar.js';
import Container from '../bootstrap/container.js';
import How from '../bootstrap/howItWorks.js';
import GoFish from '../bootstrap/GoFish.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar/>
        <Container>
        	<GoFish/>
        	<How/>
        </Container>
      </div>
    );
  }
}

export default App;
