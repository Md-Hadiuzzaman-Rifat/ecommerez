import React from "react";
import RelatedProduct from "../RelatedProduct/RelatedProduct";
import Counter from "../Counter/Counter";
import "./ProductDetails.scss"

const ProductDetails = () => {
  return (
    <div className="productDetails">
      <div className="productDetails_container">
        <div className="product_display">
          <div className="display_image">
            <img src="https://webobjects2.cdw.com/is/image/CDW/7202956?$product-main$" alt="" />
          </div>
          <div className="display_content">
              <h2>Pixel 7 Pro</h2>
              <p>500$</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus nesciunt quia earum eaque velit voluptatum nostrum ut quis distinctio deleniti maxime voluptatibus illo neque ex non dolorem laudantium, cupiditate dignissimos officiis dolor id eius iste esse voluptatem. Illum, minus error?</p>
              <Counter></Counter>
          </div>
        </div>
        <div className="product_heading">
            <h2>Related Product:</h2>
        </div>
        <RelatedProduct></RelatedProduct>
      </div>
    </div>
  );
};

export default ProductDetails;
