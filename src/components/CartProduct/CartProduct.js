import React from "react";
import "./CartProduct.scss";
import Counter from "../Counter/Counter";
import Button from "../Button/Button";
import { Link } from "react-router-dom";
import CartContainer from "../CartContainer/CartContainer";

const CartProduct = ({data}) => {
  return (
    <div className="cart_slider">
      {
        data?.map((item)=><CartContainer key={item._id} data={item}></CartContainer>)
      }
      <div className="cart_btn">
        <Link to="/checkout">Checkout</Link>
      </div>
    </div>
  );
};

export default CartProduct;
