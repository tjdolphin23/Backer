import React from 'react';
import NavBar from '../components/bootstrap/navbar.js';
import Container from '../components/bootstrap/container.js';
import ContainerFluid from '../components/bootstrap/containerFluid.js';
import Title from '../components/bootstrap/title.js';
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
		<div className="row">
			<div className="col-xs-12 col-sm-6">
				<h1>Sign In</h1>
				<form>
				  <div className="form-group">
				    <label for="signInEmail">Email address</label>
				    <input type="email" className="form-control" id="signInEmail" aria-describedby="emailHelp" placeholder="Enter email"></input>
				    <small id="emailHelp" className="form-text text-muted">Sample Text</small>
				  </div>
				  <div className="form-group">
				    <label for="signInPassword">Password</label>
				    <input type="password" className="form-control" id="signInPassword" placeholder="Enter Password"></input>
				  </div>
				  <button type="submit" className="btn btn-primary">Submit</button>
				</form>
			</div>
			<div className="col-xs-12 col-sm-6">
				<h1>Register</h1>
				<form>
					<div className="form-group">
						<label for="userName">User Name</label>
						<input type="email" className="form-control" id="registerUserName" aria-describedby="emailHelp" placeholder="Create a User Name"></input>
						<small id="emailHelp" className="form-text text-muted">This user name will be how others recognize you</small>
					</div>
					<div className="form-group">
						<label for="registerEmail">Email address</label>
						<input type="email" className="form-control" id="registerEmail" aria-describedby="emailHelp" placeholder="Enter email"></input>
						<small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
					</div>
					<div className="form-group">
						<label for="registerPassword">Password</label>
						<input type="password" className="form-control" id="registerPassword" placeholder="Create Password"></input>
					</div>
						<div className="row justify-content-center">
							<div className="form-check col-5">
								<input type="checkbox" className="form-check-input" id="founder"></input>
								<label className="form-check-label" for="founder">I'm A Founder</label>
							</div>
							<div className="form-check col-5">
								<input type="checkbox" className="form-check-input" id="angel"></input>
								<label className="form-check-label" for="angel">I'm An Angel</label>
							</div>
						</div>
					<button type="submit" className="btn btn-primary">Submit</button>
				</form>
			</div>
		</div>
	</Container>
	<ContainerFluid css="foot">
		<Foot/>
	</ContainerFluid>
</div>

export default Start;