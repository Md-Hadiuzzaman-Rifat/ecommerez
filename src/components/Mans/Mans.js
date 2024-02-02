import React, { useEffect } from 'react';
import "./Mans.scss"
import ProductLayout from '../ProductLayout/ProductLayout';
import { handleClose } from '../../features/cartHandler/cartHandler';
import { useDispatch } from 'react-redux';


const Mans = () => {
    const dispatch= useDispatch()
    useEffect(() => {
        dispatch(handleClose())
        window.scrollTo(0, 0)
      }, [])

    
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