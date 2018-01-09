import React from 'react';
import Axios from 'axios';

const ProductTable = ({product}) =>
    <div>
        <table className="table table-dark">
          <thead>
            <tr>
              <th scope="col">Project</th>
              <th scope="col">Status</th>
              <th scope="col">Edit</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>{product}</td>
            </tr>
          </tbody>
        </table>
    </div>

export default ProductTable;