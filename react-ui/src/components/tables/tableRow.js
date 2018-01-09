import React, {Component} from 'react';
import Axios from 'axios';

class TableRow extends Component {
  constructor (props){
    super(props);
    console.log(props);
    const products = props.products;
  }

  render (products) {
    return(
      <tbody>
        
      </tbody>
    )
  }
}

export default TableRow;