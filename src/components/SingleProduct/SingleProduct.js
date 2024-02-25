import React from "react";
import "./SingleProduct.scss";
import { Link } from "react-router-dom";

const SingleProduct = ({item}) => {
  let {name, price, image, _id}= item || {}
  const [image1]= image || []

  if (name?.length > 25) {
    name = name.substring(0, 22) + "...";
  }

  const handleClick=()=>{
      window.scrollTo(0, 0);
  }

  return (
    <div className="product_view">
      <Link to={`../productDetails/${_id}`} onClick={handleClick}>
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
