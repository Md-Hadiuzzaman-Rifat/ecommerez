import React, { useEffect } from "react";
import { useState } from "react";
import "./ProductForm.scss";
import { useAddProductMutation } from "../../../features/product/productApi";
import { useDispatch, useSelector } from "react-redux";
import { modalClose, modalOpen } from "../../../features/cartHandler/cartHandler";
import Modal from "../../../components/Modal/Modal";
import TextArea from "../TextArea/TextArea";


const ProductForm = () => {
  const [name, setName] = useState("");
  const [gender, setGender] = useState("male");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [discount, setDiscount] = useState("");
  const [tags, setTags] = useState("");
  const [rating, setRating]= useState("")
  const [video, setVideo]= useState("")
  const [category, setCategory] = useState("sunglass");
  const [featured, setFeatured] = useState("false");
  const [stockAvailable, setStockAvailable]= useState("true")
  const [message, setMessage] = useState();
  const [files, setFile] = useState([]);

  const selector=useSelector(state=>state.cartHandler)
  const {modalCondition}= selector || {}

  const dispatch= useDispatch()

  const [addProduct, { data, isError, isLoading, isSuccess }] =
    useAddProductMutation();

    useEffect(()=>{
      if(isSuccess){
        dispatch(modalOpen())
        clearInput();
      }
    },[isSuccess, dispatch])

  const clearInput = () => {
    setName("");
    setGender("male");
    setDescription("");
    setPrice("");
    setDiscount("");
    setTags("");
    setVideo("");
    setRating("");
    setCategory("sunglass");
  };

  const handleFile = (e) => {
    setMessage("");
    let file = e.target.files;
    for (let i = 0; i < file.length; i++) {
      const fileType = file[i]["type"];
      const validImageTypes = ["image/gif", "image/jpeg", "image/png"];
      if (validImageTypes.includes(fileType)) {
        setFile([...files, file[i]]);
      } else {
        setMessage("only images accepted");
      }
    }
  };

  const removeImage = (i) => {
    setFile(files.filter((x) => x.name !== i));
  };

  const handleUpload = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    for (let index = 0; index < files?.length; index++) {
      const file = files[index];
      formData.append("files", file);
    }
    formData.append("message", JSON.stringify(details));
    addProduct(formData)
  };

  const details={
        name,
      category,
      stockAvailable,
      description,
      tags,
      price,
      discount,
      gender,
      featured,
      rating,
      video
  }

  return (
    <div className="productForm">
      {
        modalCondition && <Modal></Modal>
      }
      <form onSubmit={handleUpload}>
        <label htmlFor="product-name">Product Name:</label>
        <input
          type="text"
          id="product-name"
          name="product-name"
          onChange={(e) => setName(e.target.value)}
          required
          value={name}
        />
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
            style={{background:"orange", color:"white"}}
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
            style={{background:"green", color:"white"}}
              name="stock"
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

        <label htmlFor="product-description">Product Description:</label>

        <TextArea description={description} setDescription={setDescription}></TextArea>
        <label htmlFor="Tags">
          Tags: <span>(Write Tag Name Using Space)</span>
        </label>
        <input
          onChange={(e) => setTags(e.target.value)}
          type="text"
          id="tags"
          name="tags"
          value={tags}
          // required
        />
        <label htmlFor="product-price">Product Price:</label>
        <input
          onChange={(e) => setPrice(e.target.value)}
          type="number"
          id="product-price"
          name="product-price"
          placeholder="প্রোডাক্টের আসল দাম"
          step="0.01"
          value={price}
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
          placeholder="কত টাকা ডিসকাউন্ট দিতে চাচ্ছেন ?"
          step="0.01"
          value={discount}
          required
        />
        <label htmlFor="product-image">Video URL</label>
        <input
          onChange={(e) => setVideo(e.target.value)}
          type="text"
          id="product-image"
          name="product-image"
          style={{ marginBottom: "20px" }}
          placeholder="ইউটিউব ভিডিও লিঙ্ক"
          value={video}
          // required
        />
        <label htmlFor="product-image">Rating</label>
        <input
          onChange={(e) => setRating(e.target.value)}
          type="text"
          id="product-image"
          name="product-image"
          placeholder="রেটিং যত বেশি দিবেন ওয়েবসাইটে প্রোডাক্ট তত সামনে আসবে"
          value={rating}
          // required
        />
        {/* // image upload  */}
          {/* <ImageUpload selectedFiles={files} setSelectedFiles={setFile}></ImageUpload> */}

          {/* // image upload  */}
          <div className="imageUpload">
          <div className="imageUpload__bg">
            <div style={{margin:"1rem"}}>
              <span className="flex justify-center items-center text-[12px] mb-1 text-red-500">
                {message}
              </span>

                <label className="imageUpload__label">
                  <div className="imageUpload__label__div">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="imageUpload__label__image"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <p className="imageUpload__text">
                      Select a photo
                    </p>
                  </div>
                  <input
                    type="file"
                    onChange={handleFile}
                    className="imageUpload_input"
                    multiple="multiple"
                    name="files[]"
                  />
                </label>
      
              <div className="imageUpload_container">
                {files.map((file, key) => {
                  return (
                    <div key={key} className="overflow-hidden relative">
                      <i
                        onClick={() => {
                          removeImage(file.name);
                        }}
                        
                      ></i>
                      <img
                        className="image_size"
                        src={URL.createObjectURL(file)}
                        alt="img upload"
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
          {/* image upload  */}

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

export default ProductForm;
