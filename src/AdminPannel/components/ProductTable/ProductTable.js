import React from "react";

import "./ProductTable.scss";
import { useGetProductsQuery } from "../../../features/product/productApi";
import TableBody from "../TableBody/TableBody";

const ProductTable = () => {
  const {data}=useGetProductsQuery()
  console.log(data);
  return (
    <div className="productTable">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Category</th>
            <th>Price</th>
            <th>Discount</th>
            <th>Image</th>
            <th>Action</th>
          </tr>
        </thead>
        {/* // table body  */}
        <tbody>
          <TableBody></TableBody>
        </tbody>
      </table>
    </div>
  );
};

export default ProductTable;
