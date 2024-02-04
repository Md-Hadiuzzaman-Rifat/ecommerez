import React from "react";
import { useState } from "react";
import "./ProductForm.scss";
import { useAddProductMutation } from "../../../features/product/productApi";

const ProductForm = () => {
  const [name, setName] = useState("");
  const [gender, setGender] = useState("male");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [discount, setDiscount] = useState("");
  const [tags, setTags] = useState("");
  const [image, setImage] = useState("");
  const [category, setCategory] = useState("sunglass");

  const [addProduct, { data, isError, isLoading, isSuccess }] =
    useAddProductMutation();

  const clearInput = () => {
    setName("");
    setGender("male");
    setDescription("");
    setPrice("");
    setDiscount("");
    setTags("");
    setImage("");
    setCategory("sunglass");
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    const response = addProduct({
      name,
      category,
      description,
      tags,
      price,
      discount,
      gender,
      image,
    });
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
          type="text"
          id="tags"
          name="tags"
          required
        />
        <label htmlFor="product-price">Product Price:</label>
        <input
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
          type="number"
          id="discount"
          name="discount"
          step="0.01"
          required
        />
        <label htmlFor="product-image">Product Image:</label>
        <input
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
        {/* <div className="gender-checkbox">
            <p>Gender: </p>
          <label htmlFor="gender">
            <input type="checkbox" id="topping" name="topping" value="Paneer" />
            Male
          </label>
          <label htmlFor="gender">
            <input type="checkbox" id="topping" name="topping" value="Paneer" />
            Female
          </label>
          <label htmlFor="gender">
            <input type="checkbox" id="topping" name="topping" value="Paneer" />
            Unisex
          </label>
        </div> */}
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

export default ProductForm;
