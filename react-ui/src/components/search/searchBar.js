import React, {Component} from 'react';

class SearchBar extends Component {

	constructor (props) {
		super(props);
		this.state = {

		}
	}

	handleClick = (e) => {
		e.preventDefault();
		this.setState ({
			visibility: "d-none"
		});
	}

	render() {
		return(
			<div className="input-group mb-3">
			  <input type="text" className="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2"></input>
			  <div className="input-group-append">
			    <button className="btn btn-outline-secondary" type="button">Button</button>
			  </div>
			</div>
		)
	}

}

export default SearchBar;