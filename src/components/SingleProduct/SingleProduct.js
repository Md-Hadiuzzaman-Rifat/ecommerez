import React from "react";
import "./SingleProduct.scss";
import { Link } from "react-router-dom";

const SingleProduct = ({item}) => {
  const {name, price, image, _id}= item || {}
  const [image1]= image || []

  return (
    
    <div className="product_view">
      <Link to={`productDetails/${_id}`}>
      <div className="product_img">
        <img
          src={image1}
          alt="product"
        />
      </div>
      <div className="product_description">
        <h3>{name}</h3>
        <p>{price} Taka</p>
      </div>
      </Link>
    </div>
  );
};

export default SingleProduct;
