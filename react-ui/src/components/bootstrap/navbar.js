import React from 'react';

const Navbar = ({t1, l1, t2, l2, t3, l3, t4, l4}) =>

	<div className="row justify-content-center">
		<div className="col-4 mx-auto text-center">
			<a className="ourNavLinks" href={l1}><p>{t1}</p></a>
			<a className="ourNavLinks" href={l2}><p>{t2}</p></a>
		</div>
		<div className="col-3 mx-auto">
			<a href="/"><img src="/assets/images/angelfish.png" className="img-fluid text-center" alt="logo"></img></a>
		</div>
		<div className="col-4 mx-auto text-center">
		    <a className="ourNavLinks" href={l3}><p>{t3}</p></a>
		    <a className="ourNavLinks" href={l4}><p>{t4}</p></a>
	    </div>
	</div>
		
export default Navbar;