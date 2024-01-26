import React from 'react';
import InvoiceHeader from './InvoiceHeader';
import InvoiceDetails from './InvoiceDetails';
import InvoiceTotal from './InvoiceTotal';

const Invoice = () => {
    return (
        <div>
            <div>
        <InvoiceHeader  />
        <InvoiceDetails  />
        <InvoiceTotal  />
      </div>
        </div>
    );
};

export default Invoice;