import React from 'react';
import "./SingleProduct.scss"
const SingleProduct = () => {
    return (
        <div className="product_view">
        <div className="product_img">
          <img
            src="https://adminapi.applegadgetsbd.com/storage/media/large/3408-55737.jpg"
            alt="product"
          />
        </div>
        <div className="product_description">
          <h3>$500</h3>
          <p>Pixel 7 pro</p>
        </div>
      </div>
    );
};

export default SingleProduct;