import React, {Component} from 'react';
import NavBar from '../components/bootstrap/navbar.js';
import Container from '../components/bootstrap/container.js';
import ContainerFluid from '../components/bootstrap/containerFluid.js';
import Testimonials from '../components/bootstrap/testimonials.js';
import GoFish from '../components/bootstrap/GoFish.js';
import Jumbotron from '../components/bootstrap/jumbotron.js';
import How from '../components/bootstrap/howItWorks.js';
import Foot from '../components/bootstrap/foototron.js';

class Home extends Component {
	
	componentDidMount () {
		fetch('/api/about')
		      .then(res => console.log(res.body))
	}

	render () {
		return (
			<div className="App">
				<Jumbotron>
					    <NavBar/>
					    <GoFish/>
				</Jumbotron>
				<Container>
					<How/>
					<Testimonials/>
				</Container>
				<Foot/>
			</div>
		);
	};
}

export default Home;