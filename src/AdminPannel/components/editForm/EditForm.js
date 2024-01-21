import React from "react";
import { useState } from "react";
// import "./ProductForm.scss";
import { useEditProductMutation } from "../../../features/product/productApi";
import { useParams } from "react-router-dom";


const EditForm = ({editData}) => {
  const {name:editName, gender:editGender, category:editCategory, description:editDescription, discount:editDiscount, image:editImage, price:editPrice, tags:editTags}=editData || {}


  const {productId}= useParams()
  const [name, setName] = useState(editName);
  const [gender, setGender] = useState(editGender);
  const [description, setDescription] = useState(editDescription);
  const [price, setPrice] = useState(editPrice);
  const [discount, setDiscount] = useState(editDiscount);
  const [tags, setTags] = useState(editTags);
  const [image, setImage] = useState(editImage);
  const [category, setCategory] = useState(editCategory);

  const [editProduct, {isSuccess}]=useEditProductMutation()

  // const clearInput = () => {
  //   setName("");
  //   setGender("male");
  //   setDescription("");
  //   setPrice("");
  //   setDiscount("");
  //   setTags("");
  //   setImage("");
  //   setCategory("sunglass");
  // };

  const productObj={
    name,
    category,
    description,
    tags,
    price,
    discount,
    gender,
    image,
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const response = editProduct({productId,productObj});
    console.log(response);
    response
      .then(()=>{
        alert("Product added successfully.")
      })
      .catch(()=>{
        alert("Failed to upload product.")
      })
  };

  return (
    <div className="productForm">
      <form onSubmit={handleSubmit}>
        <label htmlFor="product-name">Product Name:</label>
        <input
          type="text"
          id="product-name"
          name="product-name"
          value={editName}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <label htmlFor="product-category">Product Category:</label>
        <select
          name="category"
          required
          id=""
        
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="sunglass">Sunglass</option>
          <option value="frame">Frame</option>
          <option value="lense">Glass</option>
          <option value="all">All</option>
        </select>
        <label htmlFor="product-description">Product Description:</label>
        <textarea
        value={editDescription}
          onChange={(e) => setDescription(e.target.value)}
          id="product-description"
          name="product-description"
          required
        ></textarea>
        <label htmlFor="Tags">
          Tags: <span>(Write Tag Name Using Space)</span>
        </label>
        <input
          onChange={(e) => setTags(e.target.value)}
          value={editTags}
          type="text"
          id="tags"
          name="tags"
          required
        />
        <label htmlFor="product-price">Product Price:</label>
        <input
        value={editPrice}
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
          value={editDiscount}
          type="number"
          id="discount"
          name="discount"
          step="0.01"
          required
        />
        <label htmlFor="product-image">Product Image:</label>
        <input
        value={editImage}
          onChange={(e) => setImage(e.target.value)}
          type="text"
          id="product-image"
          name="product-image"
          required
        />
        {/* // --------image upload  --------*/}
        {/* <label htmlFor="product-image">Product Image:</label>
        <input
          type="file"
          id="product-image"
          name="product-image"
          accept="image/*"
          required
        /> */}
        {/*---------- gender checkbox -----------*/}
        <select
          className="gender"
          name="gender"
          id=""
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
