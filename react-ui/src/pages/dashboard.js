import React from 'react';
import DashNav from '../components/bootstrap/dashNav.js';
import FounderDash from '../components/bootstrap/founderDash.js';
import AngelDash from '../components/bootstrap/angelDash.js';
import Container from '../components/bootstrap/container.js';
import ContainerFluid from '../components/bootstrap/containerFluid.js';
import Title from '../components/bootstrap/title.js';
import JumbotronFluid from '../components/bootstrap/jumbotronFluid.js';
import Foot from '../components/bootstrap/foot.js';

const Dashboard = (props) =>

<div>
	<DashNav/>
	<ContainerFluid css="dashBox">
		<div className="row">
			<div className="col-6 rightBorder text-center">
				<FounderDash/>
			</div>
			<div className="col-6 leftBorder text-center">
				<AngelDash/>
			</div>
		</div>
	</ContainerFluid>
	<ContainerFluid css="foot">
		<Foot/>
	</ContainerFluid>
</div>

export default Dashboard;