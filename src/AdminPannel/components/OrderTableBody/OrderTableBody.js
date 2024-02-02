import React from "react";
import { IoMdDownload } from "react-icons/io";
import { Link } from "react-router-dom";
import { TbEyeClosed } from "react-icons/tb";
import { FaEdit } from "react-icons/fa";
import "./OrderTableBody.scss"


const OrderTableBody = ({item}) => {
  const {_id, timestamp}= item
  return (
      <tr className="orderTableBody">
        <td>{_id}</td>
        <td>cash</td>
        <td>{timestamp}</td>
        <td>
          status
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
