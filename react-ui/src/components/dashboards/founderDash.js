import React, {Component} from 'react';
import Axios  from 'axios';
import DashCard from '../cards/dashCard.js';
import ProductStart from '../forms/productStart.js';
import ProductTable from '../tables/productTable.js';

class FounderDash extends Component {
	constructor (props) {
		super(props);
		this.state = {
			boxVisibility: "",
			productFormVisibility: "d-none",
			productTableVisibility: "d-none",
			productTable: "",
			productForm: ""
		}
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
			productFormVisibility: "",
			productForm: <ProductStart handleCancel={this.handleCancel}/>
		})
	}

	handleCancel = () => {
		this.setState({
			boxVisibility: "",
			productFormVisibility: "d-none"
		})
	}

	render() {
		return (
			<div>
				<div className={`row justify-content-center ${this.state.boxVisibility}`}>
					<div className="col">
						<DashCard title="Launch Product" button="Found" clickAction={this.handleCreateClick}/>
					</div>
					<div className="col">
						<DashCard title="Your Products" button="View" clickAction={this.handleProductsClick}/>
					</div>
				</div>
				<div className={`row justify-content-center ${this.state.productFormVisibility}`}>
					{this.state.productForm}
				</div>
				<div className={`row justify-content-center ${this.state.productTableVisibility}`}>
					{this.state.productTable}
				</div>
			</div>
		)
	}
}

export default FounderDash;