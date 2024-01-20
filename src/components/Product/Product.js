import React from 'react';
import "./Product.scss"
import { Link, useParams } from 'react-router-dom';

const Product = ({product}) => {
  const {_id}=product
  
  let {name}=product
  if (name?.length > 25) {
    name = name.substring(0, 34) + "...";
  }

    return (
            <div className="category_product_content">
              <Link to={`/productDetails/${_id}`}>
              <div className="product_img">
                <img src={product.image} alt="product" />
              </div>
              <div className="product_description">
                <h3>{product.price}</h3>
                <p>{name}</p>
              </div>
              </Link>
            </div>
    );
};

export default Product;