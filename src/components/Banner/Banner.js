import React from "react";
import "./Banner.scss";
const Banner = () => {
  return (
    <div className="banner">
      <div className="banner_content">
        <div className="banner_description">
          <h1>Festival</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Non modi
            repellat dolores libero! Porro magni quas reiciendis nemo modi, qui
            unde non tempore, harum aliquid ullam dignissimos a voluptatibus
            accusantium.
          </p>
          <div className="banner_btn">
            <button><span>Shop Now</span></button>
            <button>Learn More</button>
          </div>
        </div>
        <div className="banner_img">
          <img src="/banner-img.png" alt="headphone" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
