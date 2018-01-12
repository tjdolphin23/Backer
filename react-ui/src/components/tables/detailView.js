import React, {Component} from 'react';
import Axios from 'axios';

class ProductTable extends Component {
  constructor(props){
    super(props);
    this.state = {
        userName: "",
        id: "",
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
    }
  }

  componentDidMount (props) {
    Axios({
      method: 'post',
      url: '/api/productDetails',
      data: {
        id: this.props.id
      }
    }).then((response) => {
        console.log(response);
        this.setState({
          userName: response.data.product.userName,
          id: response.data.product.id,
          companyName: response.data.product.companyName,
          investmentNeeded: response.data.product.investmentNeeded,
          percentGiving: response.data.product.percentGiving,
          productTitle: response.data.product.productTitle,
          productSummary: response.data.product.productSummary,
          problemSolution: response.data.product.problemSolution,
          industry: response.data.product.industry,
          competition: response.data.product.competition,
          marketSize: response.data.product.marketSize,
          marketTrends: response.data.product.marketTrends,
          differentiators: response.data.product.differentiators,
          grossSales: response.data.product.grossSales,
          grossCosts: response.data.product.grossCosts,
          netProfits: response.data.product.netProfits,
          otherInvestors: response.data.product.otherInvestors,
          employeeCount: response.data.product.employeeCount,
          targetMarket: response.data.product.targetMarket,
          salePrice: response.data.product.salePrice,
          costPrice: response.data.product.costPrice,
          features: response.data.product.features,
          productPatent: response.data.product.productPatent,
          other: response.data.product.other
        })
      })
  }

  render(props){
    return(
      <div>
          <table className="table table-dark">
            <thead>
              <tr>
                <th scope="col">Product</th>
                <th scope="col">$ Cash Goal</th>
                <th scope="col">% Offering</th>
                <th scope="col">Industry</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">{this.state.productTitle}</th>
                <td>{this.state.investmentNeeded}</td>
                <td>{this.state.percentGiving}</td>
                <td>{this.state.industry}</td>
              </tr>
            </tbody>
            <thead>
              <tr>
                <th scope="col">Gross Sales</th>
                <th scope="col">Gross Costs</th>
                <th scope="col">Net Profit</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">{this.state.grossSales}</th>
                <td>{this.state.grossCosts}</td>
                <td>{this.state.netProfits}</td>
              </tr>
            </tbody>
            <thead>
              <tr>
                <th scope="col">Product Summary</th>
                <th scope="col">Problem/Solution</th>
                <th scope="col">Product Sale Price</th>
                <th scope="col">Product Cost</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">{this.state.productSummary}</th>
                <td>{this.state.problemSolution}</td>
                <td>{this.state.salePrice}</td>
                <td>{this.state.costPrice}</td>
              </tr>
            </tbody>
            <thead>
              <tr>
                <th scope="col">Target Market</th>
                <th scope="col">Market Size</th>
                <th scope="col">Market Trends</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">{this.state.targetMarket}</th>
                <td>{this.state.marketSize}</td>
                <td>{this.state.marketTrends}</td>
              </tr>
            </tbody>
            <thead>
              <tr>
                <th scope="col">Competition</th>
                <th scope="col">Differentiators</th>
                <th scope="col">Features</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">{this.state.competition}</th>
                <td>{this.state.differentiators}</td>
                <td>{this.state.features}</td>
              </tr>
            </tbody>
            <thead>
              <tr>
                <th scope="col">Company</th>
                <th scope="col">Employees</th>
                <th scope="col">Other</th>
                <th scope="col">Founder</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">{this.state.companyName}</th>
                <td>{this.state.employeeCount}</td>
                <td>{this.state.other}</td>
                <td>{this.state.userName}</td>
              </tr>
            </tbody>
          </table>
          <div className="row">
            <div className="col">
              <button className="btn btn-secondary" onClick={this.props.returnAction}>Return</button>
            </div>
            {
              (this.state.userName===sessionStorage.getItem("userName")) ?
                <div>
                  <div className="col mx-auto">
                    <button className="btn btn-warning mr-5">EDIT</button>
                    <button className="btn btn-danger ml-5" value={this.state.id} onClick={this.props.deleteProduct}>Delete</button>
                  </div>
                </div>
              : <div className="col mx-auto">
                  <button className="btn btn-success">Become {this.state.productTitle}'s Angel</button>
                </div>
            }
          </div>
      </div>
    )
  }
}

export default ProductTable;