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

	handleFormSubmit = event => {
		event.preventDefault();
		const {signInEmail, signInPassword} = this.state;
		/*console.log(email+" "+password);*/
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
	  	    /*console.log(response);*/
	  	    sessionStorage.setItem('userId', response.data.userId);
	  	    sessionStorage.setItem('userName', response.data.userName);
	  	  })
	  	  .catch(function (error) {
	  	    console.log(error);
	  	  });
	};

	render () {
		return (
			<div>
				<div className="row mt-2">
					<div className="col-12">
						<h2>Sign In</h2>
						<hr></hr>
					</div>
				</div>
				<div className="row mb-2">
					<div className="col-12">
						<form>
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