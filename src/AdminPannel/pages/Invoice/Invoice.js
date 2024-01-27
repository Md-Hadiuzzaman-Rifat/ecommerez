import React from "react";
import InvoiceHeader from "./InvoiceHeader";
import InvoiceDetails from "./InvoiceDetails";
import InvoiceTotal from "./InvoiceTotal";
import "./Invoice.scss"

const Invoice = () => {
  return (
    <div className="Invoice">
      <div>
        <InvoiceHeader />
        <InvoiceDetails />
        <InvoiceTotal />
      </div>
    </div>
  );
};

export default Invoice;
