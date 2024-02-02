import React from "react";
import Counter from "../Counter/Counter";
import { removeFromDb } from "../../utilities/localStorage";
import { removeOrder } from "../../features/orderProduct/orderProductSlice";
import { useDispatch } from "react-redux";

const CartItem = ({data}) => {

  const dispatch= useDispatch()

  const nameFunction=()=>{
    if(data?.name?.length>12){
      return data.name.substring(0, 10)+"..."
    }else{
      return data?.name
    }
  }

  const handleRemove=(id)=>{
    console.log(id);
    dispatch(removeOrder(id))
    removeFromDb(id)
  }

  return (
    <div className="cartItem">
      <div className="container">
        <img
          src={data?.image}
          alt=""
        />
        <h3>{nameFunction()}</h3>
        <p>{data?.price}</p>
        <Counter id={data?._id}></Counter>
        {/* <button onClick={()=>handleRemove(data?._id)} className="removeBtn">Remove</button> */}
      </div>
    </div>
  );
};

export default CartItem;
