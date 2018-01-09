import React, {Component} from 'react';
import Axios  from 'axios';
import ProductStart from '../forms/productStart.js';
import ProductTable from '../tables/productTable.js';

class FounderDash extends Component {

	state = {
		boxVisibility: "",
		productFormVisibility: "d-none",
		productTableVisibility: "d-none",
		productTable: ""
	}

	handleProductsClick = e => {
		e.preventDefault();
		const self=this;
		const userName = sessionStorage.getItem("userName");
		Axios({
		  method: 'post',
		  url: '/api/founderDash/products',
		  data: {
		    "userName": userName
		  }
		}).then(function (response) {
			console.log(response);
			const products = response.data.products;
			self.setState({
				productTable: <ProductTable products={products}/>,
				boxVisibility: "d-none",
				productTableVisibility: ""
			})
		  })
		  .catch(function (error) {
		    console.log(error);
		    alert(`There seems to be a problem. Please try again. If the problem persists, please contact your local IT administrator.`);
		  });
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
					{this.state.productTable}
				</div>
			</div>
		)
	}
}

export default FounderDash;