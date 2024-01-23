// import React from 'react';
// import "./Counter.scss"
// import { useDispatch, useSelector } from 'react-redux';
// import { increment, decrement } from '../../features/counter/counterReducer';

// const Counter = () => {
//     let {value}= useSelector(state=>state.counter)
//     const dispatch= useDispatch()

//     const handleIncrement=()=>{
//             dispatch(increment())
//     }

//     const handleDecrement=(value)=>{
//         if(value<=0){
//             return
//         }else{
//             dispatch(decrement())
//         }
//     }


//     return (
//             <div className="counter">
//                 <div className="counterContainer">
//                     <span onClick={handleIncrement}>+</span>
//                     <span>{value}</span>
//                     <span onClick={()=>handleDecrement(value)}>-</span>
//                 </div>
//             </div>
//     );
// };

// export default Counter;



import React from 'react';
import "./Counter.scss"
import {addToDb, reduceFromDb, findOne} from "../../utilities/localStorage"

const Counter = ({id}) => {

    const handleIncrement=()=>{
        addToDb(id)
    }
    const handleDecrement=()=>{
        reduceFromDb(id)
    }

    function count(id){
        return findOne(id)
    }
   
    return (
        
            <div className="counter">
                <div className="counterContainer">
                    <span onClick={()=>handleIncrement()}>+</span>
                    <span>{count(id)}</span>
                    <span onClick={()=>handleDecrement()}>-</span>
                </div>
            </div>
    );
};

export default Counter;