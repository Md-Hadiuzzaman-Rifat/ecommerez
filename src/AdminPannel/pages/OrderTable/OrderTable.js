import React, { useEffect } from 'react';
import "./OrderTable.scss"
import OrderTableBody from '../../components/OrderTableBody/OrderTableBody';
import { useState } from 'react';

const OrderTable = () => {
  const [orderList, setOrderList]= useState([])


useEffect(()=>{
  fetch("http://localhost:2020/orderedProduct")
  .then(res=>res.json())
  .then(data=>setOrderList(data))
},[])


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
          
          <tbody>
            {/* // table body  */}
          {
            orderList?.length >0 && orderList.map(item=><OrderTableBody key={item._id} item={item}></OrderTableBody>)
          }
          </tbody>
        </table>
        </div>
    );
};

export default OrderTable;