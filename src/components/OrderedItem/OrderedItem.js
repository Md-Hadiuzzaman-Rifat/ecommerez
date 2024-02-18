import React from "react";
import ProfileOrderTable from "../ProfileOrderTable/ProfileOrderTable";
import "./OrderedItem.scss";

const OrderedItem = ({ item }) => {
  const {
    advancePaid,
    _id,
    address,
    city,
    country,
    firstName,
    lastName,
    email,
    phone,
    order,
    status,
    timestamp,
  } = item || {};

  // console.log(order);

  let total = 0;
  function orderTotal(order) {
    for (let i = 0; i < order.length; i++) {
      total = total + order[i].amount * order[i].price;
      // console.log(order[i]);
      // console.log(order[i].amount * order[i].price);
    }
  }

  orderTotal(order);
  console.log(total);

  return (
    <div style={{ marginBottom: "60px" }} className="OrderItem">
      <p>orderId: {_id}</p>
      <h4>Date: {timestamp}</h4>
      <h3>
        Order Status: <span>{status}</span>
      </h3>
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
      <h2 style={{color:"blueViolate"}}>Payable Amount: {total} Taka + Delivery charge</h2>
      <h2>Already paid: {advancePaid} Taka</h2>
      <hr className="hr" />
    </div>
  );
};

export default OrderedItem;
