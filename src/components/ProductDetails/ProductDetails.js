import React, { useEffect } from "react";
import RelatedProduct from "../RelatedProduct/RelatedProduct";
import Counter from "../Counter/Counter";
import "./ProductDetails.scss";
import Button from "../Button/Button";
import { HiShoppingCart } from "react-icons/hi";
import { BsTwitter, BsFacebook, BsInstagram, BsPinterest } from "react-icons/bs";
import Tags from "../Tags/Tags";
import { useGetSingleProductQuery } from "../../features/product/productApi";
import { useParams } from "react-router-dom";
import {addToDb} from "../../utilities/localStorage"
import { useDispatch } from "react-redux";
import { handleClose } from "../../features/cartHandler/cartHandler";

const ProductDetails = () => {
  const {productId}= useParams()
  const {data, isLoading}=useGetSingleProductQuery(productId)
  const {name, image, description, price, _id}= data || {}
  const dispatch= useDispatch()

  useEffect(() => {
    dispatch(handleClose())
    window.scrollTo(0, 0)
  }, [])

  const handleAction=(_id)=>{
    addToDb(_id)
  }

  return (
    <div className="productDetails">
      {
        isLoading && "Loading..."
      }{
        !isLoading && (<div className="productDetails_container">
        <Tags></Tags>
          <div className="product_display">
          
            <div className="display_image">
              <img
                src={image}
                alt=""
              />
            </div>
            <div className="display_content">
              <h2>{name}</h2>
              <h3>Price: {price} Tk</h3>
              
              <div className="displayContent_action">
                <Counter id={_id}></Counter>
                <Button onClick={()=>handleAction(_id)}>
                  <HiShoppingCart /> Add To Cart
                </Button>
              </div>
              <p>
                {description}
              </p>
              <div className="product_category_and_share">
                <div>
                  <h4>Category: </h4>
                  <p>Phone</p>
                </div>
                <div>
                  <h4>Share: </h4>
                  <BsFacebook></BsFacebook>
                  <BsTwitter></BsTwitter>
                  <BsInstagram></BsInstagram>
                  <BsPinterest></BsPinterest>
                </div>
              </div>
            </div>
          </div>
          <div className="product_heading">
            <h2>Related Product:</h2>
          </div>
          <RelatedProduct></RelatedProduct>
        </div>)
      }
    </div>
  );
};

export default ProductDetails;
