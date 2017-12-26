import React from 'react';
import NavBar from '../components/bootstrap/navbar.js';
import Container from '../components/bootstrap/container.js';
import ContainerFluid from '../components/bootstrap/containerFluid.js';
import Testimonials from '../components/bootstrap/testimonials.js';
import GoFish from '../components/bootstrap/angelFish.js';
import Jumbotron from '../components/bootstrap/jumbotronFluid.js';
import Foot from '../components/bootstrap/foot.js';

const Home = () =>

<div className="App">
	<Jumbotron>
		    <NavBar/>
		    <GoFish/>
	</Jumbotron>
	<Container>
		<Testimonials/>
	</Container>
	<Foot/>
</div>

export default Home;