import React from "react";
import Counter from "../Counter/Counter";
import { findOne, removeFromDb } from "../../utilities/localStorage";
import { removeOrder } from "../../features/orderProduct/orderProductSlice";
import { useDispatch } from "react-redux";

const CartItem = ({data}) => {
  const {image}= data || {}
  const [image1]=image

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
  function count(id){
    return findOne(id) || 0
}

  return (
    <div className="cartItem">
      <div className="container">
        <img
          src={image1}
          alt=""
        />
        <h3>{nameFunction()}</h3>
        <p>{data?.price}</p>
        <h3>{count(data?._id)}</h3>
        {/* <button onClick={()=>handleRemove(data?._id)} className="removeBtn">Remove</button> */}
      </div>
    </div>
  );
};

export default CartItem;
