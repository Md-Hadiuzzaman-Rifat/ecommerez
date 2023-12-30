import React from 'react';
import "./Product.scss"

const Product = () => {
    return (
        <div className='product'>
            <div class="container">
        <h1>Upload a Product</h1>
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
    <table>
    <thead>
      <tr>
        <th>Name</th>
        <th>Category</th>
        <th>Price</th>
        <th>Discount</th>
        <th>Image</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Leica</td>
        <td>Lense</td>
        <td>2000</td>
        <td>20%</td>
        <td><img className='table-img' src="https://mykitamedia.com/media/image/2020/11/02_mykita_leica_optical_ml07_landscape.jpg" alt="" />
        <img className='table-img' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrOJSc2-5DkX1JScbalvUwegBOVqG3oBXU5q-_BKIlIA&s" alt="" />
</td>
      </tr>

    </tbody>
 </table>
        </div>
    );
};

export default Product;