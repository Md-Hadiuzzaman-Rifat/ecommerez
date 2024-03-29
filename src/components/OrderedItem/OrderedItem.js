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
      total = total + order[i].amount * (order[i].price - order[i].discount);
      // console.log(order[i]);
      // console.log(order[i].amount * order[i].price);
    }
  }

  orderTotal(order);

  const currentStatus=(status)=>{
    switch(status){
      case "pending":
        return "orange";
        case "failed":
          return "red";
          case "received":
            return "blue";
            case "delivered":
              return "green"
              default:
                return "yellow"
    }
  }

  return (
    <div style={{ marginBottom: "60px" }} className="OrderItem">
      <p>orderId: {_id}</p>
      <h4>Date: {timestamp}</h4>
      <h3 className="status" style={{backgroundColor:currentStatus(status)}}>
        Order Status: <span>{status.toUpperCase()}</span>
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
