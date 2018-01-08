import React, {Component} from 'react';
import ProjectForm from './projectForm.js';
import ProjectTable from './projectTable.js';

class FounderDash extends Component {

	state = {
		boxVisibility: "",
		projectFormVisibility: "d-none",
		projectTableVisibility: "d-none"
	}

	handleProjectsClick = e => {
		e.preventDefault();
		this.setState({
			boxVisibility: "d-none",
			projectTableVisibility: ""
		})
	}

	handleCreateClick = e => {
		e.preventDefault();
		this.setState({
			boxVisibility: "d-none",
			projectFormVisibility: ""
		})
	}

	render() {
		return (
			<div>
				<div className={`innerDashBox ${this.state.boxVisibility}`}>
					<div className="card col-4 mx-auto">
					  <div className="card-body">
					    <h5 className="card-title">Create Project</h5>
					    <a href="#" className="btn btn-primary" onClick={this.handleCreateClick}>Create</a>
					  </div>
					</div>
					<div className="card col-4 mx-auto">
					  <div className="card-body">
					    <h5 className="card-title">View Projects</h5>
					    <a href="#" className="btn btn-primary" onClick={this.handleProjectsClick}>Projects</a>
					  </div>
					</div>
				</div>
				<div className={this.state.projectFormVisibility}>
					<ProjectForm/>
				</div>
				<div className={this.state.projectTableVisibility}>
					<ProjectTable product="poopoo"/>
				</div>
			</div>
		)
	}
}

export default FounderDash;