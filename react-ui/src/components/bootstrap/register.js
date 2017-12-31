import React, {Component} from 'react';

class Register extends Component {
	// Setting the component's initial state
	state = {
	  firstName: "",
	  lastName: ""
	};

	handleInputChange = event => {
	  // Getting the value and name of the input which triggered the change
	  const { name, value } = event.target;

	  // Updating the input's state
	  this.setState({
	    [name]: value
	  });
	};

	handleFormSubmit = event => {
	  // Preventing the default behavior of the form submit (which is to refresh the page)
	  event.preventDefault();

	  // Alert the user their first and last name, clear `this.state.firstName` and `this.state.lastName`, clearing the inputs
	  alert(`Hello ${this.state.firstName} ${this.state.lastName}`);
	  this.setState({
	    firstName: "",
	    lastName: ""
	  });
	};
	//RenderTime
	render () {
		return (
			<div>
				<div className="row mt-2">
					<div className="col-12">
						<h2>Register</h2>
						<hr></hr>
					</div>
				</div>
				<div className="row mb-2">
					<div className="col-12">
						<form>
							<div className="form-group">
							  <label htmlFor="firstName">First Name</label>
							  <textarea className="form-control" id="firstName" rows="1"></textarea>
							</div>
							<div className="form-group">
							  <label htmlFor="lastName">Last Name</label>
							  <textarea className="form-control" id="lastName" rows="1"></textarea>
							</div>
							<div className="form-group">
							  <label htmlFor="userName">User Name</label>
							  <textarea className="form-control" id="userName" rows="1"></textarea>
							  <small id="userHelp" className="form-text text-muted">This is the name others will see</small>
							</div>
							<div className="form-group">
								<label htmlFor="registerEmail">Email address</label>
								<input type="email" className="form-control" id="registerEmail" aria-describedby="emailHelp" placeholder="Enter email"></input>
								<small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
							</div>
							<div className="form-group">
								<label htmlFor="registerPassword">Password</label>
								<input type="password" className="form-control" id="registerPassword" placeholder="Create Password"></input>
							</div>
							<div className="form-group">
							  <label htmlFor="country">Country</label>
							  <select className="form-control" id="countrySelect">
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
								<div className="form-check col-5 text-center">
									<input type="checkbox" className="form-check-input" id="founder"></input>
									<label className="form-check-label" htmlFor="founder">I'm A Founder</label>
								</div>
								<div className="form-check col-5 text-center">
									<input type="checkbox" className="form-check-input" id="angel"></input>
									<label className="form-check-label" htmlFor="angel">I'm An Angel</label>
								</div>
							</div>
							<button type="submit" className="btn btn-warning">Register</button>
						</form>
					</div>
				</div>
			</div>
		);
	};
};

export default Register;