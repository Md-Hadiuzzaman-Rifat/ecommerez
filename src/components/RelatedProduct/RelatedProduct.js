import React, { useEffect } from "react";
import "./RelatedProduct.scss";
import SingleProduct from "../SingleProduct/SingleProduct";
import { useGetRelatedProductQuery } from "../../features/product/productApi";

const RelatedProduct = ({ category }) => {
  const { data, isLoading, isError } = useGetRelatedProductQuery(category);


  return (
    <div className="relatedProduct">
      <div className="product_container">
        {isLoading && "Loading..."}
        {!isLoading && data?.length > 0 && data.map(item=><SingleProduct key={item._id} item={item}/>)}
        {!isLoading && data?.length === 0 && "No Product Found."}
      </div>
    </div>
  );
};

export default RelatedProduct;
