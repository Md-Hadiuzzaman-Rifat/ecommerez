import React from "react";
import InvoiceItem from "./InvoiceItem";

const InvoiceDetails = () => {
  return (
    <div className="InvoiceDetails">
      <table>
        <thead>
          <tr>
            <th>Item</th>
            <th>Quantity</th>
            <th>Rate</th>
            <th>Tax</th>
          </tr>
        </thead>
        <tbody>
          <InvoiceItem></InvoiceItem>
          <InvoiceItem></InvoiceItem>
          <InvoiceItem></InvoiceItem>
        </tbody>
      </table>
      <hr />
    </div>
  );
};

export default InvoiceDetails;
