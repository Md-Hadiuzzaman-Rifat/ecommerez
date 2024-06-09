import React from "react";
import "./Footer.scss";
import { BiSolidNavigation } from "react-icons/bi";
import { GiSmartphone } from "react-icons/gi";
import { MdEmail } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate= useNavigate()
  const changePage=(page)=>{
    navigate(`../${page}`,{
      replace:true
    })
  }
  return (
    <div className="footer">
      <div className="footer_content">
        <div className="footer_content_top">
        <div>
          <h3>About</h3>
          <p>
            ZEISS সহ বিভিন্ন অফিসিয়াল ব্র্যান্ডের প্রিমিয়াম লেন্স ও ফ্রেম পেতে আমাদের সাথে সরাসরি যোগাযোগ করেতে পারেন। এছাড়া আপনার পছন্দ মত পাইকারি দামে পন্য কিনতে আমাদের অফিসিয়াল ফেসবুক পেজে নক করতে পারেন। ক্রেতার হাতে সর্বোচ্চ মানের আসল পন্য পোঁছে দেয়া আমাদের মূল লক্ষ্য।
          </p>
        </div>
        <div>
          <h3>Contact</h3>
          <p>
            <span>
              <BiSolidNavigation />
            </span>
            <span>Mirpur-11, Dhaka</span>
          </p>
          <p>
            <span>
              <GiSmartphone />
            </span>
            <span>+880-1876273090</span>
          </p>
          <p>
            <span>
              <MdEmail />
            </span>
            <span>admin@thespectacle23.com</span>
          </p>
        </div>
        </div>
        <div className="footer_content_bottom">
        <div>
          <h3>Categories</h3>
          <p onClick={()=>changePage("sunglass")}> <span>&gt;</span> Sunglass</p>
          <p onClick={()=>changePage("women")}><span>&gt;</span> Women</p>
          <p onClick={()=>changePage("mans")}><span>&gt;</span> Man</p>
          <p onClick={()=>changePage("accessories")}><span>&gt;</span> Accessories</p>
        </div>
        <div className="footer-image">
            <h3>Sponsored</h3>
            <img src="https://i.ibb.co/0DTP4WM/image.png" alt="" />
        </div>
        </div>
      </div>
      <p className="footer_brand">This Web Application is created and maintained by <span>PIPRA SOFT</span></p>
    </div>
  );
};

export default Footer;
