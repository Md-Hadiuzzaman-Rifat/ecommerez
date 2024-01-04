import React from "react";
import SingleProduct from "../SingleProduct/SingleProduct";
import "./DiscountSell.scss"

const arr = [1, 1, 1, 1, 1, 1];

const DiscountSell = () => {
  return (
    <div className="discountSell">
      <div className="container">
        <h2>Discount Product</h2>
        <div className="discount_product">
          {arr.map((item) => (
            <SingleProduct className="discount_product_item" key={item.keys}></SingleProduct>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DiscountSell;
