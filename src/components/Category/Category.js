import React from "react";
import "./Category.scss"
const arr = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
const product = {
  img: "https://webobjects2.cdw.com/is/image/CDW/7202956?$product-main$",
  price: " $500",
  name: "Pixel 7 pro",
};

const Category = () => {
  return (
    <div className="container">
      <div className="category">
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
