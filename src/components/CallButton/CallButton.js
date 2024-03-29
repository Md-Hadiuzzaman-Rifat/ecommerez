import React from "react";
import "./CallButton.scss";
import { BiSolidPhoneCall } from "react-icons/bi";

const CallButton = () => {
  const handleFacebook=()=>{
    window.open('https://www.facebook.com/thespectacle23', '_blank');
  }
  
  return (
    <div className="CallButton">
      <div className="facebook" onClick={handleFacebook}>Facebook</div>
      <div className="callAnimation">
      <div className="animate"></div>
      <div className="animate second"></div>
      <div className="animatePhone">
        <a href="tel:+8801876273090">
        <BiSolidPhoneCall />
        </a>
      </div>
      </div>
    </div>
  );
};

export default CallButton;
