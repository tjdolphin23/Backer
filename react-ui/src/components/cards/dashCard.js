import React, {Component} from 'react';

class DashCard extends Component {
	constructor (props) {
		super(props);
	}

	render (props) {
		return (
			<div className="card col-12 col-md-4 mx-auto">
			  <div className="card-body">
			    <h5 className="card-title">{this.props.title}</h5>
			    <a href="#" className="btn btn-primary" onClick={this.props.clickAction}>{this.props.button}</a>
			  </div>
			</div>
		)
	}

}

export default DashCard;