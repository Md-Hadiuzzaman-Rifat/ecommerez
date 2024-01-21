import React, { useEffect } from "react";
import { ImBin } from "react-icons/im";
import { FiEdit } from "react-icons/fi";
import { string } from "i/lib/util";
import "./TableBody.scss"
import { Link } from "react-router-dom";
import { useDeleteProductMutation } from "../../../features/product/productApi";

const TableBody = ({data}) => {
  let {name, category, discount,_id, image, price}= data || {}

  const dis=Math.floor((discount/price)*100)

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

  return (
    <tr className="tableBody">
      <td>{name}</td>
      <td>{category}</td>
      <td>{price}</td>
      <td>{dis}%</td>
      <td>
        <img
          className="table-img"
          src={image}
          alt=""
        />
        <img
          className="table-img"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrOJSc2-5DkX1JScbalvUwegBOVqG3oBXU5q-_BKIlIA&s"
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
