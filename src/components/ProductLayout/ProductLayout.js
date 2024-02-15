import React from "react";
import "./ProductLayout.scss";
import Product from "../Product/Product";
import { useGetProductsQuery } from "../../features/product/productApi";
import { useState } from "react";
import Practice from "../Practice/Practice"

const ProductLayout = () => {

  const { data=[], error: isError, isLoading } = useGetProductsQuery();

  return (
    <div className="productLayout">
      <div className="container">
        <div className="productLayout_heading">
          <h2>Winter Sale</h2>
        </div>
        {isLoading ? (
          "Loading..."
        ) : (
          <div className="productLayout_product">
            {
              !isLoading && data?.length>0 && 
              data?.filter(item=>item.featured)
              .map((item) => (
                <Practice key={item._id} product={item} />
              ))
            }
            {
              !isLoading && data?.length===0 && "No Product Found"
            }
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductLayout;
