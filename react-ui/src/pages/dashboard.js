import React from 'react';
import DashNav from '../components/bootstrap/dashNav.js';
import FounderDash from '../components/bootstrap/founderDash.js';
import AngelDash from '../components/bootstrap/angelDash.js';
import Container from '../components/bootstrap/container.js';
import ContainerFluid from '../components/bootstrap/containerFluid.js';
import Title from '../components/bootstrap/title.js';
import JumbotronFluid from '../components/bootstrap/jumbotronFluid.js';
import Foot from '../components/bootstrap/foot.js';

const Dashboard = () =>

<div>
	<DashNav/>
	<ContainerFluid css="fullHeight">
		<div className="row">
			<div className="col-6 border border-left-0 border-top-0 border-bottom-0 border-warning text-center">
				<FounderDash/>
			</div>
			<div className="col-6 border border-right-0 border-top-0 border-bottom-0 border-warning text-center">
				<AngelDash/>
			</div>
		</div>
	</ContainerFluid>
	<ContainerFluid css="foot">
		<Foot/>
	</ContainerFluid>
</div>

export default Dashboard;