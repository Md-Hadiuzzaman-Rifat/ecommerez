import "./ProductLayout.scss";
import Product from "../Product/Product";
// import { useGetProductsQuery } from "../../features/product/productApi";
import { useState, useEffect } from "react";
import Practice from "../Practice/Practice"

const ProductLayout = () => {

  // const { data=[], error: isError, isLoading } = useGetProductsQuery(1);

  const [products, setProducts]= useState([])

  useEffect(()=>{
    fetch(`http://localhost:2020/featuredProduct`)
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

      </div>
    </div>
  );
};

export default ProductLayout;
