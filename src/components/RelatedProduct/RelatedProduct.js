import React from 'react';
import "./RelatedProduct.scss"
import SingleProduct from '../SingleProduct/SingleProduct';
const RelatedProduct = () => {
    return (
        <div className="product">
            <div className="product_container">
                <SingleProduct></SingleProduct>
                <SingleProduct></SingleProduct>
                <SingleProduct></SingleProduct>
                <SingleProduct></SingleProduct>
            </div>
        </div>
    );
};

export default RelatedProduct;