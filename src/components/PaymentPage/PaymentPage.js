import React, { useEffect, useState } from "react";
import "./PaymentPage.scss";
import { useLocation, useNavigate } from "react-router-dom";
import Button from "../Button/Button";
import { usePurchaseOrderMutation } from "../../features/confirmOrder/confirmOrder";
import { clearTheCart } from "../../utilities/localStorage";
import { useDispatch } from "react-redux";
import { resetOrder } from "../../features/orderProduct/orderProductSlice";

const PaymentPage = () => {
  const location = useLocation();
  const { payable } = location?.state?.product || {};
  const [tranId, setTranId] = useState("");
  const [paid, setPaid] = useState("");
  let { product } = location?.state || {};

  const [order, { isSuccess, isError, isLoading }] = usePurchaseOrderMutation();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (isSuccess) {
      // reset()
      clearTheCart();
      dispatch(resetOrder());
      alert("Order Confirmed");
      navigate("/orderSuccess");
    }
  }, [isSuccess, dispatch]);

  const handleSubmit = (e) => {
    e.preventDefault();

    order({
      ...product,
      advancePaid: paid,
      transactionId: tranId,
    });
    clearTheCart();
  };

  return (
    <div className="payment">
      {!location?.state?.product && "Loading..."}
      {location?.state?.product && (
        <div className="container">
          <img className="payment_bkash" src="/shohag/bkash.svg" alt="" />
          <div className="box">
            <div className="box-content">
            <img src="/shohag/thespectacle.png" alt="" />
            <h3 className="box-inline">Price Total: {payable}</h3>
            
            </div>
            <div className="content">
              <p>
                ১. <span>*247#</span> ডায়েল করে আপনার Bkash মোবাইল মেনু তে যান অথবা BKASH App
                এ যান।
              </p>
              
              <p>২. <span>Send Money</span> এ ক্লিক করুন।</p>

              <p>৩. প্রাপক নম্বর হিসেবে লিখুন <span>01876273090</span></p>

              <p>৪. ডেলিভারি চার্জ পরিশোধ করে অর্ডার কনফর্ম করুন। ( ডেলিভারি চার্জঃ <span>ঢাকার ভিতর ৬০ টাকা</span> ও <span>ঢাকার বাইরে ১০০ টাকা</span> )</p>
              <p>
                ৫. সব কিছু ঠিক থাকলে BKASH থেকে একটি বার্তা পাবেন।
              </p>
              <p>
                ৬। আপনার <span>বিকাশ নম্বর</span> ও <span>Transaction ID</span> দিয়ে নিচের ফর্ম পুরন করুন।
              </p>

              <form className="input-box" onSubmit={handleSubmit}>
                <input
                  type="text"
                  onChange={(e) => setTranId(e.target.value)}
                  placeholder="Bkash নম্বর"
                  required
                />
                <input
                  type="text"
                  onChange={(e) => setPaid(e.target.value)}
                  placeholder="Transaction ID / প্রদানকৃত অর্থের পরিমান"
                />
                <Button className="payment-button" type="submit">Submit</Button>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PaymentPage;
