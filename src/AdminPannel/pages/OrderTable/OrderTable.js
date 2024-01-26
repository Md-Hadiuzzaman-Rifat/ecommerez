import React from 'react';
import "./OrderTable.scss"
import OrderTableBody from '../../components/OrderTableBody/OrderTableBody';

const OrderTable = () => {
    return (
        <div className='orderTable'>
            <table>
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Payment</th>
              <th>Order Date</th>
              <th>Status</th>
              <th>Total</th>
              <th>Action</th>
            </tr>
          </thead>
          {/* // table body  */}
          <OrderTableBody></OrderTableBody>
          <tbody>
            
          </tbody>
        </table>
        </div>
    );
};

export default OrderTable;