import React from "react";
import { useParams } from "react-router-dom";
import { useGetSingleOrderQuery } from "../../../features/confirmOrder/confirmOrder";
import "./ViewOrder.scss"

const ViewOrder = () => {
  const { orderId } = useParams();
  const { data, isLoading, isError } = useGetSingleOrderQuery(orderId);
  const {
    _id,
    address,
    timestamp,
    city,
    country,
    email,
    firstName,
    lastName,
    order,
    phone,
  } = data || [];
  console.log(order);
  return (
    <div className="viewOrder">
        
      {isLoading && "Loading..."}
      {!isLoading && data && (
        <div>
            <h4>Order Id: {_id}</h4> 
            <h2>Personal Details</h2>
            <div className="viewOrder_flex">
          <div className="left">
          
            <p>First Name: {firstName}</p>
            <p>Last Name: {lastName}</p>
            <p>Phone: {phone}</p>
            <p>Email: {email}</p>
          </div>
          <div className="right">
            <p>Country: {country}</p>
            <p>City: {city}</p>
            <p>Address: {address}</p>
            <p>Time: {timestamp}</p>
          </div>
        </div>
        </div>
      )}
    </div>
  );
};

export default ViewOrder;
