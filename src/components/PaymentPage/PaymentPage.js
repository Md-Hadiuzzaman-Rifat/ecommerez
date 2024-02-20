import React, { useEffect, useState } from "react";
import "./PaymentPage.scss";
import { useLocation, useNavigate } from "react-router-dom";
import Button from "../Button/Button"
import { usePurchaseOrderMutation } from "../../features/confirmOrder/confirmOrder";
import { clearTheCart } from "../../utilities/localStorage";
import { useDispatch } from "react-redux";
import { resetOrder } from "../../features/orderProduct/orderProductSlice";

const PaymentPage = () => {
  const location = useLocation();
  const { payable } = location?.state?.product || {};
  const [tranId, setTranId]=useState("")
  const [paid, setPaid]=useState()
  let {product}=location?.state || {}
  
  

  const [order, {isSuccess, isError, isLoading}]=usePurchaseOrderMutation()

  const dispatch= useDispatch()
  const navigate= useNavigate()
  
  useEffect(()=>{
    if(isSuccess){
      // reset()
      clearTheCart()
      dispatch(resetOrder())
      alert("Order Confirmed")
      navigate('/orderSuccess')
    }
  },[isSuccess, dispatch])

  const handleSubmit=(e)=>{
    e.preventDefault()
    
     order({
      ...product,
      advancePaid:paid,
      transactionId:tranId
     })
     clearTheCart()
  }

  return (
    <div className="payment">
      {!location?.state?.product && "Loading..."}
      {location?.state?.product && (
        <div className="container">
          <div className="box">
            <h3 className="box-inline">Price Total: {payable}</h3>
            <div className="content">
              <h3>
                Cash On Delivery এর জন্য কুরিয়ার ফি পরিশোধ করা লাগবে। ঢাকার ভিতর
                খরচ পরবে ৬০ টাকা আর ঢাকার বাইরে ১০০ টাকা
              </h3>
              <p>
                টাকা পরিশোধ করতে বিকাশের পেমেন্ট অপশনে ক্লিক করে <span>01970134360</span> এই
                নম্বরে এমাউন্ট বসিয়ে পেমেন্ট করুন।
              </p>

              <p>
                এর পর আপনি যে বিকাশ নম্বর অথবা ট্রানজেকশন আই ডি (যে কোনো একটি)
                দিয়ে পেমেন্ট করেছেন। সেই সাথে কত টাকা পেমেন্ট করেছেন তা নিচের
                ইনপুট বক্সে লিখুন।{" "}
              </p>

              <p>
                আপনার লেনদেনটি সম্পূর্ণ হলে এক ঘন্টার মধ্যে আপনাকে মেসেজ অথবা কল
                করে জানানো হবে।
              </p>

              <div className="input-box">
                <input
                  type="text"
                  onChange={e=>setTranId(e.target.value)}
                  placeholder="বিকাশ নম্বর অথবা ট্রানজেকশন আই ডি "
                />
                <input type="number"
                onChange={e=>setPaid(e.target.value)} placeholder="প্রদানকৃত অর্থের পরিমান" />
                <Button onClick={handleSubmit}>Submit</Button>
              </div>
              
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PaymentPage;
