import React from "react";
import "./ProductSkeleton.scss";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const ProductSkeleton = () => {
    const count=[1,2,3,4,5,6,7,8]

  return (
    <div className="ProductSkeleton">
      <div className="container">
        <div className="products">
          {
            count.map((item, index)=><div key={index} className="product_basis">
            <Skeleton height={150}></Skeleton>
            <Skeleton height={10}></Skeleton>
            <Skeleton></Skeleton>
            <Skeleton height={10}></Skeleton>
          </div>)
          }
         
        </div>
      </div>
    </div>
  );
};

export default ProductSkeleton;
