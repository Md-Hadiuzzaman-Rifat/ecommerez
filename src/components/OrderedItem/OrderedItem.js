import React from "react";
import ProfileOrderTable from "../ProfileOrderTable/ProfileOrderTable";
import "./OrderedItem.scss"

const OrderedItem = ({ item }) => {
  const {
    _id,
    address,
    city,
    country,
    firstName,
    lastName,
    email,
    phone,
    status,
    timestamp,
  } = item || {};

  return (
    <div style={{ marginBottom: "60px" }} className="OrderItem">
      <p>orderId: {_id}</p>
      <h4>Date: {timestamp}</h4>
      <h3>Order Status: <span>{status}</span></h3>
      <table>
        <thead>
            <tr>
            <th>Name</th>
            <th>Id</th>
            <th>Image</th>
            <th>Price</th>
            <th>Amount</th>
            </tr>
        </thead>
      
      <tbody>
      {item.order
        .filter((item) => item.amount !== 0)
        .map((item) => (
            <ProfileOrderTable key={item._id} item={item} />
        ))}
      </tbody>
      </table>
      <hr className="hr"/>
    </div>
  );
};

export default OrderedItem;
