import React from 'react';

const Foot = () =>

<div>
	<div className="row justify-content-center text-center mt-3">
		<div className="col-xs-8 col-md-6">
			<div className="row">
				<div className="mx-auto">
					<a href="/" alt="Home"><h5 className="footLinks">Home</h5></a>
				</div>
				<div className="mx-auto">
					<a href="/founders" alt="Founders"><h5 className="footLinks">Founders</h5></a>
				</div>
				<div className="mx-auto">
					<a href="/angels" alt="Investors"><h5 className="footLinks">Angels</h5></a>
				</div>
				<div className="mx-auto">
					<a href="/aboutUs" alt="About"><h5 className="footLinks">About Us</h5></a>
				</div>
			</div>
		</div>
	</div>
	<div className="row justify-content-center text-center">
		<div className="col-xs-6 col-md-4">
			<div className="row">
				<div className="mx-auto">
					<a href="/api" alt="API"><h5 className="footLinks">API</h5></a>
				</div>
				<div className="mx-auto">
					<a href="/careers" alt="Careers"><h5 className="footLinks">Careers</h5></a>
				</div>
				<div className="mx-auto">
					<a href="/contact" alt="Contact"><h5 className="footLinks">Contact</h5></a>
				</div>
				<div className="mx-auto">
					<a href="/legal" alt="Legal"><h5 className="footLinks">Legal</h5></a>
				</div>
			</div>
		</div>
	</div>
	<div className="row justify-content-center">
		<div className="col-xs-8 col-md-6 text-center">
			<h5>&#169; 2017 BSCTD Industries</h5>
		</div>
	</div>
</div>

export default Foot;