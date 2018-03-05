import React, {Component} from 'react';
import Axios  from 'axios';
import DashCard from '../cards/dashCard.js';
import ProductStart from '../forms/productStart.js';
import ProductTable from '../tables/productTable.js';
import DetailView from '../tables/detailView.js'

class FounderDash extends Component {
	constructor (props) {
		super(props);
		this.state = {
			boxVisibility: "",
			productFormVisibility: "d-none",
			productTableVisibility: "d-none",
			productTable: "",
			productForm: "",
			detailVisibility: "d-none"
		}
	}

	handleProductsClick = e => {
		e.preventDefault();
		const userName = sessionStorage.getItem("userName");
		Axios({
		  method: 'post',
		  url: '/api/founderDash/products',
		  data: {
		    "userName": userName
		  }
		}).then((response) => {
			console.log(response);
			const products = response.data.products;
			this.setState({
				productTable: <ProductTable products={products} returnAction={this.handleReturn} detailHandler={this.detailHandler}/>,
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

	handleCancel = (e) => {
		if(e)e.preventDefault();
		this.setState({
			boxVisibility: "",
			productFormVisibility: "d-none"
		})
	}

	handleReturn = (e) => {
		e.preventDefault();
		this.setState({
			boxVisibility: "",
			productTableVisibility: "d-none",
			detailVisibility: "d-none"
		})
	}

	detailHandler = (e) => {
		e.preventDefault();
		this.setState({
			detailVisibility: "",
			productTableVisibility: "d-none",
			detailView: <DetailView returnAction={this.handleReturn} id={e.target.value} deleteProduct={this.deleteProduct}/>
		})
	}

	deleteProduct = (e) => {
		e.preventDefault();
		Axios({
		  method: 'post',
		  url: '/api/founderDash/deleteProduct',
		  data: {
		    "id": e.target.value
		  }
		}).then((response) => {
			console.log(response);
			this.setState({
				detailVisibility: "d-none",
				boxVisibility: "",
			})
		  })
		  .catch(function (error) {
		    console.log(error);
		    alert(`There seems to be a problem. Please try again. If the problem persists, please contact your local IT administrator.`);
		  });
	}

	render() {
		return (
			<div>
				<div className={`row justify-content-center ${this.state.boxVisibility}`}>
					<div className="col-4 mx-auto">
						<DashCard title="Launch Product" button="Found" clickAction={this.handleCreateClick}/>
					</div>
					<div className="col-4 mx-auto">
						<DashCard title="Your Products" button="View" clickAction={this.handleProductsClick}/>
					</div>
				</div>
				<div className={`row justify-content-center ${this.state.productFormVisibility}`}>
					{this.state.productForm}
				</div>
				<div className={`row justify-content-center ${this.state.productTableVisibility}`}>
					{this.state.productTable}
				</div>
				<div className={`row justify-content-center ${this.state.detailVisibility}`}>
					{this.state.detailView}
				</div>
			</div>
		)
	}
}

export default FounderDash;