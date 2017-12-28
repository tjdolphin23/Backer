import React from 'react';
import NavBar from '../components/bootstrap/navbar.js';
import Container from '../components/bootstrap/container.js';
import ContainerFluid from '../components/bootstrap/containerFluid.js';
import Title from '../components/bootstrap/title.js';
import Jumbotron from '../components/bootstrap/jumbotronFluid.js';
import JumbotronFluid from '../components/bootstrap/jumbotronFluid.js';
import Foot from '../components/bootstrap/foot.js';

const Founders = () =>

<div className="App">
	<JumbotronFluid css="head">
		<ContainerFluid>
			    <NavBar/>
			    <Title text1="FOUNDERS" text2="This is where more info can go"/>
		</ContainerFluid>
	</JumbotronFluid>
	<Container>
	</Container>
	<Foot/>
</div>

export default Founders;