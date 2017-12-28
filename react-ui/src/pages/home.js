import React from 'react';
import NavBar from '../components/bootstrap/navbar.js';
import Container from '../components/bootstrap/container.js';
import ContainerFluid from '../components/bootstrap/containerFluid.js';
import Testimonials from '../components/bootstrap/testimonials.js';
import Title from '../components/bootstrap/title.js';
import JumbotronFluid from '../components/bootstrap/jumbotronFluid.js';
import HowCircle from '../components/bootstrap/howCircle.js';
import Dash from '../components/bootstrap/dash.js';
import Foot from '../components/bootstrap/foot.js';

const Home = () =>

<div>
	<JumbotronFluid css="head">
		<ContainerFluid>
			    <NavBar/>
			    <Title text1="ANGEL FISH" text2="Where Entrepenuers Go To Cast Their Lines"/>
		</ContainerFluid>
	</JumbotronFluid>
	<Container>
		<div className="row">
			<div className="col-3">
				<HowCircle text="Create"/>
			</div>
			<div className="col-3">
				<HowCircle text="Plan"/>
			</div>
			<div className="col-3">
				<HowCircle text="Pitch"/>
			</div>
			<div className="col-3">
				<HowCircle text="Build"/>
			</div>
		</div>
		<Testimonials/>
	</Container>
	<ContainerFluid css="foot">
		<Foot/>
	</ContainerFluid>
</div>

export default Home;