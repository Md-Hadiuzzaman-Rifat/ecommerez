import React from 'react';
import Counter from '../Counter/Counter';
import "./CartContainer.scss"

const CartContainer = ({data}) => {
  console.log(data);
    let {name, price, discount}= data?.description || {}
    let {_id, images}= data 
    

    if(name.length>12){
        name= name.substring(0,12)
    }
    
    return (
        <div className="cart_container">
        <div className="cart_product_image">
          <img
            src={`http://localhost:25000/Images/${images[0]?.filename}`}
            alt=""
          />
        </div>
        <div className="cart_product_details">
          <h4>{name}</h4>
          <div>
            <Counter id={_id}></Counter>
          </div>
          <h5>Unit Price: {price-discount} <span>৳</span></h5>
        </div>
      </div>
    );
};

export default CartContainer;