import React from "react";
import Counter from "../Counter/Counter";
import { findOne, removeFromDb } from "../../utilities/localStorage";
import { removeOrder } from "../../features/orderProduct/orderProductSlice";
import { useDispatch } from "react-redux";

const CartItem = ({data}) => {
  const {description, images}= data || {}

  const dispatch= useDispatch()

  const nameFunction=()=>{
    if(description?.name?.length>12){
      return description.name.substring(0, 10)+"..."
    }else{
      return description?.name
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
          src={`http://localhost:25000/images/${images[0]?.filename}`}
          alt=""
        />
        <h3>{nameFunction()}</h3>
        <p>{description?.price - description?.discount}</p>
        <h3>{count(data?._id)}</h3>
        {/* <button onClick={()=>handleRemove(data?._id)} className="removeBtn">Remove</button> */}
      </div>
    </div>
  );
};

export default CartItem;
