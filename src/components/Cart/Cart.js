import React from 'react';
import { RxCross1 } from "react-icons/rx";

const Cart = ({handleCart}) => {
    return (
        <div className="cart">
            <div className="cartContainer">
                <div className="cart_header">
                    <h2>SHOPPING CART</h2>
                    <div>
                        <span><RxCross1/></span>
                        <p>close</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;