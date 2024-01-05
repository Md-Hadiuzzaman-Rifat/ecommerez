import React from 'react';
import "./Mans.scss"
import ProductLayout from '../ProductLayout/ProductLayout';


const Mans = () => {
    let arr=[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
    return (
        <div className='mans'>
            <div className="mans_banner">
            </div>
            <div className="mans_container">
                <ProductLayout></ProductLayout>
            </div>
        </div>
    );
};

export default Mans;