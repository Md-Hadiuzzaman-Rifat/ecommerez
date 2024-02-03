import "./OrderTable.scss"
import OrderTableBody from '../../components/OrderTableBody/OrderTableBody';
import { useState } from 'react';
import { useGetAllOrderedQuery } from '../../../features/confirmOrder/confirmOrder';

const OrderTable = () => {


// useEffect(()=>{
//   fetch("http://localhost:2020/orderedProduct")
//   .then(res=>res.json())
//   .then(data=>setOrderList(data))
// },[])

const {data, isLoading, isError}= useGetAllOrderedQuery()


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
              isLoading && "Loading..."
            }
          {
            data?.length >0 && data.map(item=><OrderTableBody key={item._id} item={item}></OrderTableBody>)
          }
          </tbody>
        </table>
        </div>
    );
};

export default OrderTable;