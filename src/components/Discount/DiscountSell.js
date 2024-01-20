import React from "react";
import SingleProduct from "../SingleProduct/SingleProduct";
import "./DiscountSell.scss"

const arr = [1, 2, 3, 4, 5, 6];

const DiscountSell = () => {
  return (
    <div className="discountSell">
      <div className="container">
        <h2>Discount Product</h2>
        <div className="discount_product">
          {arr.map(item => (
            <SingleProduct className="discount_product_item" key={item}></SingleProduct>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DiscountSell;
