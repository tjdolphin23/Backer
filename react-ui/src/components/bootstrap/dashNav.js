import React from 'react';

const DashNav = () =>

<nav className="navbar navbar-expand-lg navbar-light">
	<span className="navbar-brand">
		<a href="/"><img src="assets/images/angelFish.png" width="30" height="30" className="d-inline-block align-top" alt="angelFish logo"></img></a> angel fish
	</span>
	<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
	  <span className="navbar-toggler-icon"></span>
	</button>
	<div className="collapse navbar-collapse" id="navbarNavDropdown">
	  <ul className="navbar-nav ml-auto mr-4">
	    <li className="nav-item dropdown">
	      <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
	        Welcome, {sessionStorage.getItem("userName")}
	      </a>
	      <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
	        <a className="dropdown-item" href="/viewProfile">View Profile</a>
	        <a className="dropdown-item" href="/">Sign Out</a>
	      </div>
	    </li>
	  </ul>
	</div>
</nav>

export default DashNav;