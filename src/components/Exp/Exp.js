import React from "react";
import "./Exp.scss";

const Exp = () => {
  return (
    <div className="alert">
      <div className="alert-container">
        <div>Product Added Successfully</div>
        <div className="alert-btn">
          <button className="alert-success">View Status</button>
          <button>Close</button>
        </div>
      </div>
    </div>
  );
};

export default Exp;
