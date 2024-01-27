import React from "react";

const InvoiceHeader = () => {
  return (
    <div className="invoiceHeader">
      <div className="invoice-top">
        <div>
          <h1 className="invoice-logo">Shohag Eye Care</h1>
          <h3>Invoice :24fdhfgf</h3>
          <p>Date: Dec 27, 2022</p>
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
          <p>Address</p>
          <p>Zip Code</p>
          <p>01919109</p>
        </div>
        <div>
          <p>
            Bill to: <strong>Rifat</strong>
          </p>
          <p>Rajshahi</p>
          <p>01910803372</p>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default InvoiceHeader;
