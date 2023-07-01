import React from "react";
import "./Showcase.scss";

const Showcase = () => {
  return (
    <div>
      <div className="showcase">
        <div className="showcase_container">
          <div className="showcase_container_image">
            <div className="showcase_productName">
              <h1>Headset</h1>
            </div>
            <img src="/headset.png" alt="Showcase Product" />
          </div>
          <div className="showcase_container_image">
            <div className="showcase_productName">
              <h1>Headset</h1>
            </div>
            <img src="/headset.png" alt="Showcase Product" />
          </div>
          <div className="showcase_container_image">
            <div className="showcase_productName">
              <h1>Headset</h1>
            </div>
            <img src="/headset.png" alt="Showcase Product" />
          </div>
          <div className="showcase_container_image">
            <div className="showcase_productName">
              <h1>Headset</h1>
            </div>
            <img src="/headset.png" alt="Showcase Product" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Showcase;
