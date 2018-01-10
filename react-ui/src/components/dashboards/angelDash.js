import React, {Component} from 'react';
import Axios from 'axios';
import InnerDashBox from '../innerDashBox.js';
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

	axiosSearch = () => {
		const {search} = this.state;
		console.log(search);
		//Axios Request
	  	Axios({
	  	  method: 'post',
	  	  url: '/api/angels/productSearch',
	  	  data: {
	  	    "search": search
	  	  }
	  	}).then(function (response) {
	  		console.log(response)
	  	  })
	  	  .catch(function (error) {
	  	    console.log(error);
	  	    alert("There seems to be a problem. Please try again.");
	  	  });
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
						<SearchBar clickAction={this.axiosSearch}/>	
					</InnerDashBox>
				</div>
			</div>
		)
	}
}

export default AngelDash;