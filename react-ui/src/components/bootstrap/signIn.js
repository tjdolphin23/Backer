import React, {Component} from 'react';
import Axios from 'axios';

class SignIn extends Component {
	state = {
		signInEmail: "",
		signInPassword: ""
	};

	handleInputChange = event => {
		const {id, value} = event.target;
		this.setState ({
			[id]:value
		});
	};

	handleFormSubmit = (event) => {
		event.preventDefault();
		const {signInEmail, signInPassword} = this.state;
		this.setState ({
			signInEmail: "",
			signInPassword: ""
		});
		//Axios Request
	  	Axios({
	  	  method: 'post',
	  	  url: '/api/start/signin',
	  	  data: {
	  	    "email": signInEmail,
	  	    "password": signInPassword
	  	  }
	  	}).then(function (response) {
	  	    sessionStorage.setItem('userId', response.data.userId);
	  	    sessionStorage.setItem('userName', response.data.userName);
	  	    this.props.history.push('/dashboard');
	  	  })
	  	  .catch(function (error) {
	  	    console.log(error);
	  	    alert("There seems to be a problem. Please try again.");
	  	  });
	};

	render (props) {
		return (
			<div className="startBox col-10 col-lg-5">
				<div className="row justify-content-center">
					<div className="col-12 mt-2">
						<p>Sign In</p>
						<hr></hr>
					</div>
				</div>
				<div className="row justify-content-center">
					<div className="col-12">
						<form className="mb-3">
						  <div className="form-group">
						    <label htmlFor="signInEmail">Email address</label>
						    <input type="email" className="form-control" id="signInEmail" aria-describedby="emailHelp" placeholder="Enter email" value={this.state.signInEmail} onChange={this.handleInputChange}></input>
						    <small id="emailHelp" className="form-text">Sign in using your email address</small>
						  </div>
						  <div className="form-group">
						    <label htmlFor="signInPassword">Password</label>
						    <input type="password" className="form-control" id="signInPassword" placeholder="Enter Password" value={this.state.signInPassword} onChange={this.handleInputChange}></input>
						  </div>
						  <button type="submit" className="btn btn-warning" onClick={this.handleFormSubmit}>Sign In</button>
						</form>
					</div>
				</div>
			</div>
		);
	};
};

export default SignIn;