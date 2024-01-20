import React from "react";
import { ImBin } from "react-icons/im";
import { FiEdit } from "react-icons/fi";

const TableBody = () => {
  return (
    <tr className="tableBody">
      <td>Leica</td>
      <td>Lense</td>
      <td>2000</td>
      <td>20%</td>
      <td>
        <img
          className="table-img"
          src="https://mykitamedia.com/media/image/2020/11/02_mykita_leica_optical_ml07_landscape.jpg"
          alt=""
        />
        <img
          className="table-img"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrOJSc2-5DkX1JScbalvUwegBOVqG3oBXU5q-_BKIlIA&s"
          alt=""
        />
      </td>
      <td className="productAction">
        <span className="productDelete">
          <ImBin />{" "}
        </span>
        <span className="productEdit">
          <FiEdit />
        </span>
      </td>
    </tr>
  );
};

export default TableBody;
