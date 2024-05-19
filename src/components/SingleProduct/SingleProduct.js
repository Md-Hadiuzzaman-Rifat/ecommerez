import React from "react";
import "./SingleProduct.scss";
import { Link } from "react-router-dom";
import { FaCartArrowDown } from "react-icons/fa";


const SingleProduct = ({item}) => {
  
  let {name, price, discount}= item?.description || {}
  const {images, _id}=item || {}
  

  if (name?.length > 17) {
    name = name.substring(0, 14) + "...";
  }

  const handleClick=()=>{
      window.scrollTo(0, 0);
  }

  return (
    <div className="product_view">
      <Link to={`../productDetails/${_id}`} onClick={handleClick}>
      <div className="product_img">
        {/* <img
          src={image1}
          alt="product"
        /> */}
        <img 
        src={`http://localhost:25000/Images/${images[0]?.filename}`}
        alt="" />
      </div>
      <div className="product_description">
        <h3 className="product_name">{name}</h3>
        <p className="product_regular">Regular Price: {price} ৳ </p>
        
        <p className="product_price"> <span>Offer Price : </span>  {Math.floor((price-discount))} Taka</p>
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
