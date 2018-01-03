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
			    <NavBar t1="Founders" l1="/founders" t2="Angels" l2="/angels" t3="About" l3="/about" t4="Start Now" l4="/start"/>
			    <Title text1="founders" text2=""/>
		</ContainerFluid>
	</JumbotronFluid>
	<Container>
		<div className="row">
			<div className="col-12" className="colTitle">
				<h1></h1>
				<h2> How it works </h2>
			</div>
		</div>
			<div className="row">
			  <div className="Para1 col-8">
					<p> By signing up with a free account you have access to thousands of investors that are looking to help you succeed in your business. 
					When signing up you will be asked questions about the project you are on working to get you connected with the right 
				     type of investor. From there, your project will have its own dashboard that you can connect with your investor and update your progress in real time.</p>
			  </div>
		    </div>
			<div className="row">	
				<div className="Para2">		
					<h2 className="colTitle"> Benefits </h2>
						<ul>
						   <li> Get connected to thousands of Angels </li>
						   <li> Access to a live dashboard to track your success! </li>
						   <li> See your product and your brand grow </li>
						   <li> Become a successful entrepreneur </li>
						</ul>
				</div>
				</div>
			<div className="register">	
				<button type="button" className="btn btn-default"> Register Now </button>
			</div>
	</Container>
	<Foot/>
</div>

export default Founders;