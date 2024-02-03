import React from 'react';
import "./FilteredProducts.scss"
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { searchClose } from '../../features/cartHandler/cartHandler';

const FilteredProducts = ({item}) => {
    let {name,description,_id }=item || {}
    const navigate= useNavigate()
    const dispatch= useDispatch()

    if(name?.length>20){
        name= name.substring(0, 17)+"..."
      }

    if(description?.length>40){
        description= description.substring(0, 47)+"..."
      }

      const handleSearch=(id)=>{
        navigate(`/productDetails/${id}`)
        dispatch(searchClose())
      }

    return (
        <div onClick={()=>handleSearch(_id)}>
            <div className="filtered_product">
                <div className="filtered_product_container">
                    <div className="filtered_product_image">
                        <img src={item.image} alt="" />
                    </div>
                    <div className="filtered_product_desc">
                        <h4>Product Name : {name}</h4>
                        <p>Product Desc : {description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FilteredProducts;