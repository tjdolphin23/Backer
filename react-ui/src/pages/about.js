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
			        <Title text1="about" text2=""/>
				  </ContainerFluid>
				</JumbotronFluid>
				<Container>
					<div>
						<h2 className="aboutTitle"> How Angel Fish Helps </h2> 
						<h4 className="about">
							When you have a world class idea, you need a world class team.
							At Angel Fish we are focused on providing you the resources you need to turn your idea into reality.
						</h4>
						<h4 className="about">
							By connecting founders with angel investors we facilitate the funding, mentorship, and the support you need.
						</h4>
						<h4 className="about">
							For the founders, you'll simply tell us about yourself, about your idea, and we will ensure you have all that you need from there.
						</h4>
						<h4 className="about">
							For the angels, you'll show us you're history of success and we will give you the tools needed to help founders from all over the world.
						</h4>
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