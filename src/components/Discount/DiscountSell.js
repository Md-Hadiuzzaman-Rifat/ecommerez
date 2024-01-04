import React from "react";
import SingleProduct from "../SingleProduct/SingleProduct";
import "./DiscountSell.scss"

const arr = [1, 1, 1, 1, 1, 1];

const DiscountSell = () => {
  return (
    <div className="DiscountSell">
      <div className="container">
        <div>
          {arr.map((item) => (
            <SingleProduct key={item.keys}></SingleProduct>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DiscountSell;
