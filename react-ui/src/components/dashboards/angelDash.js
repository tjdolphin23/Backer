import React, {Component} from 'react';
import DashCard from '../cards/dashCard.js';
import SearchBar from '../search/searchBar.js';
import AngelSearchResults from '../tables/angelSearchResults.js';
import DetailView from '../tables/detailView.js'

class AngelDash extends Component {

	constructor (props) {
		super(props);
		this.state = {
			buttonsVisible: "",
			searchVisible: "d-none",
			detailVisibility: "d-none",
			detailView: "",
			products: []
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

	detailHandler = () => {
		
	}

	tablePrint = (products) => {
		this.setState(
			{
				products: products
			}
		);
		console.log("inside table print function\n");
	}

	handleReturn = () => {
		this.setState({
			buttonsVisible: "",
			searchVisible: "d-none",
			detailVisibility: "d-none"
		})
	}

	detailHandler = (e) => {
		e.preventDefault();
		this.setState({
			detailVisibility: "",
			searchVisible: "d-none",
			detailView: <DetailView returnAction={this.handleReturn} id={e.target.value}/>
		})
	}

	render () {
		return (
			<div>
				<div className={`row justify-content-center ${this.state.buttonsVisible}`}>
					<div className="col">
						<DashCard title="Find Products" button="Search" clickAction={this.buttonsVisibleHandler}/>
					</div>
					<div className="col">
						<DashCard title="Your Investments" button="View"/>
					</div>
				</div>
				<div className={`row justify-content-center ${this.state.searchVisible}`}>
					<div className="col">
						<SearchBar url="/api/angelDash/searchProducts" returnAction={this.handleReturn} searchResultAction={this.tablePrint}/>
						<AngelSearchResults detailHandler={this.detailHandler} products={this.state.products}/>
					</div>
				</div>
				<div className={`row justify-content-center ${this.state.detailVisibility}`}>
					<div className="col">
						{this.state.detailView}
					</div>
				</div>
			</div>
		)
	}
}

export default AngelDash;