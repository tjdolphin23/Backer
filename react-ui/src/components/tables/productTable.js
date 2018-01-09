import React from 'react';
import TableRow from './tableRow.js'

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
            <TableRow product={["poopyDiaper", "sloppy"]}/>
          </tbody>
        </table>
    </div>

export default ProductTable;