import React from 'react';
import Counter from '../Counter/Counter';
import "./CartContainer.scss"

const CartContainer = ({data}) => {
    let {name, image, price}= data

    if(name.length>12){
        name= name.substring(0,12)
    }
    
    return (
        <div className="cart_container">
        <div className="cart_product_image">
          <img
            src={image}
            alt=""
          />
        </div>
        <div className="cart_product_details">
          <h4>{name}</h4>
          <div>
            <Counter></Counter>
          </div>
          <h5>{price}</h5>
        </div>
      </div>
    );
};

export default CartContainer;