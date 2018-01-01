import React from 'react';

const DashNav = ({t1, l1, t2, l2, t3, l3, t4, l4}) =>

<nav className="navbar navbar-expand-lg navbar-light">
	<span className="navbar-brand">
		<img src="assets/images/angelFish.png" width="30" height="30" className="d-inline-block align-top" alt="angelFish logo"></img> angel fish
	</span>
	<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
	  <span className="navbar-toggler-icon"></span>
	</button>
	<div className="collapse navbar-collapse" id="navbarNavDropdown">
	  <ul className="navbar-nav ml-auto mr-4">
	    <li className="nav-item dropdown">
	      <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
	        Welcome, Person
	      </a>
	      <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
	        <a className="dropdown-item" href="#">View Profile</a>
	        <a className="dropdown-item" href="#">Sign Out</a>
	      </div>
	    </li>
	  </ul>
	</div>
</nav>

export default DashNav;