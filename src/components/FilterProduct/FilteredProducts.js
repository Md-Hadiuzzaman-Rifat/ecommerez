import React from 'react';
import "./FilteredProducts.scss"
const FilteredProducts = ({item}) => {
    
    return (
        <div>
            <div className="filtered_product">
                <div className="filtered_product_container">
                    <div className="filtered_product_image">
                        <img src={item.image} alt="" />
                    </div>
                    <div className="filtered_product_desc">
                        <h4>Product Name : {item.name}</h4>
                        <p>Product Desc : </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FilteredProducts;