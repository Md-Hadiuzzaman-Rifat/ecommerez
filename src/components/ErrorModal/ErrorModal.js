import React from 'react';
import Button from '../Button/Button';
import { errorModalClose } from '../../features/cartHandler/cartHandler';
import { useDispatch, useSelector } from 'react-redux';

const ErrorModal = ({text}) => {
    const {errorCondition}= useSelector(state=>state.cartHandler) ||{}
    const dispatch= useDispatch()

    const handleClose=()=>{
        dispatch(errorModalClose())
        }
    
    return (
        <div className='Modal'>
            <div className='Container'>
                <div className="content">
                    <p>{text}</p>
                    <Button onClick={handleClose}>Close</Button>
                </div>
            </div>
        </div>
    );
};

export default ErrorModal;