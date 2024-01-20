import React from "react";
import "./ProductLayout.scss";
import Product from "../Product/Product";
import { useSelector, useDispatch } from "react-redux";
import { useGetProductsQuery } from "../../features/product/productApi";
import { useState } from "react";


const ProductLayout = () => {

  const { data=[], error: isError, isLoading } = useGetProductsQuery();

  return (
    <div className="productLayout">
      <div className="container">
        <div className="productLayout_heading">
          <h2>Product List: </h2>
        </div>
        {isLoading ? (
          "Loading..."
        ) : (
          <div className="productLayout_product">
            {data.map((item) => (
              <Product key={item._id} product={item} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductLayout;
