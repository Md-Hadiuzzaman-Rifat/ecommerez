import React, { useEffect } from "react";
import "./Women.scss";
import ProductLayout from "../ProductLayout/ProductLayout";
import { useDispatch } from "react-redux";
import { handleClose } from "../../features/cartHandler/cartHandler";
import { useGetProductsQuery } from "../../features/product/productApi";
import SingleProduct from "../SingleProduct/SingleProduct";

const Women = () => {
  const { data = [], error: isError, isLoading } = useGetProductsQuery();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(handleClose());
    window.scrollTo(0, 0);
  }, [dispatch]);

  console.log(data);

  return (
    <div className="women">
      <div className="women_banner"></div>
      <div className="women_container">
        {/* <ProductLayout></ProductLayout> */}
        {/* // keep here  */}
        <h2>Women Zone</h2>
        <div className="discount_product">
          {isLoading && "Loading..."}
          {!isLoading &&
            data?.length > 0 &&
            data
              .filter((item) => item.gender !== "male")
              .map((item) => (
                <SingleProduct
                  className="discount_product_item"
                  item={item}
                  key={item._id}
                ></SingleProduct>
              ))}
        </div>
      </div>
    </div>
  );
};

export default Women;
