import React, { useEffect } from "react";
import { ImBin } from "react-icons/im";
import { FiEdit } from "react-icons/fi";
import "./TableBody.scss"
import { Link } from "react-router-dom";
import { useDeleteProductMutation } from "../../../features/product/productApi";

const TableBody = ({data}) => {
  let {name, category, discount, rating, stockAvailable,  featured, price}= data?.description || {}
  const {_id, images}=data || {}

  const [deleteProduct, {isLoading, isSuccess:deleteSuccess}]= useDeleteProductMutation()

  useEffect(()=>{
    if(deleteSuccess){
      alert("Product Deleted Successfully")
    }
  },[deleteSuccess])

  if(name?.length>50){
    name= name.substring(0, 80)+"..."
  }
  
  const handleDelete=(id)=>{
    console.log(id);
    deleteProduct(id)
  } 

  const style={
    background:"orange"
  }

  return (
    <tr style={{
      background: featured ? '#dfd8ff' : ''
    }} className="tableBody">
      <td>{name}</td>
      <td>{category}</td>
      <td>{price} Tk</td>
      <td>{discount} Tk</td>
      <td>{rating} Tk</td>
      <td>{stockAvailable} Tk</td>
      <td>
        <img
          className="table-img"
          src={`http://localhost:25000/images/${images[0].filename}`}
          style={{marginRight:"5px"}}
          alt=""
        />
      </td>
      <td className="productAction">
        <span className="productDelete" onClick={()=>handleDelete(_id)}>
          <ImBin />{" "}
        </span>
        <span className="productEdit">
          <Link to={`/edit/${_id}`}><FiEdit /></Link>
        </span>
      </td>
    </tr>
  );
};

export default TableBody;
