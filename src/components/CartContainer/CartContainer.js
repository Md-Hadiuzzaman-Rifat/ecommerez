import React from 'react';
import Counter from '../Counter/Counter';
import "./CartContainer.scss"

const CartContainer = ({data}) => {
    let {name, image, price, _id, discount}= data
    const [image1]= image ||[]

    if(name.length>12){
        name= name.substring(0,12)
    }
    
    return (
        <div className="cart_container">
        <div className="cart_product_image">
          <img
            src={image1}
            alt=""
          />
        </div>
        <div className="cart_product_details">
          <h4>{name}</h4>
          <div>
            <Counter id={_id}></Counter>
          </div>
          <h5>{price-discount}</h5>
        </div>
      </div>
    );
};

export default CartContainer;