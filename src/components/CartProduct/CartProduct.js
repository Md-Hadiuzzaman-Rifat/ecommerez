import React from "react";
import "./CartProduct.scss";
import Counter from "../Counter/Counter";
import Button from "../Button/Button";
const CartProduct = () => {
  return (
    <div className="cart_slider">
      <div className="cart_container">
        <div className="cart_product_image">
          <img
            src="https://webobjects2.cdw.com/is/image/CDW/7202956?$product-main$"
            alt=""
          />
        </div>
        <div className="cart_product_details">
          <h4>Product Name</h4>
          <div>
            <Counter></Counter>
          </div>
          <h5>3 x 400$ </h5>
        </div>
      </div>
      <div className="cart_subtotal">
        <h3>SUBTOTAL: </h3> <h3>500$</h3>
      </div>
      <div className="cart_btn">
        <Button>Checkout</Button>
      </div>
    </div>
  );
};

export default CartProduct;
