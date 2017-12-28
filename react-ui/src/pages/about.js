import React, {Component} from 'react';
import NavBar from '../components/bootstrap/navbar.js';
import Container from '../components/bootstrap/container.js';
import ContainerFluid from '../components/bootstrap/containerFluid.js';
import Testimonials from '../components/bootstrap/testimonials.js';
import GoFish from '../components/bootstrap/title.js';
import Jumbotron from '../components/bootstrap/jumbotronFluid.js';
import Foot from '../components/bootstrap/foot.js';
import Axios from 'axios';

class Home extends Component {
	
	componentDidMount () {
		Axios.get('/api/about')
		      .then(res => console.log(res.data));
	};

	render () {
		return (
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
		);
	};
}

export default Home;