import React from 'react';
import TableRow from './tableRow.js'

const ProductTable = ({products}) =>
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
          <TableRow products={products}/>
        </table>
    </div>

export default ProductTable;