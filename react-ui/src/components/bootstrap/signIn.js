import React, {Component} from 'react';

class SignIn extends Component {
	render () {
		return (
				<div className="col-12">
					<div className="row">
						<h2>Sign In</h2>
					</div>
					<form>
					  <div className="form-group">
					    <label for="signInEmail">Email address</label>
					    <input type="email" className="form-control" id="signInEmail" aria-describedby="emailHelp" placeholder="Enter email"></input>
					    <small id="emailHelp" className="form-text text-muted">Sign in using your email address</small>
					  </div>
					  <div className="form-group">
					    <label for="signInPassword">Password</label>
					    <input type="password" className="form-control" id="signInPassword" placeholder="Enter Password"></input>
					  </div>
					  <button type="submit" className="btn btn-primary">Sign In</button>
					</form>
				</div>
		);
	};
};

export default SignIn;