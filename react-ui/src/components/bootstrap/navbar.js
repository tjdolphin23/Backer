import React from 'react';

const Navbar = ({t1, l1, t2, l2, t3, l3, t4, l4}) =>
	<div className="row justify-content-center">
		<div className="col-10">
			<div className="row justify-content-center">
				<div className="col-xs-12 col-lg-4 mt-4">
					<ul className="nav">
					  <li className="nav-item mx-auto">
					    <a className="nav-link" href={l1}><h4>{t1}</h4></a>
					  </li>
					  <li className="nav-item mx-auto">
					    <a className="nav-link" href={l2}><h4>{t2}</h4></a>
					  </li>
					</ul>
				</div>
				<div className="col-xs-12 col-lg-3 text-center">
				    <img src="assets/images/angelFish.png" className="w-25 mt-1" alt="Angel Fish Logo"></img>
				</div>
				<div className="col-xs-12 col-lg-4 mt-4">
					<ul className="nav">
					  <li className="nav-item mx-auto">
					    <a className="nav-link" href={l3}><h4>{t3}</h4></a>
					  </li>
					  <li className="nav-item mx-auto">
					    <a className="nav-link" href={l4}><h4>{t4}</h4></a>
					  </li>
					</ul>
				</div>
			</div>
		</div>
	</div>
		
export default Navbar;