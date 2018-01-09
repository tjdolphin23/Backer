import React, {Component} from 'react';
import Axios from 'axios';

class TableRow extends Component {
  constructor (props){
    super(props);
    console.log(props);
    this.state = {
      products: props.products
    };
  }

  render () {
    return(
      <tbody>
        {this.state.products.map((product) =>
          <tr>
            <th scope="row">{product.productTitle}</th>
            <td>{product.investmentNeeded}</td>
            <td>{product.percentGiving}</td>
            <td><button>Details</button></td>
          </tr>
        )}
      </tbody>
    )
  }
}

export default TableRow;