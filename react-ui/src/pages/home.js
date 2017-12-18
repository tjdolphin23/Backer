import React from 'react';
import NavBar from '../components/bootstrap/navbar.js';
import Container from '../components/bootstrap/container.js';
import Testimonials from '../components/bootstrap/testimonials.js';
import GoFish from '../components/bootstrap/GoFish.js';
import How from '../components/bootstrap/howItWorks.js';

const Home = () =>

<div className="App">
	<div className="jumbotron">
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

export default Home;