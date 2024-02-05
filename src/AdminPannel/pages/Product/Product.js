import React from "react";
import "./Product.scss";
import ProductForm from "../../components/ProductForm/ProductForm";
import ProductTable from "../../components/ProductTable/ProductTable";
import Exp from "../../../components/Exp/Exp";
import { UseDispatch, useSelector } from "react-redux";

const Product = () => {
  const selector= useSelector(state=>state.productApi)
  console.log(selector);
  return (
    <div className="product">
      <div className="container">
        <h1>Upload a Product</h1>
        <ProductForm></ProductForm>
      </div>
      <ProductTable></ProductTable>
    </div>
  );
};

export default Product;
