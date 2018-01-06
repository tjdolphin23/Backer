import React from 'react';
import NavBar from '../components/bootstrap/navbar.js';
import Container from '../components/bootstrap/container.js';
import ContainerFluid from '../components/bootstrap/containerFluid.js';
import Testimonials from '../components/bootstrap/testimonials.js';
import GoFish from '../components/bootstrap/title.js';
import Jumbotron from '../components/bootstrap/jumbotronFluid.js';
import Foot from '../components/bootstrap/foot.js';
import JumbotronFluid from '../components/bootstrap/jumbotronFluid.js';
import Title from '../components/bootstrap/title.js';

const Home = () =>

<div className="App">
	<JumbotronFluid css="head">
		<ContainerFluid>
			    <NavBar t1="Founders" l1="/founders" t2="Angels" l2="/angels" t3="About" l3="/about" t4="Start Now" l4="/start"/>
			    <Title text1="angels" text2=""/>
		</ContainerFluid>
	</JumbotronFluid>
	<Container>
		<div className="row">
			<div className="col-12" className="colTitle">
				<h1></h1>
				<h1></h1>
				<h1></h1>
				<h2> How it works </h2>
			</div>
		</div>
			<div className="row">
			  <div className="Para1 col-8">
					<p> By signing up with a free account you have access to thousands of products that are just waiting to take off. 
					When signing up you will be asked questions about your interests and field of work to help set you up with
					the best products to invest in. After finding the perfect investing opportunity, your project will have its own dashboard 
					that you can connect with your investee and update your progress in real time.</p>
			  </div>
		    </div>
			<div className="row">	
				<div className="Para2">		
					<h2 className="colTitle"> Benefits </h2>
						<ul>
						   <li> Get connected to thousands of products looking for business partners </li>
						   <li> Access to a live dashboard to track your success! </li>
						   <li> See your investee's product and brand grow </li>
						   <li> Become a successful investor (financially & see your portfolio grow) </li>
						</ul>
				</div>
				</div>
			<div className="register">	
				<button type="button" className="btn btn-default"> Register Now </button>
			</div>
	</Container>
	<ContainerFluid css="foot">
		<Foot/>
	</ContainerFluid>
</div>

export default Home;