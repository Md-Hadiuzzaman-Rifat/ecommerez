import React from "react";
import "./CheckoutPage.scss";
import CheckoutForm from "../CheckoutForm/CheckoutForm";
import CheckoutItem from "../CheckoutItem/CheckoutItem";
const CheckoutPage = () => {
  return (
    <div className="checkoutPage">
      <div className="container">
        <div className="checkoutCart">
          <h1>Checkout</h1>
          <CheckoutForm></CheckoutForm>
        </div>
        <div>
          <CheckoutItem></CheckoutItem>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
