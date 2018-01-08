import React, {Component} from 'react';
import NavBar from '../components/navbars/navbar.js';
import Container from '../components/containers/container.js';
import ContainerFluid from '../components/containers/containerFluid.js';
import Jumbotron from '../components/containers/jumbotronFluid.js';
import Foot from '../components/footer/foot.js';
import Axios from 'axios';
import JumbotronFluid from '../components/containers/jumbotronFluid.js';
import Title from '../components/title/title.js';

class Home extends Component {
	
	componentDidMount () {
		Axios.get('/api/about')
		      .then(res => console.log(res.data));
	};

	render () {
		return (
			<div>
				<JumbotronFluid css="head">
		          <ContainerFluid>
			        <NavBar t1="Founders" l1="/founders" t2="Angels" l2="/angels" t3="About" l3="/about" t4="Start Now" l4="/start"/>
			        <Title text1="about us" text2=""/>
				  </ContainerFluid>
				</JumbotronFluid>
				<Container>
					<div>
						<h2 className="aboutTitle"> How we got started </h2> 
						<p className="about"> Angel Fish was founded in Gilbert, AZ Winter of 2017. From there the founders: Ben, Tom, Skylar, Cumorah, and Damien 
						sought out a way to connect entrepreneurs and investors to make their dreams come true. Like the founders, many out there have 
						ideas or products that just don't have the finanicial means in making their ideas a reality. </p> 
					</div>

				</Container>
				<ContainerFluid css="foot">
					<Foot/>
				</ContainerFluid>
			</div>
		);
	};
}

export default Home;