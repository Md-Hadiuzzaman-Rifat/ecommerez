import React, { useEffect } from "react";
import "./Sunglass.scss";
import ProductLayout from "../ProductLayout/ProductLayout";
import { handleClose } from "../../features/cartHandler/cartHandler";
import { useDispatch } from "react-redux";
import { useGetProductsQuery } from "../../features/product/productApi";
import SingleProduct from "../SingleProduct/SingleProduct";

const Sunglass = () => {
  const dispatch = useDispatch();
  const { data = [], error: isError, isLoading } = useGetProductsQuery();

  useEffect(() => {
    dispatch(handleClose());
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="sunglass">
      <div className="sunglass_cover"></div>
      <div className="container">
        {/* <ProductLayout></ProductLayout> */}
        <h2>Sunglasses</h2>
        <div className="discount_product">
          {isLoading && "Loading..."}
          {!isLoading &&
            data?.length > 0 &&
            data
              .filter((item) => item.category === "sunglass")
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

export default Sunglass;
