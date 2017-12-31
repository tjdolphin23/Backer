import React, {Component} from 'react';

class Register extends Component {
	// Setting the component's initial state
	state = {
	  firstName: "",
	  lastName: "",
	  userName: "",
	  email: "",
	  password: "",
	  country: "",
	  founder: false,
	  angel: false
	};

	handleInputChange = event => {
	  // Getting the value and name of the input which triggered the change
	  const { id, value } = event.target;

	  // Updating the input's state
	  this.setState({
	    [id]: value
	  });
	};

	handleFormSubmit = event => {
	  // Preventing the default behavior of the form submit (which is to refresh the page)
	  event.preventDefault();

	  // Alert the user their first and last name, clear `this.state.firstName` and `this.state.lastName`, clearing the inputs
	  alert(`Hello ${this.state.firstName} ${this.state.lastName} here are your stats:
	  	${this.state.userName}
	  	${this.state.email}
	  	${this.state.password}
	  	${this.state.country}
	  	${this.state.role}`);
	  this.setState({
	    firstName: "",
	    lastName: "",
	    userName: "",
	    email: "",
	    password: "",
	    country: "",
	    role: ""
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
							  <textarea className="form-control" id="firstName" value={this.state.firstName} onChange={this.handleInputChange} rows="1"></textarea>
							</div>
							<div className="form-group">
							  <label htmlFor="lastName">Last Name</label>
							  <textarea className="form-control" id="lastName" value={this.state.lastName} onChange={this.handleInputChange} rows="1"></textarea>
							</div>
							<div className="form-group">
							  <label htmlFor="userName">User Name</label>
							  <textarea className="form-control" id="userName" value={this.state.userName} onChange={this.handleInputChange} rows="1"></textarea>
							  <small id="userHelp" className="form-text text-muted">This is the name others will see</small>
							</div>
							<div className="form-group">
								<label htmlFor="registerEmail">Email address</label>
								<input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email" value={this.state.email} onChange={this.handleInputChange}></input>
								<small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
							</div>
							<div className="form-group">
								<label htmlFor="registerPassword">Password</label>
								<input type="password" className="form-control" id="password" placeholder="Create Password" value={this.state.password} onChange={this.handleInputChange}></input>
							</div>
							<div className="form-group">
							  <label htmlFor="country">Country</label>
							  <select className="form-control" id="country" value={this.state.country} onChange={this.handleInputChange}>
							  	<option></option>
							  	<option>Australia</option>
							  	<option>Canada</option>
							  	<option>Netherlands</option>
							  	<option>United Kingdom</option>
							    <option>United States</option>					    
							  </select>
							</div>
							<div className="form-group">
							  <label htmlFor="role">Are You a Founder, Angel, or Both?</label>
							  <select className="form-control" id="role" value={this.state.role} onChange={this.handleInputChange}>
							  	<option></option>
							  	<option>Founder</option>
							  	<option>Angel</option>
							  	<option>Both</option>	    
							  </select>
							</div>
							<button type="submit" className="btn btn-warning" onClick={this.handleFormSubmit}>Register</button>
						</form>
					</div>
				</div>
			</div>
		);
	};
};

export default Register;