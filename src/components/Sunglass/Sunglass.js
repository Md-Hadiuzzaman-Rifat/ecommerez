import React, { useEffect, useState } from "react";
import "./Sunglass.scss";
import ProductLayout from "../ProductLayout/ProductLayout";
import { handleClose } from "../../features/cartHandler/cartHandler";
import { useDispatch } from "react-redux";
import { useGetProductsQuery } from "../../features/product/productApi";
import SingleProduct from "../SingleProduct/SingleProduct";
import Footer from "../Footer/Footer";

const Sunglass = () => {
  const dispatch = useDispatch();
  // const { data = [], error: isError, isLoading } = useGetProductsQuery();

  useEffect(() => {
    dispatch(handleClose());
    window.scrollTo(0, 0);
  }, [dispatch]);
    
  const [page, setPage]= useState(1)
  const handleNextPage=()=>{
    setPage(page+1)
  }
  const limit=100
  const { data = [], isSuccess ,error: isError, isLoading } = useGetProductsQuery({page, limit});

  return (
    <div className="sunglass">
      <div className="container">
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
        <div className="load-button">
          <button disabled={page*limit > data?.length} onClick={handleNextPage}>Load More...</button>
        </div>
      </div>
      <Footer></Footer>
      </div>
    </div>
  );
};

export default Sunglass;
