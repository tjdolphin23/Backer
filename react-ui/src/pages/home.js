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
			    <NavBar t1="Founders" l1="/founders" t2="Angels" l2="/angels" t3="About" l3="/about" t4="Start Now" l4="/getIn"/>
			    <Title text1="ANGEL FISH" text2="Where Entrepenuers Go To Cast Their Lines"/>
		</ContainerFluid>
	</JumbotronFluid>
	<Container>
		<div className="row justify-content-center">
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