import React, {Component} from 'react';
import NavBar from '../components/navbars/navbar.js';
import Container from '../components/containers/container.js';
import ContainerFluid from '../components/containers/containerFluid.js';
import Title from '../components/title/title.js';
import SignIn from '../components/forms/signIn.js';
import SignUp from '../components/forms/signUp.js';
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
						    <Title text1="angel fish" text2="Where Ideas Become Reality"/>
					</ContainerFluid>
				</JumbotronFluid>
				<Container>
					<div className="row justify-content-center">
						<SignIn/>
						<SignUp/>
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