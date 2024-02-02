import React, { useEffect, useState } from "react";
import { RxCross1 } from "react-icons/rx";
import "./Cart.scss";
import { MdOutlineShoppingCart } from "react-icons/md";
import Button from "../Button/Button";
import CartProduct from "../CartProduct/CartProduct";
import {getStoredCart} from "../../utilities/localStorage"
import { useGetSelectedProductMutation } from "../../features/product/productApi";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { handleToggle } from "../../features/cartHandler/cartHandler";

const Cart = () => {
  const findProducts=getStoredCart() || {}
  const keys= Object.keys(findProducts)
  
  const dispatch= useDispatch()
  
  const handleCart=()=>{
    dispatch(handleToggle())
  }

    // get multiple product
  const [getSelectedProduct, {data, isLoading, isError, isSuccess}]=useGetSelectedProductMutation()
  
  useEffect(()=>{
    getSelectedProduct(keys)
  },[getSelectedProduct])
 
  
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
              {
                isLoading && "Loading"
              }
              {data?.length===0 && <div className="cart_empty">
               <MdOutlineShoppingCart/>
                <h3>Empty Cart</h3>
                <Link to="/">

                <Button>Return Shop</Button>
                </Link>
                
              </div>}
              <div className="cart_product">
                {isSuccess && data?.length>0 && <CartProduct data={data}></CartProduct>}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
