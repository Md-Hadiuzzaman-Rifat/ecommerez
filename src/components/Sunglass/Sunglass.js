import React, { useEffect } from 'react';
import "./Sunglass.scss"
import ProductLayout from '../ProductLayout/ProductLayout';
import { handleClose } from '../../features/cartHandler/cartHandler';
import { useDispatch } from 'react-redux';

const Sunglass = () => {
    const dispatch= useDispatch()
    useEffect(() => {
        dispatch(handleClose())

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