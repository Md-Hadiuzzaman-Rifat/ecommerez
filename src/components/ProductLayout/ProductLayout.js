import React from "react";
import "./ProductLayout.scss";
import Product from "../Product/Product";
const arr = [1, 1, 1, 1, 1, 1];

const ProductLayout = () => {
  return (
    <div className="productLayout">
      <div className="container">
        <div className="productLayout_heading">
          <h2>Product List: </h2>
        </div>
        <div className="productLayout_product">
          {arr.map(() => (
            <Product/>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductLayout;
