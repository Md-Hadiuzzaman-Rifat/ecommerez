import React from 'react';
import "./Product.scss"

const Product = () => {
    const product = {
        img: "https://s3.ap-south-1.amazonaws.com/new.mm.catalog/category/578ffae3-b725-4715-bbef-57437ae51fd8.webp",
        price: " $500",
        name: "Zeiss",
      };
      
    return (
            <div className="category_product_content">
              <div className="product_img">
                <img src={product.img} alt="product" />
              </div>
              <div className="product_description">
                <h3>{product.price}</h3>
                <p>{product.name}</p>
              </div>
            </div>
    );
};

export default Product;