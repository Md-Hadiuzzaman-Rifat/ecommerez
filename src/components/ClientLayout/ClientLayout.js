import React from "react";
import "./ClientLayout.scss";
import { IoCall } from "react-icons/io5";

const ClientLayout = ({ children }) => {
  return (
    <div className="ClientLayout">
      {children}
      <div className="callingFeature">
        <div className="phone">

        </div>
        <div className="phone">

        </div>
        <div className="phone-number">
          <a href="tel:+8801876273090">
            <IoCall />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ClientLayout;
