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
		leftDisplay: "d-block",
		rightDisplay: "d-block",
		columns: "col-6",
		colexLeft: "collapse-left",
		colexRight: "collapse-right"
	}

	handleCollapseLeft = () => {
		if(this.state.columns === "col-6"){
			this.setState ({
				leftDisplay: "d-none",
				columns: "col-12"
			})
		}
		else{
			this.setState ({
				leftDisplay: "d-block",
				rightDisplay: "d-block",
				columns: "col-6"

			})
		}
	}

	handleCollapseRight = () => {
		if(this.state.columns === "col-6"){
			this.setState ({
				rightDisplay: "d-none",
				columns: "col-12"
			})
		}
		else{
			this.setState ({
				rightDisplay: "d-block",
				leftDisplay: "d-block",
				columns: "col-6"
			})
		}
	}

	render(){
		return(
			<div>
				<DashNav/>
				<ContainerFluid css="dashBox">
					<div className="row">
						<div className={`${this.state.columns} rightBorder text-center ${this.state.leftDisplay}`} id="fSection">
							<FounderDash/>
							<span className={`oi oi-${this.state.colexLeft} nav-link`} onClick={this.handleCollapseLeft} title="colex left" aria-hidden="true"></span>
						</div>
						<div className={`${this.state.columns} lefttBorder text-center ${this.state.rightDisplay}`} id="aSection">
							<AngelDash/>
							<span className={`oi oi-${this.state.colexRight} nav-link`} onClick={this.handleCollapseRight} title="colex right" aria-hidden="true"></span>
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