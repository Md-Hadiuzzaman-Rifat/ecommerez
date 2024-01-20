import React from 'react';
import "./HotSales.scss"

const HotSales = () => {
    return (
        <div className="product-card">
        <div className="product-image">
            <img src="https://www.shopz.com.bd/wp-content/uploads/2021/03/Xiaomi-Mi-Polarized-Navigator-Sunglasses.jpg" alt="Product Image" />
        </div>
        <div className="product-info">
            <h3>Product Name</h3>
            <p>Product Description</p>
            <h4>$99.99</h4>
        </div>
        <div className="product-hover">
            <h3>Product Name</h3>
            <p>Product Description</p>
            <h4>$99.99</h4>
            <button>Add to Cart</button>
        </div>
    </div>
    );
};

export default HotSales;