import "./ProductLayout.scss";
import Product from "../Product/Product";
import { useState, useEffect } from "react";
import Practice from "../Practice/Practice";
import { useGetProductsQuery } from "../../features/product/productApi";
import ProductSkeleton from "../ProductSkeleton/ProductSkeleton";

const ProductLayout = () => {
  const {
    data: products,
    isSuccess,
    error: isError,
    isLoading,
  } = useGetProductsQuery({ page: 1, limit: 100 });

  return (
    <div className="productLayout">
      <div className="container">
        <div className="productLayout_heading">
          <h2>Summer Sale</h2>
        </div>
        {
          isError && "Error occurred."
        }
        {isLoading && <ProductSkeleton />}
        {isSuccess && products?.length > 0 && (
          <div className="productLayout_product">
            {products
              .filter((item) => item?.description?.featured)
              .map((item) => (
                <Practice key={item._id} product={item} />
              ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductLayout;
