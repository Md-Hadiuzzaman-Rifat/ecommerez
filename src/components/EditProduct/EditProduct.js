import React from 'react';
import ProductForm from '../../AdminPannel/components/ProductForm/ProductForm';
import "./EditProduct.scss"
import { useParams } from 'react-router-dom';
import { useEditProductMutation, useGetProductsQuery, useGetSingleProductQuery } from '../../features/product/productApi';
import EditForm from '../../AdminPannel/components/editForm/EditForm';

const EditProduct = () => {
    const params= useParams()
    const {productId}= params || {}
    
    // const {}= useEditProductMutation(productId)

    const {data, isLoading}= useGetSingleProductQuery(productId)
    console.log(data)  
    return (
        <div className='editProduct'>
            {
                isLoading && "Loading..."
            }
            {
                !isLoading && (<div>
                    <h1>Edit Product</h1>
                    <EditForm editData={data}></EditForm>
                    </div>)
            }
        </div>
    );
};

export default EditProduct;