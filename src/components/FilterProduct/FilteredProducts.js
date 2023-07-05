import React from 'react';
import "./FilteredProducts.scss"
const FilteredProducts = () => {
    return (
        <div>
            <div className="filtered_product">
                <div className="filtered_product_container">
                    <div className="filtered_product_image">
                        <img src="https://webobjects2.cdw.com/is/image/CDW/7202956?$product-main$" alt="" />
                    </div>
                    <div className="filtered_product_desc">
                        <h4>Product Name : </h4>
                        <p>Product Desc : </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FilteredProducts;