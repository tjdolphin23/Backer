import React, {Component} from 'react';
import DashNav from '../components/bootstrap/dashNav.js';
import FounderDash from '../components/bootstrap/founderDash.js';
import AngelDash from '../components/bootstrap/angelDash.js';
import Container from '../components/bootstrap/container.js';
import ContainerFluid from '../components/bootstrap/containerFluid.js';
import Title from '../components/bootstrap/title.js';
import JumbotronFluid from '../components/bootstrap/jumbotronFluid.js';
import Foot from '../components/bootstrap/foot.js';

class Dashboard extends Component {

	state = {
		angelDisplay: "d-block",
		founderDisplay: "d-block",
		columnsFounder: "col-6",
		columnsAngel: "col-6",
		colexFounder: "collapse-left",
		colexAngel: "collapse-right",
		angelNavLabel: " Hide My Investments",
		founderNavLabel: " Hide My Projects"
	}

	handleCollapseFounder = () => {
		if(this.state.columnsFounder === "col-6"){
			this.setState ({
				founderDisplay: "d-none",
				columnsAngel: "col-12",
				angelNavLabel: " View My Projects"
			})
		}
		else{
			this.setState ({
				founderDisplay: "d-block",
				angelDisplay: "d-block",
				columnsFounder: "col-6",
				founderNavLabel: " Hide My Projects"
			})
		}
	}

	handleCollapseAngel = () => {
		if(this.state.columnsAngel === "col-6"){
			this.setState ({
				angelDisplay: "d-none",
				columnsFounder: "col-12",
				founderNavLabel: " View My Investments"
			})
		}
		else{
			this.setState ({
				angelDisplay: "d-block",
				founderDisplay: "d-block",
				columnsAngel: "col-6",
				angelNavLabel: " Hide My Investments"
			})
		}
	}

	render(){
		return(
			<div>
				<DashNav/>
				<ContainerFluid css="dashBox">
					<div className="row">
						<div className={`${this.state.columnsFounder} rightBorder text-center ${this.state.founderDisplay}`} id="fSection">
							<FounderDash/>
							<span className={`oi oi-${this.state.colexFounder} nav-link`} onClick={this.handleCollapseFounder} title="colex left" aria-hidden="true"></span>{this.state.founderNavLabel}
						</div>
						<div className={`${this.state.columnsAngel} leftBorder text-center ${this.state.angelDisplay}`} id="aSection">
							<AngelDash/>
							{this.state.angelNavLabel}<span className={`oi oi-${this.state.colexAngel} nav-link`} onClick={this.handleCollapseAngel} title="colex right" aria-hidden="true"></span>
						</div>
					</div>
				</ContainerFluid>
				<ContainerFluid css="foot">
					<Foot/>
				</ContainerFluid>
			</div>
		)
	}
}

export default Dashboard;