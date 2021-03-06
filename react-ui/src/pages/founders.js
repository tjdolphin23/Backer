import React from 'react';
import NavBar from '../components/navbars/navbar.js';
import Container from '../components/containers/container.js';
import ContainerFluid from '../components/containers/containerFluid.js';
import Title from '../components/title/title.js';
import JumbotronFluid from '../components/containers/jumbotronFluid.js';
import Foot from '../components/footer/foot.js';

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
			<img src="./assets/images/business.jpg" alt="business" className="img-thumbnail" className="pic1"></img>
			<img src="./assets/images/investors.jpg" alt="business" className="img-thumbnail" className="pic2"></img>
			<img src="./assets/images/hands.jpg" alt="business" className="img-thumbnail" className="pic3"></img>
		</div>
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
			<div className="row justify-content-center">	
				<a href="/start"><button type="button" className="btn btn-default"> Register Now </button></a>
			</div>
	</Container>
	<ContainerFluid css="foot">
		<Foot/>
	</ContainerFluid>
</div>

export default Founders;