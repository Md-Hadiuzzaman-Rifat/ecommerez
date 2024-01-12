import React from "react";
import Counter from "../Counter/Counter";

const CartItem = () => {
  return (
    <div className="cartItem">
      <div className="container">
        <img
          src="https://www.ubuy.com.bd/productimg/?image=aHR0cHM6Ly9pNS53YWxtYXJ0aW1hZ2VzLmNvbS9zZW8vV29tZW4tTWVuLUNsYXNzaWMtRXllZ2xhc3Nlcy1GcmFtZXMtRXlld2Vhci1QbGFpbi1HbGFzcy1TcGVjdGFjbGUtRnJhbWUtU2lsaWNvbmUtT3B0aWNhbC1CcmFuZC1FeWUtR2xhc3Nlcy1GcmFtZV9jYTY0MTExZi1iNTFjLTRmZTgtYjZkMy01NDYzZmE1ZjExZDQuYzJjMWU1MzU1ZDcxM2EyYTIyNTc0M2IzN2JiOTBiMWYuanBlZw.jpg"
          alt=""
        />
        <h3>Zeizz</h3>
        <p>$200</p>
        <Counter></Counter>
        <button>Remove</button>
      </div>
    </div>
  );
};

export default CartItem;
