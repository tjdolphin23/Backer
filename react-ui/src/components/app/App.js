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
import GetIn from '../../pages/getIn.js';


const App = () =>
	<Router>
		<Switch>
			<Route exact path="/" component={Home}/>
			<Route exact path="/founders" component={Founders}/>
			<Route exact path="/angels" component={Angels}/>
			<Route exact path="/about" component={About}/>
			<Route exact path="/getIn" component={GetIn}/>
		</Switch>
	</Router>

export default App;
