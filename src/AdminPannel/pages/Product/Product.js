import React from "react";
import "./Product.scss";
import ProductForm from "../../components/ProductForm/ProductForm";
import ProductTable from "../../components/ProductTable/ProductTable";

const Product = () => {
  return (
    <div className="product">
      <div class="container">
        <h1>Upload a Product</h1>
        <ProductForm></ProductForm>
      </div>
      <ProductTable></ProductTable>
    </div>
  );
};

export default Product;
