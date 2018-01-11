import React, {Component} from 'react';
import InnerDashBox from '../containers/innerDashBox.js';
import DashCard from '../cards/dashCard.js';
import SearchBar from '../search/searchBar.js';
import ProductTable from '../tables/productTable.js';

class AngelDash extends Component {

	constructor (props) {
		super(props);
		this.buttonsVisibleHandler = this.buttonsVisibleHandler.bind(this);
		this.tablePrint = this.tablePrint.bind(this);
		this.state = {
			buttonsVisible: "d-block",
			searchVisible: "d-none",
			table: ""
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
				products: products,
				table: <ProductTable products={products}/>
			}
		);
		console.log("inside table print function\n");
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
					<SearchBar url="/api/angelDash/searchProducts" searchResultAction={this.tablePrint}/>
					{this.state.table}	
				</div>
			</div>
		)
	}
}

export default AngelDash;