import React from "react";
import "./Showcase.scss";

const Showcase = () => {
  return (
    <div>
      <div className="showcase">
        <div className="showcase_container">
          <div className="showcase_container_image">
            <div className="showcase_productName">
              <h1>Women</h1>
            </div>
            <img src="https://us.123rf.com/450wm/deagreez/deagreez1806/deagreez180600853/103449238-portrait-with-copy-space-empty-place-of-nice-cute-trendy-charming-pretty-thoughtful-concentrated.jpg?ver=6" alt="Showcase Product" />
          </div>
          <div className="showcase_container_image">
            <div className="showcase_productName">
              <h1>Mans</h1>
            </div>
            <img src="https://img.freepik.com/free-photo/portrait-happy-bearded-young-man-glasses-standing-outdoors_171337-14763.jpg" alt="Showcase Product" />
          </div>
          <div className="showcase_container_image">
            <div className="showcase_productName">
              <h1>Sunglass</h1>
            </div>
            <img src="https://thumbs.dreamstime.com/b/beautifully-crafted-sunglasses-friendship-relations-fashion-models-trendy-glasses-couple-love-couple-man-beautifully-129861494.jpg" alt="Showcase Product" />
          </div>
          <div className="showcase_container_image">
            <div className="showcase_productName">
              <h1>Accessories</h1>
            </div>
            <img src="https://www.replacealens.com/v/images/Accessories/Eyeglasses-Accessories.jpg" alt="Showcase Product" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Showcase;
