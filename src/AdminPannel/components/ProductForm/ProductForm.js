import React from 'react';
import { useState } from 'react';


const ProductForm = () => {
    
    const [name, setName]=useState("")
    const [gender, setGender]=useState("")
    const [description, setDescription]= useState("")
    const [price, setPrice]= useState("")
    const [discount, setDiscount]= useState("")
    const [tag, setTag]= useState("")
    const [image, setImage]= useState('')

    return (
        <div className='productForm'>
            <form>
            <label htmlFor="product-name">Product Name:</label>
            <input type="text" id="product-name" name="product-name" required/>

            <label htmlFor="product-category">Product Category:</label>
            <input type="text" id="product-category" name="product-category" required/>
            
            <label htmlFor="product-description">Product Description:</label>
            <textarea id="product-description" name="product-description" required></textarea>
            
            <label htmlFor="product-price">Product Price:</label>
            <input type="number" id="product-price" name="product-price" step="0.01" required/>
            
            <label htmlFor="product-image">Product Image:</label>
            <input type="file" id="product-image" name="product-image" accept="image/*" required/>
            
            <button type="submit" className='upload-btn'>Upload Product</button>
        </form>
        </div>
    );
};

export default ProductForm;