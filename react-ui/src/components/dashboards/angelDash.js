import React, {Component} from 'react';
import DashCard from '../cards/dashCard.js';
import SearchBar from '../search/searchBar.js';
import ProductTable from '../tables/productTable.js';

class AngelDash extends Component {

	constructor (props) {
		super(props);
		this.state = {
			buttonsVisible: "",
			searchVisible: "d-none",
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
			searchVisible: "d-none"
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
						<DashCard title="Your Investments" button="View" clickAction={this.buttonsVisibleHandler}/>
					</div>
				</div>
				<div className={`row justify-content-center ${this.state.searchVisible}`}>
					<div className="col">
						<SearchBar url="/api/angelDash/searchProducts" returnAction={this.handleReturn} searchResultAction={this.tablePrint}/>
						<ProductTable products={this.state.products}/>
					</div>
				</div>
			</div>
		)
	}
}

export default AngelDash;