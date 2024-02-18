import React from 'react';

const InvoiceItem = ({item}) => {
    return (
        <tr>
              <td>{item.name}</td>
              <td>{item.amount}</td>
              <td>{item.price}</td>
              <td>0</td>
            </tr>
    );
};

export default InvoiceItem;