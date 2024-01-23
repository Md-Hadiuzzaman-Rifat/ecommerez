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
        data.map((item)=><CartContainer key={item._id} data={item}></CartContainer>)
      }
      <div className="cart_subtotal">
        <h3>SUBTOTAL: </h3> <h3>500$</h3>
      </div>
      <div className="cart_btn">
        <Link to="/checkout"><Button>Checkout</Button></Link>
      </div>
    </div>
  );
};

export default CartProduct;
