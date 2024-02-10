import React from "react";
import "./CheckoutItem.scss";
import Counter from "../Counter/Counter";
import CartItem from "../CartItem/CartItem";
import { useDispatch, useSelector } from "react-redux";
import Button from "../Button/Button";
import { Link } from "react-router-dom";

const CheckoutItem = ({data}) => {

  // console.log(data);
  return (
    <div className="checkoutItem">
      <div className="container">
        <h3>Product</h3>
        <h3>Name</h3>
        <h3>Price</h3>
        <h3>Amount</h3>
        {/* <h3>Action</h3> */}
      </div>
      <hr />
      <div className="cartItemList">
        {
          data?.length > 0 && data?.map(item=><CartItem key={item._id} data={item}></CartItem>)
        }
        {
          data?.length === 0 && (
            <div>
              <h3 style={{color:"gray"}}>No Product Added...</h3>
              <Button><Link to="/">Back To Shop</Link></Button>
            </div>
          )
        }
      </div>
    </div>
  );
};

export default CheckoutItem;
