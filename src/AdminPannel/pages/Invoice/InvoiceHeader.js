import React from "react";

const InvoiceHeader = ({details}) => {
  return (
    <div className="invoiceHeader">
      <div className="invoice-top">
        <div>
          <h1 className="invoice-logo">Shohag Eye Care</h1>
          <h4>Invoice: {details._id}</h4>
          <p>Date: {details.timestamp}</p>
        </div>
        
        <div className="invoice-text">
          <h1>Invoice</h1>
        </div>
      </div>
      <hr />
      <div className="invoice-billing">
        <div>
          <p>
            Bill from: <strong>Shohag Eye care</strong>
          </p>
          <p>Address: {details.address}</p>
          <p>Zip Code: {details.zip}</p>
          <p>Phone: {details.phone}</p>
        </div>
        <div>
          <p>
            Bill to: <strong>{details.firstName} {details.lastName}</strong>
          </p>
          <p>Email: {details.email}</p>
        </div>
      </div>
      {/* <hr /> */}
    </div>
  );
};

export default InvoiceHeader;
