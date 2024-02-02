
import React from 'react';
import "./Counter.scss"
import {addToDb, reduceFromDb, findOne} from "../../utilities/localStorage"
import {  useDispatch, useSelector } from 'react-redux';
import { addToOrder, reduceOrder } from '../../features/orderProduct/orderProductSlice';

const Counter = ({id}) => {
    const dispatch= useDispatch()
    const selector= useSelector(state=>state.order)

    const handleIncrement=()=>{
        dispatch(addToOrder({id:id,count:result+=1}))
        addToDb(id)
    }

    const handleDecrement=()=>{
        dispatch(reduceOrder({id:id,count:result-=1}))
        reduceFromDb(id)
    }
    function count(id){
        return findOne(id) || 0
    }
    let result=count(id)

    return (
            <div className="counter">
                <div className="counterContainer">
                    <button onClick={()=>handleIncrement()}>+</button>
                    <span>{result}</span>
                    <button disabled={result<=0} onClick={()=>handleDecrement()}>-</button>
                </div>
            </div>
    );
};

export default Counter;