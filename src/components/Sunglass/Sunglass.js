import React, { useEffect } from 'react';
import "./Sunglass.scss"
import ProductLayout from '../ProductLayout/ProductLayout';

const Sunglass = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    return (
        <div className='sunglass'>
            <div className="sunglass_cover">
                </div>
            <div className="container">
                
                <ProductLayout></ProductLayout>
            </div>
        </div>
    );
};

export default Sunglass;