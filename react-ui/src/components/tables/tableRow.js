import React, {Component} from 'react';

class TableRow extends Component {
  constructor (props){
    super(props);
  }

  render (props) {
    return(
      <tbody>
        {this.props.products.map((product) =>
          <tr key={product.productTitle}>
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