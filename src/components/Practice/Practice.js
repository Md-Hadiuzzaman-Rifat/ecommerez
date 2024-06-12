import React from "react";
import ".//Practice.scss";
import { Link } from "react-router-dom";

const Practice = ({product}) => {
  
  let {name, price, discount}= product?.description || {}
  const {images, _id}= product || {}
 

  if (name?.length > 15) {
    name = name.substring(0, 12) + "...";
  }
  const firstImage= `https://backend.thespectacle23.com/images/${images[0]?.filename}`

  const secondImage= images?.length > 1 ? `https://backend.thespectacle23.com/images/${images[1]?.filename}`: `https://backend.thespectacle23.com/images/${images[0]?.filename}`


  return (
    <div className="Practice">
    <Link to={`productDetails/${_id}`}>
        <div className="image">
           <span>Most Selling</span>
          <img
            src={firstImage}
            alt="" 
            className="mainImg"
          />
          <img
            rc={secondImage}
            alt=""
            className="secondImg"
          />
        </div>
        <h3>{name}</h3>
        <div className="prices">
          <p className="original">Original Price: {price} Taka</p>
          <p style={{color:"gray", fontWeight:500}}>After Discount: {Math.floor((price-discount))} Taka</p>
        </div>
    </Link>
    </div>
  );
};

export default Practice;