import React, { useEffect } from 'react';
import "./Women.scss"
import ProductLayout from '../ProductLayout/ProductLayout';
import { useDispatch } from 'react-redux';
import { handleClose } from '../../features/cartHandler/cartHandler';

const Women = () => {

    const dispatch= useDispatch()
    useEffect(() => {
        dispatch(handleClose())
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