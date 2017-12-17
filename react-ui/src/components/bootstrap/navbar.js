import React from 'react';

const Navbar = ({navName}) =>
	<div className="container">
		<div className="row">
			<div className="col-12">
				<div className="row">
					<div className="col-4">
						<ul className="nav">
						  <li className="nav-item mt-3 mx-auto">
						    <a className="nav-link" href="#"><h4 className="text-dark">Founders</h4></a>
						  </li>
						  <li className="nav-item mt-3 mx-auto">
						    <a className="nav-link" href="#"><h4 className="text-dark">Investors</h4></a>
						  </li>
						</ul>
					</div>
					<div className="col-4 text-center">
					    <img src="assets/images/transpLogo.png" className="w-25 mt-1" alt="Go Fish Logo"></img>
					</div>
					<div className="col-4">
						<ul className="nav">
						  <li className="nav-item mt-3 mx-auto">
						    <a className="nav-link" href="#"><h4 className="text-dark">Sign In</h4></a>
						  </li>
						  <li className="nav-item mt-3 mx-auto">
						    <a className="nav-link" href="#"><h4 className="text-dark">Sign Up</h4></a>
						  </li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</div>

export default Navbar;