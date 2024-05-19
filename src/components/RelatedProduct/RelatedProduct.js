import React, { useEffect } from "react";
import "./RelatedProduct.scss";
import SingleProduct from "../SingleProduct/SingleProduct";
import {
  useGetProductsQuery,
  useGetRelatedProductQuery,
} from "../../features/product/productApi";
import ProductSkeleton from "../ProductSkeleton/ProductSkeleton";

const RelatedProduct = ({ category }) => {

  const {
    data,
    isSuccess,
    error: isError,
    isLoading,
  } = useGetProductsQuery({ page: 1, limit: 100 });

  return (
    <div className="relatedProduct">
      <div className="product_container">
        {isLoading && <ProductSkeleton />}
        {!isLoading &&
          data?.length > 0 &&
          data
            .filter((item) => item?.description?.category === category)
            .map((item) => <SingleProduct key={item._id} item={item} />)}
        {!isLoading && data?.length === 0 && "No Product Found."}
      </div>
    </div>
  );
};

export default RelatedProduct;
