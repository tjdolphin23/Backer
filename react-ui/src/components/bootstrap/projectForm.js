import React, {Component} from 'react';
import Axios from 'axios';

class ProjectForm extends Component {
	// Setting the component's initial state
	state = {
        productName: "",
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
        numberEmployees: "",
        targetMarket: "",
        salePrice: "",
        costPrice: "",
        features: "",
        productPatent: "",
        other: "",
        image: ""
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
		const {productName, companyName, investmentNeeded, percentGiving, productSummary, problemSolution, industry, competition, marketSize, marketTrends, differentiators, grossSales, grossCosts, netProfits, otherInvestors, numberEmployees, targetMarket, salePrice, costPrice, features, productPatent, other, image} = this.state;
		this.setState({
            productName: "",
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
            numberEmployees: "",
            targetMarket: "",
            salePrice: "",
            costPrice: "",
            features: "",
            productPatent: "",
            other: "",
            image: ""
		});

		console.log(productName+" "+companyName+" "+investmentNeeded+" "+percentGiving+" "+productSummary+" "+problemSolution+" "+industry+" "+competition+" "+marketSize+" "+marketTrends+" "+differentiators+" "+grossSales+" "+grossCosts+" "+netProfits+" "+otherInvestors+" "+numberEmployees+" "+targetMarket+" "+salePrice+" "+costPrice+" "+features+" "+productPatent+" "+other+" "+image);
		//Axios Request
		Axios({
		  method: 'post',
		  url: '/api/founderDash/create',
		  data: {
            "username": sessionStorage.getItem("userName"),
            "companyName": companyName,
            "investmentNeeded": investmentNeeded,
            "percentGiving": percentGiving,
            "product": productName,
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
            "numberEmployees": numberEmployees,
            "targetMarket": targetMarket,
            "salePrice": salePrice,
            "costPrice": costPrice,
            "features": features,
            "productPatent": productPatent,
            "other": other
		  }
		}).then(function (response) {
		    console.log(response);
		  })
	};
	//RenderTime
	render () {
		return (
			<div className="startBox col-12 col-12">
				<div className="row justify-content-center">
					<div className="col-12 mt-2">
						<p>Create A Project</p>
						<hr></hr>
					</div>
				</div>
				<div className="row justify-content-center">
					<div className="col-12">
                        <form className="mb-3">
                            <div className="row">
                                <div className="col-6">
        							<div className="form-group">
        							  <label htmlFor="product">Product</label>
        							  <textarea className="form-control" id="product" value={this.state.product} onChange={this.handleInputChange} rows="1"></textarea>
                                    </div>
        							<div className="form-group">
        							  <label htmlFor="companyName">Company Name</label>
        							  <textarea className="form-control" id="companyName" value={this.state.companyName} onChange={this.handleInputChange} rows="1"></textarea>
                                    </div>
        							<div className="form-group">
        							  <label htmlFor="investmentNeeded">Investment Amount Needed</label>
        							  <textarea className="form-control" id="investmentNeeded" value={this.state.investmentNeeded} onChange={this.handleInputChange} rows="1"></textarea>
                                    </div>
        							<div className="form-group">
                                    <label htmlFor="percentGiving">Percentage of Company Giving Up</label>
                                    <textarea className="form-control" id="percentGiving" value={this.state.percentGiving} onChange={this.handleInputChange} rows="1"></textarea>
                                    </div>
        							<div className="form-group">
                                    <label htmlFor="productSummary">Summary of Product</label>
                                    <textarea className="form-control" id="productSummary" value={this.state.productSummary} onChange={this.handleInputChange} rows="5"></textarea>
                                    </div>
        							<div className="form-group">
                                    <label htmlFor="problemSolution">What Problem Does Your Product Solve</label>
                                    <textarea className="form-control" id="problemSolution" value={this.state.problemSolution} onChange={this.handleInputChange} rows="5"></textarea>
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
                                    <textarea className="form-control" id="competition" value={this.state.competition} onChange={this.handleInputChange} rows="1"></textarea>
                                    </div>
                                    <div className="form-group">
                                    <label htmlFor="marketSize">Market Size</label>
                                    <textarea className="form-control" id="marketSize" value={this.state.marketSize} onChange={this.handleInputChange} rows="1"></textarea>
                                    </div>
        							<div className="form-group">
                                    <label htmlFor="marketTrends">Market Trends</label>
                                    <textarea className="form-control" id="marketTrends" value={this.state.marketTrends} onChange={this.handleInputChange} rows="1"></textarea>
                                    </div>
                                </div>
                                <div className="col-6">
        							<div className="form-group">
                                    <label htmlFor="differentiators">Product Defferentiators</label>
                                    <textarea className="form-control" id="differentiators" value={this.state.differentiators} onChange={this.handleInputChange} rows="1"></textarea>
                                    </div>
        							<div className="form-group">
                                    <label htmlFor="grossSales">$ Current Gross Sales</label>
                                    <textarea className="form-control" id="grossSales" value={this.state.grossSales} onChange={this.handleInputChange} rows="1"></textarea>
                                    </div>
        							<div className="form-group">
                                    <label htmlFor="grossCosts">$ Gross Cost of Product</label>
                                    <textarea className="form-control" id="grossCosts" value={this.state.grossCosts} onChange={this.handleInputChange} rows="1"></textarea>
                                    </div>
        							<div className="form-group">
                                    <label htmlFor="netProfits">$ Current Net Profit</label>
                                    <textarea className="form-control" id="netProfits" value={this.state.netProfits} onChange={this.handleInputChange} rows="1"></textarea>
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
                                    <label htmlFor="numberEmployees">Number of Employees</label>
                                        <select className="form-control" id="numberEmployees" value={this.state.numberEmployees} onChange={this.handleInputChange}>
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
                                    <textarea className="form-control" id="targetMarket" value={this.state.targetMarket} onChange={this.handleInputChange} rows="1"></textarea>
                                    </div>
        							<div className="form-group">
                                    <label htmlFor="salePrice">$ Sales Price</label>
                                    <textarea className="form-control" id="salePrice" value={this.state.salePrice} onChange={this.handleInputChange} rows="1"></textarea>
                                    </div>
        							<div className="form-group">
                                    <label htmlFor="costPrice">$ Cost Price</label>
                                    <textarea className="form-control" id="costPrice" value={this.state.costPrice} onChange={this.handleInputChange} rows="1"></textarea>
                                    </div>
        							<div className="form-group">
                                    <label htmlFor="features">Product Features</label>
                                    <textarea className="form-control" id="features" value={this.state.features} onChange={this.handleInputChange} rows="1"></textarea>
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
                                    <textarea className="form-control" id="other" value={this.state.other} onChange={this.handleInputChange} rows="1"></textarea>
                                    </div>
                                </div>
                            </div>
							<button type="submit" className="btn btn-warning" onClick={this.handleFormSubmit}>Submit Project</button>
						</form>
					</div>
				</div>
			</div>
		);
	};
};

export default ProjectForm;