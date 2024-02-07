import React from "react";
import ".//Practice.scss";
import { Link } from "react-router-dom";

const Practice = ({product}) => {
  let {image, name, price, discount, _id}= product || {}
  const [image1, image2]= image || []

  if (name?.length > 25) {
    name = name.substring(0, 22) + "...";
  }
  return (
    <div className="Practice">
    <Link to={`productDetails/${_id}`}>
        <div className="image">
           <span>Winter Sale</span>
          <img
            src={image1}
            alt=""
            className="mainImg"
          />
          <img
            src={image2}
            alt=""
            className="secondImg"
          />
        </div>
        <h2>{name}</h2>
        <div className="prices">
          <h3>Original Price: {price}</h3>
          <h3>After Discount:{Math.floor((discount))}</h3>
        </div>
    </Link>
    </div>
  );
};

export default Practice;