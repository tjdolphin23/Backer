import React, {Component} from 'react';

class SearchBar extends Component {

	constructor (props) {
		super(props);
		this.state = {
			search: ""
		};
	}

	changeHandler = event => {
		const {id, value} = event.target;
		this.setState ({
			[id]:value
		});
	};

	handleClick = (e) => {
		e.preventDefault();
		this.setState ({
			visibility: "d-none"
		});
	}

	render(props) {
		return(
			<div className="input-group mb-3">
			  <input type="text" className="form-control" id="search" placeholder="Find a product..." aria-label="Recipient's username" aria-describedby="basic-addon2" value={this.state.search} onChange={this.changeHandler}></input>
			  <div className="input-group-append">
			    <button className="btn btn-secondary" type="button" onClick={this.props.clickAction}>Search</button>
			  </div>
			</div>
		)
	}

}

export default SearchBar;