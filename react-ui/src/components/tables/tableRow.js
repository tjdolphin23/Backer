import React, {Component} from 'react';
import Axios from 'axios';

class TableRow extends Component {
  constructor (props){
    super(props);
  }

  render (props) {
    for (let i=0;i<this.props.product.length;i++) {
      const x = i;
    }
    return(
      <tr>
        <th scope="row">{this.props.x}</th>
        <td><button>STATUS</button></td>
        <td><button>EDIT</button></td>
        <td><button>DELETE</button></td>
      </tr>
    )
  }
}

export default TableRow;