import React from "react";
import SingleProduct from "../SingleProduct/SingleProduct";
import "./DiscountSell.scss"
import { useGetProductsQuery } from "../../features/product/productApi";


const DiscountSell = () => {
  const { data=[], error: isError, isLoading } = useGetProductsQuery();

  return (
    <div className="discountSell">
      <div className="container">
        <h2>Discount Product</h2>
        <div className="discount_product">
          {isLoading && "Loading..."}
          {!isLoading && data?.length>0 && data
            .filter(item=>!item.featured)
            .map(item => (
              <SingleProduct className="discount_product_item" item={item} key={item._id}></SingleProduct>
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default DiscountSell;
