import React, {Component} from 'react';
import NavBar from '../components/navbars/navbar.js';
import Container from '../components/containers/container.js';
import ContainerFluid from '../components/containers/containerFluid.js';
import Title from '../components/title/title.js';
import JumbotronFluid from '../components/containers/jumbotronFluid.js';
import Foot from '../components/footer/foot.js';

class Start extends Component {

	componentWillMount () {
		console.log();
		if(sessionStorage.getItem("userName") && sessionStorage.getItem("userId")){
			window.location = ("/dashboard");
		}
	}

	render() {
		return (
			<div>
				<JumbotronFluid css="head">
					<ContainerFluid>
						    <NavBar t1="Founders" l1="/founders" t2="Angels" l2="/angels" t3="About" l3="/about" t4="Start Now" l4="/start"/>
						    <Title text1="angel fish" text2="Work In Progress..."/>
					</ContainerFluid>
				</JumbotronFluid>
				<Container>
					<div className="row justify-content-center">
						<p className="mt-5"><h1>Hey! We're Working Here!</h1></p>
					</div>
				</Container>
				<ContainerFluid css="foot">
					<Foot/>
				</ContainerFluid>
			</div>
		)
	}
}

export default Start;