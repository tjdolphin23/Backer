import React, {Component} from 'react';
import Axios from 'axios';

class ProductStart extends Component {
    constructor (props) {
        super(props);
        // Setting the component's initial state
        this.state = {
            productTitle: "",
            companyName: "",
            investmentNeeded: "",
            percentGiving: "",
            productSummary: "",
            problemSolution: "",
            industry: "",
            competition: "",
            marketSize: "",
            marketTrends: "",
            differentiators: "",
            grossSales: "",
            grossCosts: "",
            netProfits: "",
            otherInvestors: "",
            employeeCount: "",
            targetMarket: "",
            salePrice: "",
            costPrice: "",
            features: "",
            productPatent: "",
            other: ""
        };
    };

    handleInputChange = event => {
        const {id, value} = event.target;
        this.setState ({
            [id]:value
        });
    };

	handleFormSubmit = event => {
		// Preventing the default behavior of the form submit (which is to refresh the page)
		event.preventDefault();
        const userName = sessionStorage.getItem("userName");
		const {productTitle, companyName, investmentNeeded, percentGiving, productSummary, problemSolution, industry, competition, marketSize, marketTrends, differentiators, grossSales, grossCosts, netProfits, otherInvestors, employeeCount, targetMarket, salePrice, costPrice, features, productPatent, other, image} = this.state;
        this.setState({
            productTitle: "",
            companyName: "",
            investmentNeeded: "",
            percentGiving: "",
            productSummary: "",
            problemSolution: "",
            industry: "",
            competition: "",
            marketSize: "",
            marketTrends: "",
            differentiators: "",
            grossSales: "",
            grossCosts: "",
            netProfits: "",
            otherInvestors: "",
            employeeCount: "",
            targetMarket: "",
            salePrice: "",
            costPrice: "",
            features: "",
            productPatent: "",
            other: "",
            image: ""
		});
/*		console.log(userName +" "+productTitle+" "+companyName+" "+investmentNeeded+" "+percentGiving+" "+productSummary+" "+problemSolution+" "+industry+" "+competition+" "+marketSize+" "+marketTrends+" "+differentiators+" "+grossSales+" "+grossCosts+" "+netProfits+" "+otherInvestors+" "+employeeCount+" "+targetMarket+" "+salePrice+" "+costPrice+" "+features+" "+productPatent+" "+other+" "+image);*/		//Axios Request
		Axios({
		  method: 'post',
		  url: '/api/founderDash/create',
		  data: {
            "userName": userName,
            "companyName": companyName,
            "investmentNeeded": investmentNeeded,
            "percentGiving": percentGiving,
            "productTitle": productTitle,
            "productSummary": productSummary,
            "problemSolution": problemSolution,
            "industry": industry,
            "competition": competition,
            "marketSize": marketSize,
            "marketTrends": marketTrends,
            "differentiators": differentiators,
            "grossSales": grossSales,
            "grossCosts": grossCosts,
            "netProfits": netProfits,
            "otherInvestors": otherInvestors,
            "employeeCount": employeeCount,
            "targetMarket": targetMarket,
            "salePrice": salePrice,
            "costPrice": costPrice,
            "features": features,
            "productPatent": productPatent,
            "other": other
		  }
		}).then((response) => {
            //Using cancel to return to previous page
		    this.props.handleCancel;
		  })
	};
	//RenderTime
	render () {
		return (
			<div className="startBox col-12 col-12">
				<div className="row justify-content-center">
					<div className="col-12 mt-2">
						<p>Start A Product</p>
						<hr></hr>
					</div>
				</div>
				<div className="row justify-content-center">
					<div className="col-12">
                        <form className="mb-3">
                            <div className="row">
                                <div className="col-6">
        							<div className="form-group">
        							  <label htmlFor="product">Product Title</label>
        							  <input type="text" className="form-control" id="productTitle" value={this.state.productTitle} onChange={this.handleInputChange} rows="1"></input>
                                    </div>
        							<div className="form-group">
        							  <label htmlFor="companyName">Company Name</label>
        							  <input type="text" className="form-control" id="companyName" value={this.state.companyName} onChange={this.handleInputChange} rows="1"></input>
                                    </div>
        							<div className="form-group">
        							  <label htmlFor="investmentNeeded">Investment Amount Needed</label>
        							  <input type="number" className="form-control" id="investmentNeeded" placeholder="enter whole number" value={this.state.investmentNeeded} onChange={this.handleInputChange} rows="1"></input>
                                    </div>
        							<div className="form-group">
                                        <label htmlFor="percentGiving">Percentage of Company Giving Up</label>
                                        <input type="number" className="form-control is-invalid" id="percentGiving" placeholder="enter number only not % symbol" value={this.state.percentGiving} onChange={this.handleInputChange} rows="1"></input>
                                    </div>
        							<div className="form-group">
                                        <label htmlFor="productSummary">Summary of Product</label>
                                        <input type="text" className="form-control" id="productSummary" value={this.state.productSummary} onChange={this.handleInputChange} rows="5"></input>
                                    </div>
        							<div className="form-group">
                                        <label htmlFor="problemSolution">What Problem Does Your Product Solve</label>
                                        <input type="text" className="form-control" id="problemSolution" value={this.state.problemSolution} onChange={this.handleInputChange} rows="5"></input>
                                    </div>
        							<div className="form-group">
        							  <label htmlFor="industry">Industry</label>
        							  <select className="form-control" id="industry" value={this.state.industry} onChange={this.handleInputChange}>
        							  	<option></option>
        							  	<option>Accounting</option>
        							  	<option>Aerospace</option>
        							  	<option>Agriculture</option>
        							  	<option>Apparel/Accessories</option>
                                        <option>Auto</option>
                                        <option>Banking/Financial</option>
        							  	<option>Beauty/Cosmetics </option>
        							  	<option>Construction</option>
                                        <option>Consumer Products</option>
                                        <option>Education</option>
        							  	<option>Food/Beverage</option>
        							  	<option>Health/Fitness</option>
                                        <option>Manufacturing</option>
                                        <option>Medical Devices/Supplies </option>
        							  	<option>Music</option>
        							  	<option>Publishing</option>
                                        <option>Real Estate</option>
                                        <option>Service Industry</option>
        							  	<option>Sports</option>
        							  	<option>Technology</option>
                                        <option>Transportation</option>		
                                        <option>Web Services</option>	
                                        <option>Other</option>			    
        							  </select>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="competition">Top Competitors</label>
                                        <input type="text" className="form-control" id="competition" value={this.state.competition} onChange={this.handleInputChange} rows="1"></input>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="marketSize">Market Size</label>
                                        <input type="text" className="form-control" id="marketSize" value={this.state.marketSize} onChange={this.handleInputChange} rows="1"></input>
                                    </div>
        							<div className="form-group">
                                        <label htmlFor="marketTrends">Market Trends</label>
                                        <input type="text" className="form-control" id="marketTrends" value={this.state.marketTrends} onChange={this.handleInputChange} rows="1"></input>
                                    </div>
        							<div className="form-group">
                                        <label htmlFor="differentiators">Product Differentiators</label>
                                        <input type="text" className="form-control" id="differentiators" value={this.state.differentiators} onChange={this.handleInputChange} rows="1"></input>
                                    </div>
                                </div>
                                <div className="col-6">
        							<div className="form-group">
                                        <label htmlFor="grossSales">$ Current Gross Sales</label>
                                        <input type="number" className="form-control is-invalid" id="grossSales" type="number" value={this.state.grossSales} onChange={this.handleInputChange} rows="1"></input>
                                    </div>
        							<div className="form-group">
                                        <label htmlFor="grossCosts">$ Gross Cost of Product</label>
                                        <input type="number" className="form-control is-invalid" id="grossCosts" type="number" value={this.state.grossCosts} onChange={this.handleInputChange} rows="1"></input>
                                    </div>
                                        <div className="form-group">
                                        <label htmlFor="netProfits">$ Current Net Profit</label>
                                    <input type="number" className="form-control is-invalid" id="netProfits" type="number" value={this.state.netProfits} onChange={this.handleInputChange} rows="1"></input>
                                    </div>
        							<div className="form-group">
                                    <label htmlFor="otherInvestors">Other Investors</label>
                                        <select className="form-control" id="otherInvestors" value={this.state.otherInvestors} onChange={this.handleInputChange}>
                                            <option></option>
                                            <option>Yes</option>
                                            <option>No</option>			    
                                        </select>
                                     </div>
        							<div className="form-group">
                                    <label htmlFor="employeeCount">Number of Employees</label>
                                        <select className="form-control" id="employeeCount" value={this.state.employeeCount} onChange={this.handleInputChange}>
                                            <option></option>
                                            <option>1-2</option>
                                            <option>3-5</option>
                                            <option>6-10</option>
                                            <option>11-19</option>
                                            <option>20-50</option>
                                            <option>51-99</option>
                                            <option>100+</option>			    
                                        </select>
                                     </div>
        							<div className="form-group">
                                        <label htmlFor="targetMarket">Target Market For Your Product</label>
                                        <input type="text" className="form-control" id="targetMarket" value={this.state.targetMarket} onChange={this.handleInputChange} rows="1"></input>
                                    </div>
        							<div className="form-group">
                                        <label htmlFor="salePrice">$ Sales Price</label>
                                        <input type="number" className="form-control is-invalid" id="salePrice" value={this.state.salePrice} onChange={this.handleInputChange} rows="1"></input>
                                    </div>
                                        <div className="form-group">
                                        <label htmlFor="costPrice">$ Cost Price</label>
                                    <input type="number" className="form-control is-invalid" id="costPrice" type="number" value={this.state.costPrice} onChange={this.handleInputChange} rows="1"></input>
                                    </div>
        							<div className="form-group">
                                        <label htmlFor="features">Product Features</label>
                                        <input type="text" className="form-control" id="features" value={this.state.features} onChange={this.handleInputChange} rows="1"></input>
                                    </div>
        							<div className="form-group">
                                    <label htmlFor="productPatent">Product Patent Established</label>
                                        <select className="form-control" id="productPatent" value={this.state.productPatent} onChange={this.handleInputChange}>
                                            <option></option>
                                            <option>Yes</option>
                                            <option>No</option>			    
                                        </select>
                                     </div>
                                    <div className="form-group">
                                        <label htmlFor="other">Other Pertinent Information</label>
                                        <input type="text" className="form-control" id="other" value={this.state.other} onChange={this.handleInputChange} rows="1"></input>
                                    </div>
                                </div>
                            </div>
                            <div className="row justify-content-center">
                                <div className="col-3">
        							<button type="submit" className="btn btn-warning" onClick={this.handleFormSubmit}>Submit Project</button>
                                </div>
                                <div className="col-3">
                                    <button className="btn btn-danger" onClick={this.props.handleCancel}>Cancel</button>
                                </div>
                            </div>
						</form>
					</div>
				</div>
			</div>
		);
	};
};

export default ProductStart;