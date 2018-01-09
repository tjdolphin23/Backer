import React, {Component} from 'react';
import ProductStart from '../forms/productStart.js';
import ProductTable from '../tables/productTable.js';

class FounderDash extends Component {

	state = {
		boxVisibility: "",
		productFormVisibility: "d-none",
		productTableVisibility: "d-none"
	}

	handleProductsClick = e => {
		e.preventDefault();
		this.setState({
			boxVisibility: "d-none",
			productTableVisibility: ""
		})
	}

	handleCreateClick = e => {
		e.preventDefault();
		this.setState({
			boxVisibility: "d-none",
			productFormVisibility: ""
		})
	}

	render() {
		return (
			<div>
				<div className={`innerDashBox ${this.state.boxVisibility}`}>
					<div className="card col-4 mx-auto">
					  <div className="card-body">
					    <h5 className="card-title">Start Product</h5>
					    <a href="#" className="btn btn-primary" onClick={this.handleCreateClick}>Start</a>
					  </div>
					</div>
					<div className="card col-4 mx-auto">
					  <div className="card-body">
					    <h5 className="card-title">View Products</h5>
					    <a href="#" className="btn btn-primary" onClick={this.handleProductsClick}>Products</a>
					  </div>
					</div>
				</div>
				<div className={this.state.productFormVisibility}>
					<ProductStart/>
				</div>
				<div className={this.state.productTableVisibility}>
					<ProductTable product="poopoo"/>
				</div>
			</div>
		)
	}
}

export default FounderDash;