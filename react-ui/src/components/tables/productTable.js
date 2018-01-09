import React from 'react';
import TableRow from './tableRow.js'

const ProductTable = ({products}) =>
    <div>
        <table className="table table-dark">
          <thead>
            <tr>
              <th scope="col">Project</th>
              <th scope="col">$Cash Goal</th>
              <th scope="col">% Offering</th>
              <th scope="col">View/Edit</th>
            </tr>
          </thead>
          <TableRow products={products}/>
        </table>
    </div>

export default ProductTable;