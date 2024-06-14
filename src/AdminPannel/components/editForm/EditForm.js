import React, { useEffect } from "react";
import { useState } from "react";
import { useEditProductMutation } from "../../../features/product/productApi";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { modalOpen } from "../../../features/cartHandler/cartHandler";
import TextArea from "../TextArea/TextArea";

const EditForm = ({ data }) => {
  const {
    name: editName,
    gender: editGender,
    category: editCategory,
    description: editDescription,
    discount: editDiscount,
    price: editPrice,
    tags: editTags,
    featured: editFeatured,
    stockAvailable: editStockAvailable,
    video: editVideo,
    rating: editRating,
  } = data?.description || {};


  const { productId:id } = useParams();
  const [name, setName] = useState(editName);
  const [gender, setGender] = useState(editGender);
  const [description, setDescription] = useState(editDescription);
  const [price, setPrice] = useState(editPrice);
  const [discount, setDiscount] = useState(editDiscount);
  const [tags, setTags] = useState(editTags);
  const [video, setVideo] = useState(editVideo);
  const [rating, setRating] = useState(editRating);
  const [category, setCategory] = useState(editCategory);
  const [featured, setFeatured] = useState(editFeatured);
  const [stockAvailable, setStockAvailable] = useState(editStockAvailable);

  const [editProduct, { isSuccess }] = useEditProductMutation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  

  useEffect(() => {
    if (isSuccess) {
      dispatch(modalOpen());
      navigate("/dashboard/product");
    }
  }, [isSuccess, navigate, dispatch]);

  const returnedObj = {
    name,
    category,
    description,
    tags,
    featured,
    price,
    video,
    discount,
    gender,
    rating,
    stockAvailable,
  };  
  // const productObj = {
  //   _id: editData?._id,
  //   description: returnedObj,
  //   images: editData?.images,
  // };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   console.log(productObj);
  //   editProduct({productId,productObj})
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    editProduct({productId:id, productObj:{description: returnedObj, images:data?.images}})
  };

  return (
    <div className="productForm">

      <form onSubmit={handleSubmit}>
        <label htmlFor="product-name">Product Name:</label>
        <input
          type="text"
          id="product-name"
          name="product-name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        {/* flex section  */}
        <div className="product-flex">
          {/* // product category  */}
          <div>
            <label htmlFor="product-category">Product Category:</label>
            <select
              name="category"
              required
              id=""
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="sunglass">Sunglass</option>
              <option value="frame">Frame</option>
              <option value="lense">Glass</option>
              <option value="all">All</option>
            </select>
          </div>
          {/* // featured product  */}
          <div>
            <label htmlFor="featured-product">Featured:</label>
            <select
              style={{ background: "orange", color: "white" }}
              name="featured-product"
              required
              id=""
              value={featured}
              onChange={(e) => setFeatured(e.target.value)}
            >
              <option value="true">True</option>
              <option value="false">False</option>
            </select>
          </div>
          {/* // Stock Available  */}
          <div>
            <label htmlFor="featured-product">Stock Available:</label>
            <select
              style={{ background: "green", color: "white" }}
              name="featured-product"
              required
              id=""
              value={stockAvailable}
              onChange={(e) => setStockAvailable(e.target.value)}
            >
              <option value="true">True</option>
              <option value="false">False</option>
            </select>
          </div>
        </div>

        {/* // flex end  */}

        <label htmlFor="product-description">Product Description:</label>
        <TextArea
          description={description}
          setDescription={setDescription}
        ></TextArea>
        <label htmlFor="Tags">
          Tags: <span>(Write Tag Name Using Space)</span>
        </label>
        <input
          onChange={(e) => setTags(e.target.value)}
          value={tags}
          type="text"
          id="tags"
          name="tags"
          // required
        />
        <label htmlFor="product-price">Product Price:</label>
        <input
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          type="number"
          id="product-price"
          name="product-price"
          step="0.01"
          required
        />
        <label htmlFor="product-price">
          Discount: <span>(Discount Price in Taka... Not In Percent)</span>{" "}
        </label>
        <input
          onChange={(e) => setDiscount(e.target.value)}
          value={discount}
          type="number"
          id="discount"
          name="discount"
          step="0.01"
          required
        />
        <label htmlFor="product-image">Video URL</label>
        <input
          onChange={(e) => setVideo(e.target.value)}
          type="text"
          id="product-video"
          name="product-video"
          style={{ marginBottom: "20px" }}
          placeholder="ইউটিউব ভিডিও লিঙ্ক"
          value={video}
          // required
        />
        <label htmlFor="product-rating">Rating</label>
        <input
          onChange={(e) => setRating(e.target.value)}
          type="text"
          id="product-rating"
          name="product-rating"
          placeholder="রেটিং যত বেশি দিবেন ওয়েবসাইটে প্রোডাক্ট তত সামনে আসবে"
          value={rating}
          // required
        />
        <select
          className="gender"
          name="gender"
          id=""
          value={gender}
          onChange={(e) => setGender(e.target.value)}
        >
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="unisex">Unisex</option>
        </select>
        <button type="submit" className="upload-btn">
          Upload Product
        </button>
      </form>
    </div>
  );
};

export default EditForm;
