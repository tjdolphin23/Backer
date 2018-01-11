import React, {Component} from 'react';
import DashNav from '../components/navbars/dashNav.js';
import FounderDash from '../components/dashboards/founderDash.js';
import AngelDash from '../components/dashboards/angelDash.js';
import Container from '../components/containers/container.js';
import ContainerFluid from '../components/containers/containerFluid.js';
import Title from '../components/title/title.js';
import JumbotronFluid from '../components/containers/jumbotronFluid.js';
import Foot from '../components/footer/foot.js';

class Dashboard extends Component {

	state = {
		angelDisplay: "d-block",
		founderDisplay: "d-block",
		columnsFounder: "col-6",
		columnsAngel: "col-6",
		colexFounder: "collapse-left",
		colexAngel: "collapse-right",
		angelNavLabel: "Hide My Investments ",
		founderNavLabel: " Hide My Projects"
	}

	handleCollapseFounder = () => {
		if(this.state.columnsFounder === "col-6"){
			this.setState ({
				founderDisplay: "d-none",
				columnsAngel: "col-12",
				angelNavLabel: " View My Projects "
			})
		}
		else{
			this.setState ({
				founderDisplay: "d-block",
				angelDisplay: "d-block",
				columnsFounder: "col-6",
				founderNavLabel: " Hide My Projects "
			})
		}
	}

	handleCollapseAngel = () => {
		if(this.state.columnsAngel === "col-6"){
			this.setState ({
				angelDisplay: "d-none",
				columnsFounder: "col-12",
				founderNavLabel: " View My Investments "
			})
		}
		else{
			this.setState ({
				angelDisplay: "d-block",
				founderDisplay: "d-block",
				columnsAngel: "col-6",
				angelNavLabel: " Hide My Investments "
			})
		}
	}

	render(){
		return(
			<div>
				<DashNav/>
				<div className="container-fluid">
				<div className="row align-items-center dashSpace">
					<div className={`${this.state.columnsFounder} ${this.state.founderDisplay} borderRight`} id="fSection">
						<div className="row justify-content-center"><h1>Founder</h1></div>
						<hr></hr>
						<FounderDash/>
						<hr></hr>
						<div className="row justify-content-center">
							<button className="btn colBtn" onClick={this.handleCollapseFounder}><span className={`oi oi-${this.state.colexFounder}`} title="colex left" aria-hidden="true"></span>{this.state.founderNavLabel}</button>
						</div>
					</div>
					<div className={`${this.state.columnsAngel} ${this.state.angelDisplay} borderLeft`} id="aSection">
						<div className="row justify-content-center"><h1>Angel</h1></div>
						<hr></hr>
						<AngelDash/>
						<hr></hr>
						<div className="row justify-content-center">
							<button className="btn colBtn" onClick={this.handleCollapseAngel}>{this.state.angelNavLabel}<span className={`oi oi-${this.state.colexAngel}`} title="colex right" aria-hidden="true"></span></button>
						</div>
					</div>
				</div>
				</div>
				<ContainerFluid css="foot">
					<Foot/>
				</ContainerFluid>
			</div>
		)
	}
}

export default Dashboard;