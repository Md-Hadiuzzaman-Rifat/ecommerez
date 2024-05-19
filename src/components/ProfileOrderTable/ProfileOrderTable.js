import React from "react";
import "./ProfileOrderTable.scss";

const ProfileOrderTable = ({ item, total }) => {

  let {
    name,
    category,
    description,
    discount,
    featured,
    gender,
    price,
    tags,
    image,
  } = item?.description;
  let {_id, images}= item || {}

  
  if (_id?.length > 10) {
    _id = _id.substring(0, 7) + "...";
  }

  return (
    <tr className="ProfileOrderTable">
      <td>{name}</td>
      <td>{_id}</td>
      <td>
        <img src={`http://localhost:25000/images/${images?.[0]?.filename}`} alt="" />
      </td>
      <td>{price-discount}</td>
      <td>{item?.amount}</td>
    </tr>
  );
};
export default ProfileOrderTable;
