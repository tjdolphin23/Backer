import React from 'react';

const Navbar = ({t1, l1, t2, l2, t3, l3, t4, l4}) =>

	<div className="row justify-content-center">
		<div className="col-4 mx-auto">
			<div className="row">
				<div className="col-12 col-md-6 text-center">
					<a className="ourNavLinks" href={l1}><p>{t1}</p></a>
				</div>
				<div className="col-12 col-md-6 text-center">
					<a className="ourNavLinks" href={l2}><p>{t2}</p></a>
				</div>
			</div>
		</div>
		<div className="col-3 mx-auto text-center">
			<a href="/"><img src="/assets/images/angelFish.png" className="img-fluid text-center" id="logo" alt="logo"></img></a>
		</div>
		<div className="col-4 mx-auto">
			<div className="row">
				<div className="col-12 col-md-6 text-center">
					<a className="ourNavLinks" href={l3}><p>{t3}</p></a>
				</div>
				<div className="col-12 col-md-6 text-center">
					<a className="ourNavLinks" href={l4}><p>{t4}</p></a>
				</div>
			</div>
	    </div>
	</div>
		
export default Navbar;