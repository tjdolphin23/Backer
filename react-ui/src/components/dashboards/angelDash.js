import React, {Component} from 'react';
import InnerDashBox from '../containers/innerDashBox.js';
import DashCard from '../cards/dashCard.js';
import SearchBar from '../search/searchBar.js';

class AngelDash extends Component {

	constructor (props) {
		super(props);
		this.buttonsVisibleHandler = this.buttonsVisibleHandler.bind(this);
		this.state = {
			buttonsVisible: "d-block",
			searchVisible: "d-none"
		}
	}

	buttonsVisibleHandler = () => {
		this.setState(
			{
				buttonsVisible: "d-none",
				searchVisible: "d-block"
			}
		);
	}

	render () {
		return (
			<div>
				<div className={this.state.buttonsVisible}>
					<InnerDashBox>
						<DashCard title="Find Products" button="Search" clickAction={this.buttonsVisibleHandler}/>
						<DashCard title="View Investments" button="Investments" clickAction={this.buttonsVisibleHandler}/>
					</InnerDashBox>
				</div>
				<div className={this.state.searchVisible}>
					<InnerDashBox>
						<SearchBar url="/api/angelDash/searchProducts"/>	
					</InnerDashBox>
				</div>
			</div>
		)
	}
}

export default AngelDash;