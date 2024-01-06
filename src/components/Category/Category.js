import React from "react";
import "./Category.scss";
import Product from "../Product/Product";
const arr = [1, 1, 1, 1, 1, 1];


const Category = () => {
  return (
    <div className="category">
      <div className="container">
        <div className="category_heading">
          <h2>Product List: </h2>
        </div>
        <div className="category_product">
          {arr.map(item => (
            <Product key={item.keys}/>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Category;
