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
              টাকা পরিশোধ করতে বিকাশের Send Money অপশনে ক্লিক করে <span>01876273090</span> এই
                নম্বরে আপনার প্রয়োজন মত এমাউন্ট বসিয়ে সেন্ড করুন।
              </h3>
              <p>

                Cash On Delivery মাধ্যমে পণ্য পেতে হলে আপনাকে শুধু মাত্র কুরিয়ার ফি পরিশোধ করতে হবে। বাকি টাকা পণ্য হাতে পাবার পর পরিশোধ করা লাগবে। ঢাকর মধ্যে কুরিয়ার ফি ৬০ টাকা ও ঢাকার বাইরে কুরিয়ার ফি ১১০ টাকা।
              </p>

              <p>
                টাকা পরিশোধের পর আপনি যে বিকাশ নম্বর থেকে টাকা প্রদান করেছেন সে নম্বরটি
                  এবং কত টাকা পেমেন্ট করেছেন তা নিচের
                ইনপুট বক্সে লিখুন।{" "}
              </p>

              <p>
                আপনার লেনদেনটি সম্পূর্ণ হলে এক ঘন্টার মধ্যে আপনাকে মেসেজ অথবা কল
                করে
                 জানানো হবে।
              </p>
              <p className="problem">
                আপনার যে কোনো সমস্যার জন্য ফেসবুক পেজে মেসেজ করতে পারেন অথবা আমাদের সাথে সরাসরি যোগাযোগ করতে পারেন +8801876273090 এই নম্বরে। 
              </p>

              <form className="input-box" onSubmit={handleSubmit}>
                <input
                  type="text"
                  onChange={e=>setTranId(e.target.value)}
                  placeholder="বিকাশ নম্বর অথবা ট্রানজেকশন আই ডি "
                  required
                />
                <input type="number"
                onChange={e=>setPaid(e.target.value)} placeholder="প্রদানকৃত অর্থের পরিমান" />
                <Button type="submit">Submit</Button>
              </form>
              
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PaymentPage;
