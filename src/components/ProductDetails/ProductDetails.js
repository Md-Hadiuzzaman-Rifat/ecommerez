import React, { useEffect, useState } from "react";
import RelatedProduct from "../RelatedProduct/RelatedProduct";
import Counter from "../Counter/Counter";
import "./ProductDetails.scss";
import Button from "../Button/Button";
import { HiShoppingCart } from "react-icons/hi";
import {
  BsTwitter,
  BsFacebook,
  BsInstagram,
  BsPinterest,
} from "react-icons/bs";
import Tags from "../Tags/Tags";
import { useGetSingleProductQuery } from "../../features/product/productApi";
import { Link, useParams } from "react-router-dom";
import { addToDb } from "../../utilities/localStorage";
import { useDispatch } from "react-redux";
import {
  handleClose,
  searchClose,
} from "../../features/cartHandler/cartHandler";

const ProductDetails = () => {
  const { productId } = useParams();
  const { data, isLoading } = useGetSingleProductQuery(productId);
  const { name, image, description, price, _id } = data || {};
  const [image1, image2]= image || []
  const dispatch = useDispatch();

  const [mainImage, setMainImage]= useState(image1)

useEffect(()=>{
  setMainImage(image1)
},[image1])

  useEffect(() => {
    dispatch(handleClose());
    dispatch(searchClose());
    window.scrollTo(0, 0);
  }, [dispatch]);

  const handleAction = (_id) => {
    addToDb(_id);
  };

  return (
    <div className="productDetails">
      {isLoading && "Loading..."}
      {!isLoading && (
        <div className="productDetails_container">
          <Tags></Tags>
          <div className="product_display">
            <div className="image_container">
            <div className="display_image">
              <div className="side-image">
                <img src={image1} alt="" onClick={()=>setMainImage(image1)}/>
                <img src={image2} alt="" onClick={()=>setMainImage(image2)}/>
              </div>
              <div className="main-image">
                 <img src={mainImage} alt="" />
              </div>
            </div>
            </div>
            <div className="display_content">
              <h2>{name}</h2>
              <h3>Price: {price} Tk</h3>

              <div className="displayContent_action">
                <Counter id={_id}></Counter>
                <Link to="/checkout">
                  <Button>
                    <HiShoppingCart /> Checkout
                  </Button>
                </Link>
              </div>
              <p>{description}</p>
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
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
