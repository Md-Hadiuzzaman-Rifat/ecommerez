import React from "react";
import "./CheckoutForm.scss";
const CheckoutForm = () => {
  return (
    <div className="checkoutForm">
      <form className="container">
        <div className="input-row">
          <label for="fname">First Name</label>
          <input type="text" id="fname" name="fname" required />
        </div>
        <div className="input-row">
          <label for="lname">Last Name</label>
          <input type="text" id="lname" name="lname" required />
        </div>
        <div className="input-row">
          <label for="email">Email</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className="input-row">
          <label for="Phone">Phone</label>
          <input type="text" id="phone" name="phone" required />
        </div>
        <div className="input-row">
          <label for="address">Address</label>
          <input type="text" id="address" name="address" required />
        </div>
        <div className="input-row">
          <label for="city">City</label>
          <input type="text" id="city" name="city" required />
        </div>
        <div className="input-row">
          <label for="zip">Zip Code</label>
          <input type="text" id="zip" name="zip" required />
        </div>
        <div className="input-row">
          <label for="country">Country</label>
          <input type="text" id="country" name="country" required />
        </div>
        <button type="submit">Place Order</button>
      </form>
    </div>
  );
};

export default CheckoutForm;
