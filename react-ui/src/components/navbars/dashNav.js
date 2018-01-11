import React, {Component} from 'react';

class DashNav extends Component {

	handleSignOut = () => {
		sessionStorage.removeItem("userName");
		sessionStorage.removeItem("userId");
		window.location = ("/");
	}

	render () {
		return (
			<nav className="navbar navbar-expand-lg navbar-light">
				<span className="navbar-brand">
					<a href="/"><img src="assets/images/angelFish.png" width="30" height="40" className="d-inline-block align-top" alt="angelFish logo"></img></a> angel fish
				</span>
				<span className="nav-item mx-auto">
					<a className="ourDashNavLinks" href="/dashboard"><h3>Dashboard</h3></a>
				</span>	
				<span className="collapse navbar-collapse mx-auto" id="navbarNavDropdown">
					<ul className="navbar-nav ml-auto">
						<li className="nav-item dropdown">
						  <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
						    Welcome, {sessionStorage.getItem("userName")} <span className="oi oi-bell nav-link" title="alerts" aria-hidden="true"></span>
						  </a>
						  <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
						    <button className="dropdown-item">
						    	<span className="oi oi-calendar nav-link" title="calendar" aria-hidden="true"></span> Events
						    </button>
						    <button className="dropdown-item">
						    	<span className="oi oi-inbox nav-link" title="inbox" aria-hidden="true"></span> Messages
						    </button>
						    <button className="dropdown-item">
						    	<span className="oi oi-chat nav-link" title="chat" aria-hidden="true"></span> Chat
						    </button>
						    <button className="dropdown-item">
						    	<span className="oi oi-cog nav-link" title="settings" aria-hidden="true"></span> Settings
						    </button>
						    <button className="dropdown-item" onClick={this.handleSignOut}>
						    	<span className="oi oi-account-logout nav-link" title="sign out" aria-hidden="true"></span> Sign Out
						    </button>
						  </div>
						</li>
					</ul>
				</span>
			</nav>
		)
	}
}

export default DashNav;