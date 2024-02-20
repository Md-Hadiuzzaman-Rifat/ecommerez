import "./ProductLayout.scss";
import Product from "../Product/Product";
// import { useGetProductsQuery } from "../../features/product/productApi";
import { useState, useEffect } from "react";
import Practice from "../Practice/Practice"

const ProductLayout = () => {

  // const { data=[], error: isError, isLoading } = useGetProductsQuery(1);

  const [products, setProducts]= useState([])

  useEffect(()=>{
    fetch(`https://eye-care-back-end.vercel.app/featuredProduct`)
      .then(res=>res.json())
      .then(data=>setProducts(data))
  },[])

  // console.log(products);

  return (
    <div className="productLayout">
      <div className="container">
        <div className="productLayout_heading">
          <h2>Winter Sale</h2>
        </div>
         {
          products?.length === 0 && "loading"
        }
        { products?.length > 0 && (
          <div className="productLayout_product">
            {
              products.filter(item=>item.featured)
              .map((item) => (
                <Practice key={item._id} product={item} />
              ))
            }
            
          </div>
        )} 
        {/* {isLoading ? (
          "Loading..."
        ) : (
          <div className="productLayout_product">
            {
              !isLoading && data?.length>0 && 
              data?.filter(item=>item.featured)
              .map((item) => (
                <Practice key={item._id} product={item} />
              ))
            }
            {
              !isLoading && data?.length===0 && "No Product Found"
            }
          </div>
        )} */}
      </div>
    </div>
  );
};

export default ProductLayout;
