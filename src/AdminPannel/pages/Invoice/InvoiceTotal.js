import React from "react";

const InvoiceTotal = () => {
  return (
    <div className="invoiceTotal">
      <div className="invoice-content">
        <div>
          <p>Terms & Conditions:</p>
        </div>
        <div className="total-cost">
          <div className="left">
            <p>Subtotal:</p>
            <p>Discount:</p>
            <p>Total:</p>
          </div>
          <div className="right">
            <p>1200 Taka</p>
            <p>200 Taka</p>
            <p>1000 Taka</p>
          </div>
        </div>
      </div>
      <hr />
      <div className="invoice-payable">
        <h2>Total: 200</h2>
      </div>
    </div>
  );
};

export default InvoiceTotal;
