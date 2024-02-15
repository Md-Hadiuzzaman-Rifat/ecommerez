import React, { useEffect, useState } from "react";
import "./Accessories.scss";
import { useDispatch } from "react-redux";
import { handleClose } from "../../features/cartHandler/cartHandler";
import { useGetProductsQuery } from "../../features/product/productApi";
import SingleProduct from "../SingleProduct/SingleProduct";

const Accessories = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(handleClose());
    window.scrollTo(0, 0);
  }, [dispatch]);

  const [page, setPage]= useState(1)
  const handleNextPage=()=>{
    setPage(page+1)
  }
  const limit=20
  const { data = [], isSuccess ,error: isError, isLoading } = useGetProductsQuery({page, limit});

  return (
    <div className="accessories">
      <div className="container">
        <div className="accessories_header">
            {/* banner section  */}
          <div className="accessories_banner"></div>
          {/* left content section  */}
          <div className="accessories_top_content">
            <div className="accessories_content">Lense</div>
            <div className="accessories_content">Frame</div>
            <div className="accessories_content">Cleaner</div>
            <div className="accessories_content">Box</div>
          </div>
        </div>
        <div className="accessories_body">
        <h2>Mans Zone</h2>
        <div className="discount_product">
          {isLoading && "Loading..."}
          {!isLoading &&
            data?.length > 0 &&
            data
              .filter((item) => item.gender !== "female")
              .map((item) => (
                <SingleProduct
                  className="discount_product_item"
                  item={item}
                  key={item._id}
                ></SingleProduct>
              ))}
              </div>
        </div>
        <div className="load-button">
          <button disabled={page*limit > data?.length} onClick={handleNextPage}>Load More...</button>
        </div>
      </div>
    </div>
  );
};

export default Accessories;
