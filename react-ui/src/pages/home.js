import React from 'react';
import NavBar from '../components/bootstrap/navbar.js';
import Container from '../components/bootstrap/container.js';
import ContainerFluid from '../components/bootstrap/containerFluid.js';
import Testimonials from '../components/bootstrap/testimonials.js';
import GoFish from '../components/bootstrap/GoFish.js';
import Jumbotron from '../components/bootstrap/jumbotron.js';
import How from '../components/bootstrap/howItWorks.js';

const Home = () =>

<div className="App">
	<Jumbotron>
		    <NavBar/>
		    <GoFish/>
	</Jumbotron>
	<Container>
		<How/>
		<Testimonials/>
	</Container>
</div>

export default Home;