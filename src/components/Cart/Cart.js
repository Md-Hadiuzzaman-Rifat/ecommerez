import React from "react";
import { RxCross1 } from "react-icons/rx";
import "./Cart.scss";
import { MdOutlineShoppingCart } from "react-icons/md";
import Button from "../Button/Button";
import CartProduct from "../CartProduct/CartProduct";
const Cart = ({ handleCart }) => {
  return (
    <div className="cart"> 
      <div className="container">
        <div className="cartContainer">
          <div className="cartContainerSlider">
            <div className="cart_header">
              <h3>SHOPPING CART</h3>
              <div className="cart_close"> 
                <div onClick={handleCart}>
                  <RxCross1 />
                  <p>close</p>
                </div>
              </div>
            </div>
            <div className="cart_body">
              {/* <div className="cart_empty">
               <MdOutlineShoppingCart/>
                <h3>Empty Cart</h3>
                <Button>Return Shop</Button>
              </div> */}
              <div className="cart_product">
                <CartProduct></CartProduct>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
