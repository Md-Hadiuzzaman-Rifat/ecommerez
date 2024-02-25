import React from "react";
import "./ProfileOrderTable.scss";

const ProfileOrderTable = ({ item, total }) => {
  let {
    name,
    amount,
    category,
    description,
    discount,
    featured,
    gender,
    price,
    tags,
    _id,
    image,
  } = item;

  
  if (_id?.length > 10) {
    _id = _id.substring(0, 7) + "...";
  }

  return (
    <tr className="ProfileOrderTable">
      <td>{name}</td>
      <td>{_id}</td>
      <td>
        <img src={image[0]} alt="" />
      </td>
      <td>{price-discount}</td>
      <td>{amount}</td>
    </tr>
  );
};
export default ProfileOrderTable;
