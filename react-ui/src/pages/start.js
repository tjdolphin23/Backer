import React from 'react';
import NavBar from '../components/bootstrap/navbar.js';
import Container from '../components/bootstrap/container.js';
import ContainerFluid from '../components/bootstrap/containerFluid.js';
import Title from '../components/bootstrap/title.js';
import SignIn from '../components/bootstrap/signIn.js';
import Register from '../components/bootstrap/register.js';
import JumbotronFluid from '../components/bootstrap/jumbotronFluid.js';
import Foot from '../components/bootstrap/foot.js';

const Start = () =>

<div>
	<JumbotronFluid css="head">
		<ContainerFluid>
			    <NavBar t1="Founders" l1="/founders" t2="Angels" l2="/angels" t3="About" l3="/about" t4="Start Now" l4="/start"/>
			    <Title text1="angel fish" text2="Where Ideas Become Reality"/>
		</ContainerFluid>
	</JumbotronFluid>
	<Container>
		<div className="row justify-content-center">
			<div className="col-xs-12 col-md-5 mt-3">
				<SignIn/>
			</div>
			<div className="col-xs-12 col-md-5 mt-3">
				<Register/>
			</div>
		</div>
	</Container>
	<ContainerFluid css="foot">
		<Foot/>
	</ContainerFluid>
</div>

export default Start;