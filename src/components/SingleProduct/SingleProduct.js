import React from "react";
import "./SingleProduct.scss";
import { Link } from "react-router-dom";
import { FaCartArrowDown } from "react-icons/fa";



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
        <h3 className="product_name">{name}</h3>
        <p className="product_price">৳ {price} Taka</p>
      </div>
      </Link>
      <div className="cartButton">
      <Link to={`../productDetails/${_id}`} onClick={handleClick}>
        <button> Add Cart <FaCartArrowDown /> </button>
        </Link>
      </div>
    </div>
  );
};

export default SingleProduct;
