import React from 'react';
import "./Counter.scss"

const Counter = () => {
    return (
        <div>
            <div className="counter">
                <div className="counterContainer">
                    <span>+</span>
                    <span>0</span>
                    <span>-</span>
                </div>
            </div>
        </div>
    );
};

export default Counter;