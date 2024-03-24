import React from "react";
import "./CallButton.scss";
import { FaPhoneAlt } from "react-icons/fa";

const CallButton = () => {
  return (
    <div className="CallButton">
      <div className="callAnimation">
      <div className="animate"></div>
      <div className="animate second"></div>
      <div className="animatePhone">
        <a href="tel:+8801910803372">
          <FaPhoneAlt />
        </a>
      </div>
      </div>
    </div>
  );
};

export default CallButton;
