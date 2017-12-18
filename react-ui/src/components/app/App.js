import React from 'react';
import {
	BrowserRouter as Router,
	Route,
	Switch
} from 'react-router-dom';
import './App.css';
import Home from '../../pages/home.js';

const App = () =>
	<Router>
		<div>
			<Switch>
				<Route exact path="/" component={Home}/>
			</Switch>
		</div>
	</Router>

export default App;
