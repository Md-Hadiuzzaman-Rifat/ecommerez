import React from "react";
import { useState } from "react";
import "./Practice2.scss";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";

const Practice2 = () => {
  const [selectedImg, setSelectedImg] = useState("img");
  const [quantity, setQuantity] = useState(1);


  return (
    <div className="product">
        <>
          <div className="left">
            <div className="images">
              <img
                src="https://i.pinimg.com/736x/fe/78/0b/fe780b703c0c324e777ecd56d9b38f20.jpg"
                alt=""
                onClick={(e) => setSelectedImg("img")}
              />
              <img
                src="https://c1.wallpaperflare.com/preview/699/919/681/woman-female-depth-of-field-field.jpg"
                alt=""
                onClick={(e) => setSelectedImg("img2")}
              />
            </div>
            <div className="mainImg">
              <img
                src="https://jooinn.com/images/shallow-focus-photography-of-woman-in-white-off-shoulder-top.jpg"
                alt=""
              />
            </div>
          </div>
          <div className="right">
            <h1>data?.attributes?.title</h1>
            <span className="price">$data?.attributes?.price</span>
            <p>data?.attributes?.desc</p>
            <div className="quantity">
              <button
                onClick={() =>
                  setQuantity((prev) => (prev === 1 ? 1 : prev - 1))
                }
              >
                -
              </button>
              {quantity}
              <button onClick={() => setQuantity((prev) => prev + 1)}>+</button>
            </div>
            <button
              className="add"
              
            >
               ADD TO CART
            </button>
            <div className="links">
              <div className="item">
                ADD TO WISH LIST
              </div>
              <div className="item">
                ADD TO COMPARE
              </div>
            </div>
            <div className="info">
              <span>Vendor: Polo</span>
              <span>Product Type: T-Shirt</span>
              <span>Tag: T-Shirt, Women, Top</span>
            </div>
            <hr />
            <div className="info">
              <span>DESCRIPTION</span>
              <hr />
              <span>ADDITIONAL INFORMATION</span>
              <hr />
              <span>FAQ</span>
            </div>
          </div>
        </>
   
    </div>
  );
};

export default Practice2;