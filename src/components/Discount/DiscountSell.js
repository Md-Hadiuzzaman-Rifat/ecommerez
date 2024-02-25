import React, { useState } from "react";
import SingleProduct from "../SingleProduct/SingleProduct";
import "./DiscountSell.scss";
import { useGetProductsQuery } from "../../features/product/productApi";

const DiscountSell = () => {
  
  const [page, setPage]= useState(1)
  const handleNextPage=()=>{
    setPage(page+1)
  }
  const limit=10
  const { data = [], isSuccess ,error: isError, isLoading } = useGetProductsQuery({page, limit});


  return (
    <div className="discountSell">
      <div className="container">
        <h2>Discount Product hadiuzzaman </h2>
        <div className="discount_product">
          {isLoading && "Loading..."}
          {!isLoading &&
            data?.length > 0 &&
            data
              .filter((item) => !item.featured)
              .map((item) => (
                <SingleProduct
                  className="discount_product_item"
                  item={item}
                  key={item._id}
                ></SingleProduct>
              ))}
        </div>
        <div className="load-button">
          <button disabled={page*limit > data?.length} onClick={handleNextPage}>Load More...</button>
        </div>
      </div>
    </div>
  );
};

export default DiscountSell;
