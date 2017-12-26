import React from 'react';
import {
	BrowserRouter as Router,
	Route,
	Switch
} from 'react-router-dom';
import './App.css';
import Home from '../../pages/home.js';
import Founders from '../../pages/founders.js';
import Investors from '../../pages/investors.js';
import About from '../../pages/about.js';
import SignIn from '../../pages/signIn.js';
import SignUp from '../../pages/signUp.js';


const App = () =>
	<Router>
		<Switch>
			<Route exact path="/" component={Home}/>
			<Route exact path="/founders" component={Founders}/>
			<Route exact path="/investors" component={Investors}/>
			<Route exact path="/about" component={About}/>
			<Route exact path="/signin" component={SignIn}/>
			<Route exact path="/signup" component={SignUp}/>
		</Switch>
	</Router>

export default App;
