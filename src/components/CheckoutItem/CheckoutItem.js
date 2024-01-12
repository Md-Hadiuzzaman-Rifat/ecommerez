import React from "react";
import "./CheckoutItem.scss";
import Counter from "../Counter/Counter";
import CartItem from "../CartItem/CartItem";

const CheckoutItem = () => {
  return (
    <div className="checkoutItem">
      <div className="container">
        <h3>Product</h3>
        <h3>Name</h3>
        <h3>Price</h3>
        <h3>Amount</h3>
        <h3>Action</h3>
      </div>
      <hr />
      <div className="cartItemList">
        <CartItem></CartItem>
        <CartItem></CartItem>
        <CartItem></CartItem>
      </div>
    </div>
  );
};

export default CheckoutItem;
