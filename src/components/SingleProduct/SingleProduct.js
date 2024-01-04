import React from "react";
import "./SingleProduct.scss";
import FilteredProducts from "../FilterProduct/FilteredProducts";
const SingleProduct = () => {
  return (
    <div className="product_view">
      <div className="product_img">
        <img
          src="https://www.ubuy.com.bd/productimg/?image=aHR0cHM6Ly9pNS53YWxtYXJ0aW1hZ2VzLmNvbS9zZW8vV29tZW4tTWVuLUNsYXNzaWMtRXllZ2xhc3Nlcy1GcmFtZXMtRXlld2Vhci1QbGFpbi1HbGFzcy1TcGVjdGFjbGUtRnJhbWUtU2lsaWNvbmUtT3B0aWNhbC1CcmFuZC1FeWUtR2xhc3Nlcy1GcmFtZV9jYTY0MTExZi1iNTFjLTRmZTgtYjZkMy01NDYzZmE1ZjExZDQuYzJjMWU1MzU1ZDcxM2EyYTIyNTc0M2IzN2JiOTBiMWYuanBlZw.jpg"
          alt="product"
        />
      </div>
      <div className="product_description">
        <h3>$500</h3>
        <p>Pixel 7 pro</p>
      </div>
    </div>
  );
};

export default SingleProduct;
