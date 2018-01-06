import React, {Component} from 'react';
import Axios from 'axios';

class AngelProfile extends Component {
	// Setting the component's initial state
	state = {
		username: "",
        companyName: "",
        amountInvesting: "",
        businessBackground: "",
        investingExperience: "",
        silentInvestor: "",
        industryInterest: "",
        netWorth: "",
        accreditedInvestor: "",
        qualitiesCompany: "",
        other: ""
    };

	handleFormSubmit = event => {
		// Preventing the default behavior of the form submit (which is to refresh the page)
		event.preventDefault();
		const {username, companyName, amountInvesting, businessBackground, investingExperience, silentInvestor, industryInterest, netWorth, accreditedInvestor, qualitiesCompany, other} = this.state;
		this.setState({
			username: "",
            companyName: "",
            amountInvesting: "",
            businessBackground: "",
            investingExperience: "",
            silentInvestor: "",
            industryInterest: "",
            netWorth: "",
            accreditedInvestor: "",
            qualitiesCompany: "",
            other: ""
		});

		console.log(username+" "+companyName+" "+amountInvesting+" "+businessBackground+" "+investingExperience+" "+silentInvestor+" "+industryInterest+" "+netWorth+" "+accreditedInvestor+" "+qualitiesCompany+" "+other);
		//Axios Request
		Axios({
		  method: 'post',
		  url: '/api/dashboard/angels',
		  data: {
            "username": username,
            "companyName": companyName,
            "amountInvesting": amountInvesting,
            "businessBackground": businessBackground,
            "investingExperience": investingExperience,
            "silentInvestor": silentInvestor,
            "industryInterest": industryInterest,
            "netWorth": netWorth,
            "accreditedInvestor": accreditedInvestor,
            "qualitiesCompany": qualitiesCompany,
            "other": other
		  }
		}).then(function (response) {
		    /*console.log(response);*/
		    console.log("response");
		  }}
	};

	//RenderTime
	render (props) {
		return (
			<div className="startBox col-10 col-lg-5">
				<div className="row justify-content-center">
					<div className="col-12 mt-2">
						<p>Create Angel Profile</p>
						<hr></hr>
					</div>
				</div>
				<div className="row justify-content-center">
					<div className="col-12">
                        <form className="mb-3">
                            //username
							<div className="form-group">
							  <label htmlFor="username">username</label>
							  <textarea className="form-control" id="username" value={this.state.username} onChange={this.handleInputChange} rows="1"></textarea>
                            </div>
                            //company name
							<div className="form-group">
							  <label htmlFor="companyName">Company Name</label>
							  <textarea className="form-control" id="companyName" value={this.state.companyName} onChange={this.handleInputChange} rows="1"></textarea>
                            </div>
                            //amount Investing
							<div className="form-group">
							  <label htmlFor="amountInvesting">$ Amount Investing</label>
							  <textarea className="form-control" id="amountInvesting" value={this.state.amountInvesting} onChange={this.handleInputChange} rows="1"></textarea>
                            </div>
                            //business Background
							<div className="form-group">
                            <label htmlFor="businessBackground">Personal Business Background</label>
                            <textarea className="form-control" id="businessBackground" value={this.state.businessBackground} onChange={this.handleInputChange} rows="5"></textarea>
                            </div>
                            //investing Experience
							<div className="form-group">
                            <label htmlFor="investingExperience">Investing Experience/History</label>
                            <textarea className="form-control" id="investingExperience" value={this.state.investingExperience} onChange={this.handleInputChange} rows="2"></textarea>
                            </div>
                            //silent Investor
							<div className="form-group">
                            <label htmlFor="silentInvestor">Will You Be Silent Investor</label>
                                <select className="form-control" id="silentInvestor" value={this.state.silentInvestor} onChange={this.handleInputChange}>
                                    <option></option>
                                    <option>Yes</option>
                                    <option>No</option>			    
                                </select>
                             </div>
                            //industry
							<div className="form-group">
                            <label htmlFor="industry">Country</label>
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
                            //net Worth
							<div className="form-group">
                            <label htmlFor="netWorth">$ Net Worth</label>
                            <textarea className="form-control" id="netWorth" value={this.state.netWorth} onChange={this.handleInputChange} rows="5"></textarea>
                            </div>
                            //accredited Investor
							<div className="form-group">
                            <label htmlFor="accreditedInvestor">Are You Accredited Investor</label>
                                <select className="form-control" id="accreditedInvestor" value={this.state.accreditedInvestor} onChange={this.handleInputChange}>
                                    <option></option>
                                    <option>Yes</option>
                                    <option>No</option>			    
                                </select>
                             </div>
                            //qualities Company
                            <div className="form-group">
                            <label htmlFor="qualitiesCompany">Qualities of Company You Want to Invest In</label>
                            <textarea className="form-control" id="qualitiesCompany" value={this.state.qualitiesCompany} onChange={this.handleInputChange} rows="2"></textarea>
                            </div>
                            //other
                            <div className="form-group">
                            <label htmlFor="other">Other Pertinent Information</label>
                            <textarea className="form-control" id="other" value={this.state.other} onChange={this.handleInputChange} rows="1"></textarea>
                            </div>
							<button type="submit" className="btn btn-warning" onClick={this.handleFormSubmit}>Complete Angel Profile</button>
						</form>
					</div>
				</div>
			</div>
		);
	};
};

export default AngelProfile;