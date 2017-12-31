import React, {Component} from 'react';

class SignIn extends Component {
	render () {
		return (
			<div>
				<div className="row mt-2">
					<div className="col-12">
						<h2>Sign In</h2>
						<hr></hr>
					</div>
				</div>
				<div className="row">
					<div className="col-12">
						<form>
						  <div className="form-group">
						    <label htmlFor="signInEmail">Email address</label>
						    <input type="email" className="form-control" id="signInEmail" aria-describedby="emailHelp" placeholder="Enter email"></input>
						    <small id="emailHelp" className="form-text text-muted">Sign in using your email address</small>
						  </div>
						  <div className="form-group">
						    <label htmlFor="signInPassword">Password</label>
						    <input type="password" className="form-control" id="signInPassword" placeholder="Enter Password"></input>
						  </div>
						  <button type="submit" className="btn btn-warning">Sign In</button>
						</form>
					</div>
				</div>
			</div>
		);
	};
};

export default SignIn;