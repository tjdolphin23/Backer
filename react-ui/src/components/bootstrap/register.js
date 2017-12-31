import React, {Component} from 'react';

class Register extends Component {
	render () {
		return (
				<div className="col-12">
					<div className="row">
						<h2>Register</h2>
					</div>
					<form>
						<div className="form-group">
						  <label for="firstName">First Name</label>
						  <textarea className="form-control" id="firstName" rows="1"></textarea>
						</div>
						<div className="form-group">
						  <label for="lastName">Last Name</label>
						  <textarea className="form-control" id="lastName" rows="1"></textarea>
						</div>
						<div className="form-group">
						  <label for="userName">User Name</label>
						  <textarea className="form-control" id="userName" rows="1"></textarea>
						  <small id="userHelp" className="form-text text-muted">This is the name others will see</small>
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
						<div className="form-group">
						  <label for="country">Country</label>
						  <select class="form-control" id="countrySelect">
						  	<option>Australia</option>
						  	<option>Canada</option>
						  	<option>Netherlands</option>
						  	<option>United Kingdom</option>
						    <option>United States</option>					    
						  </select>
						</div>
						<div className="row justify-content-center">
							<div className="col-12 text-center">
								<p>Select A Role</p>
							</div>
							<div className="form-check col-5">
								<input type="checkbox" className="form-check-input" id="founder"></input>
								<label className="form-check-label" for="founder">I'm A Founder</label>
							</div>
							<div className="form-check col-5">
								<input type="checkbox" className="form-check-input" id="angel"></input>
								<label className="form-check-label" for="angel">I'm An Angel</label>
							</div>
						</div>
						<button type="submit" className="btn btn-primary">Register</button>
					</form>
				</div>
		);
	};
};

export default Register;