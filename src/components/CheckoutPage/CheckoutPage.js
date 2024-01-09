import React from "react";
import "./CheckoutPage.scss";
import CheckoutForm from "../CheckoutForm/CheckoutForm";
const CheckoutPage = () => {
  return (
    <div className="checkoutPage">
      <div className="container">
        <h1>Checkout</h1>
        <CheckoutForm></CheckoutForm>
      </div>
    </div>
  );
};

export default CheckoutPage;
