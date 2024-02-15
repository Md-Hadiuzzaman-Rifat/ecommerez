import React, { useEffect } from 'react';
import "./Mans.scss"
import ProductLayout from '../ProductLayout/ProductLayout';
import { handleClose } from '../../features/cartHandler/cartHandler';
import { useDispatch } from 'react-redux';
import { useGetProductsQuery } from '../../features/product/productApi';
import SingleProduct from '../SingleProduct/SingleProduct';


const Mans = () => {
    const { data = [], error: isError, isLoading } = useGetProductsQuery();

    const dispatch= useDispatch()
    useEffect(() => {
        dispatch(handleClose())
        window.scrollTo(0, 0)
      }, [dispatch])

    
    return (
        <div className='mans'>
            <div className="mans_banner">
            </div>
            <div className="mans_container">
                {/* <ProductLayout></ProductLayout> */}
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
        </div>
    );
};

export default Mans;