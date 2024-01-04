import React from "react";
import "./Category.scss";
const arr = [1, 1, 1, 1, 1, 1];
const product = {
  img: "https://s3.ap-south-1.amazonaws.com/new.mm.catalog/category/578ffae3-b725-4715-bbef-57437ae51fd8.webp",
  price: " $500",
  name: "Zeiss",
};

const Category = () => {
  return (
    <div className="category">
      <div className="container">
        <div className="category_heading">
          <h2>Product List: </h2>
        </div>
        <div className="category_product">
          {arr.map(() => (
            <div className="category_product_content">
              <div className="product_img">
                <img src={product.img} alt="product" />
              </div>
              <div className="product_description">
                <h3>{product.price}</h3>
                <p>{product.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Category;
