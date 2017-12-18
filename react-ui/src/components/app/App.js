import React, { Component } from 'react';
import NavBar from '../bootstrap/navbar.js';
import Container from '../bootstrap/container.js';
import Testimonials from '../bootstrap/testimonials.js';
import GoFish from '../bootstrap/GoFish.js';
import How from '../bootstrap/howItWorks.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      	<div className="jumbotron h-25">
	      	<Container>
		        <NavBar/>
		        <GoFish/>
		    </Container>
	    </div>
        <Container>
        	<How/>
        	<Testimonials/>
        </Container>
      </div>
    );
  }
}

export default App;
