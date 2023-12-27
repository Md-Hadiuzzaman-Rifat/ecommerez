import React from "react";
import "./Footer.scss";
import { BiSolidNavigation } from "react-icons/bi";
import { GiSmartphone } from "react-icons/gi";
import { MdEmail } from "react-icons/md";
const Footer = () => {
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
          <p> <span>&gt;</span> Smart Phone</p>
          <p><span>&gt;</span> Headset</p>
          <p><span>&gt;</span> Airbuds</p>
          <p><span>&gt;</span> Charger</p>
          <p><span>&gt;</span> Accessories</p>
          <p><span>&gt;</span> Laptop</p>
        </div>
        <div>
          <h3>Pages</h3>
          <p>Lorem, ipsum.</p>
          <p>Lorem, ipsum.</p>
          <p>Lorem, ipsum.</p>
          <p>Lorem, ipsum.</p>
          <p>Lorem, ipsum.</p>
          <p>Lorem, ipsum.</p>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
