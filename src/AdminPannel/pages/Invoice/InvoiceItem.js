import React from 'react';

const InvoiceItem = ({item}) => {

    return (
        <tr>
              <td>{item?.description?.name}</td>
              <td>{item?.amount}</td>
              <td>{item?.description?.price - item?.description?.discount}</td>
              <td>0</td>
            </tr>
    );
};

export default InvoiceItem;