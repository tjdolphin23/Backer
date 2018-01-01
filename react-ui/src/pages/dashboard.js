import React from 'react';
import DashNav from '../components/bootstrap/dashNav.js';
import Container from '../components/bootstrap/container.js';
import ContainerFluid from '../components/bootstrap/containerFluid.js';
import Title from '../components/bootstrap/title.js';
import JumbotronFluid from '../components/bootstrap/jumbotronFluid.js';
import Foot from '../components/bootstrap/foot.js';

const Dashboard = () =>

<div>
	<DashNav/>
	<Container>
		<div className="row">
			<div className="col-6 border border-left-0 border-top-0 border-bottom-0 border-success text-center">
				<p>Some Text</p>
			</div>
			<div className="col-6 border border-right-0 border-top-0 border-bottom-0 border-success text-center">
				<p>Some Text</p>
			</div>
		</div>
	</Container>
	<ContainerFluid css="foot">
		<Foot/>
	</ContainerFluid>
</div>

export default Dashboard;