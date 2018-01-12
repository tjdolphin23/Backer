import React, {Component} from 'react';
import TableRow from './tableRow.js'

class ProductTable extends Component {
  constructor(props){
    super(props);
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
                <th scope="col">View</th>
              </tr>
            </thead>
            <TableRow products={this.props.products} detailHandler={this.props.detailHandler}/>
          </table>
          <button className="btn btn-danger" onClick={this.props.returnAction}>Return</button>
      </div>
    )
  }
}

export default ProductTable;