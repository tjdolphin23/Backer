import React from 'react';
import {
	BrowserRouter as Router,
	Route,
	Switch
} from 'react-router-dom';
import './App.css';
import Home from '../../pages/home.js';
import Founders from '../../pages/founders.js';
import Angels from '../../pages/angels.js';
import About from '../../pages/about.js';
import Start from '../../pages/start.js';
import Dashboard from '../../pages/dashboard.js';
import WIP from '../../pages/wip.js';


const App = () =>
	<Router>
		<Switch>
			<Route exact path="/" component={Home}/>
			<Route exact path="/founders" component={Founders}/>
			<Route exact path="/angels" component={Angels}/>
			<Route exact path="/about" component={About}/>
			<Route exact path="/start" component={Start}/>
			<Route exact path="/dashboard" component={Dashboard}/>
			<Route exact path="/wip" component={WIP}/>
		</Switch>
	</Router>

export default App;
