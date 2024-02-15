import React, { useEffect, useState } from "react";
import "./Women.scss";
import ProductLayout from "../ProductLayout/ProductLayout";
import { useDispatch } from "react-redux";
import { handleClose } from "../../features/cartHandler/cartHandler";
import { useGetProductsQuery } from "../../features/product/productApi";
import SingleProduct from "../SingleProduct/SingleProduct";
import Footer from "../Footer/Footer";

const Women = () => {

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
        <div className="load-button">
          <button disabled={page*limit > data?.length} onClick={handleNextPage}>Load More...</button>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Women;
