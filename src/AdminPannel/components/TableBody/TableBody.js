/* eslint-disable no-restricted-globals */
import React, { useEffect, useState } from "react";
import { ImBin } from "react-icons/im";
import { FiEdit } from "react-icons/fi";
import "./TableBody.scss"
import { Link } from "react-router-dom";
import { useDeleteProductMutation } from "../../../features/product/productApi";

const TableBody = ({data}) => {
  let {name, category, discount, rating, stockAvailable,  featured, price}= data?.description || {}
  const {_id, images}=data || {}

  const editGarbage=async(id)=>{
    console.log(id)
    fetch(`https://backend.thespectacle23.com/garbageTrash`,{
      method: "PUT",
      headers:{
        "Content-Type": "application/json",
      },
      body: JSON.stringify({id, images}),
    })
  }

  const deleteGarbage=async(id)=>{
    fetch(`https://backend.thespectacle23.com/garbage/${id}`,{
      method: "DELETE",
    })
  }

  const handleDelete = async(id) => {
    Promise.all([editGarbage(id), deleteGarbage(id)])
    .then(res=>console.log(res))
    .then(()=>alert('Alert For your User!') ? "" : location.reload()  )
  };

  if(name?.length>50){
    name= name.substring(0, 80)+"..."
  }


  const style={
    background:"orange"
  }

  return (
    <tr style={{
      background: featured==="true" ? '#dfd8ff' : ''
    }} className="tableBody">

      <td>{name}</td>
      <td>{category}</td>
      <td>{price} Tk</td>
      <td>{discount} Tk</td>
      {/* <td>{rating} Tk</td> */}
      <td>{stockAvailable}</td>
      <td>
        <img
          className="table-img"
          src={`https://backend.thespectacle23.com/images/${images[0]?.filename}`}
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
