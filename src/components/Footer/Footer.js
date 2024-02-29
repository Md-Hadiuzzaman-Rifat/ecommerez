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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum sit
            rerum odio. Consectetur magni at, fugiat minus adipisci reiciendis
            aut.
          </p>
        </div>
        <div>
          <h3>Contact</h3>
          <p>
            <span>
              <BiSolidNavigation />
            </span>
            <span>Mirpur-12, Dhaka</span>
          </p>
          <p>
            <span>
              <GiSmartphone />
            </span>
            <span>+880-1910803372</span>
          </p>
          <p>
            <span>
              <MdEmail />
            </span>
            <span>hadirift100@gmail.com</span>
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
    </div>
  );
};

export default Footer;
