import React, {Component} from 'react';
import InnerDashBox from '../innerDashBox.js';
import DashCard from '../cards/dashCard.js';
import SearchBar from '../search/searchBar.js';

class AngelDash extends Component {

	constructor (props) {
		super(props);
		this.visibleButtonsHandler = this.visibleButtonsHandler.bind(this);
		this.state = {
			buttonsVisible: "d-block",
			searchVisible: "d-none"
		}
	}

	visibleButtonsHandler = () => {
		this.setState(
			{buttonsVisible: "d-none"}
		);
	}

	render () {
		return (
			<div>
				<div className={this.state.buttonVisible}>
					<InnerDashBox>
						<DashCard title="Find Products" button="Search" clickAction={this.visibleButtonsHandler}/>
						<DashCard title="View Investments" button="Investments" clickAction={this.visibleButtonsHandler}/>
					</InnerDashBox>
				</div>
				<div className={this.state.searchVisible}>
					<InnerDashBox>
						<SearchBar/>	
					</InnerDashBox>
				</div>
			</div>
		)
	}
}

export default AngelDash;