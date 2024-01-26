import React, { useEffect } from 'react';
import "./Women.scss"
import ProductLayout from '../ProductLayout/ProductLayout';

const Women = () => {
    
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    return (
        <div className='women'>
            <div className="women_banner">
            </div>
            <div className="women_container">
                <ProductLayout></ProductLayout>
            </div>
        </div>
    );
};

export default Women;