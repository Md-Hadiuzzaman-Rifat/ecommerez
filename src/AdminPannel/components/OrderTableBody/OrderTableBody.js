import React, { useState } from "react";
import { IoMdDownload } from "react-icons/io";
import { Link } from "react-router-dom";
import { TbEyeClosed } from "react-icons/tb";
import { FaEdit } from "react-icons/fa";
import "./OrderTableBody.scss"
import { useEditOrderMutation } from "../../../features/confirmOrder/confirmOrder";


const OrderTableBody = ({item}) => {
 

  const {_id, timestamp, status}= item
  const [orderStatus, setOrderStatus]=useState(status)
  
  const [editOrder,{isLoading, isError}]=useEditOrderMutation()


  const handleEdit=(e)=>{
    setOrderStatus(e)
    editOrder({id:_id,status:e})
  }
  
  return (
      <tr className="orderTableBody">
        <td><Link target="_blank" to={`${_id}`}>{_id}</Link></td>
        <td>cash</td>
        <td>{timestamp}</td>
        <td>
        <select
            name="category"
            required
            id=""
            className={`${orderStatus}`}
            // value={orderStatus}
            onChange={(e) => handleEdit(e.target.value)}
          >
            <option value="pending">Pending</option>
            <option value="failed">Failed</option>
            <option value="delivered">Delivered</option>
            <option value="received">Received</option>
          </select>
        </td>
        <td>1200</td>
        <td className="productAction">
          <div className="content">
          <Link to=""><IoMdDownload></IoMdDownload></Link>
          <Link to=""><TbEyeClosed></TbEyeClosed></Link>
          <Link to=""><FaEdit></FaEdit></Link>
          </div>
        </td>
      </tr>
  );
};

export default OrderTableBody;
