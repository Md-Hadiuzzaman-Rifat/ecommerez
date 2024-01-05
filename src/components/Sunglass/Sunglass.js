import React from 'react';
import "./Sunglass.scss"
import ProductLayout from '../ProductLayout/ProductLayout';

const Sunglass = () => {
    return (
        <div className='sunglass'>
            <div className="container">
                <div className="sunglass_cover">
                    {/* <img src="https://www.voisins.com/wp-content/uploads/sunglasses-hishers-copy.jpg" alt="" /> */}
                </div>
                <ProductLayout></ProductLayout>
            </div>
        </div>
    );
};

export default Sunglass;