import React from "react";
import "./Showcase.scss";
import { Link } from "react-router-dom";

const Showcase = () => {
  return (
      <div className="showcase">
        <div className="showcase_container">
          <div className="showcase_container_image">
            <Link to="/women">
            <div className="showcase_productName">
              <h1>Women</h1>
            </div>
            <img
              src="/shohag/weman_showcase.jpg"
              alt="Showcase Product"
            />
            </Link>
          </div>
          <div className="showcase_container_image">
            <Link to="/mans">
            <div className="showcase_productName">
              <h1>Mans</h1>
            </div>
            <img
              src="/shohag/mans_showcase.jpg"
              alt="Showcase Product"
            />
            </Link>
          </div>
          <div className="showcase_container_image">
            <Link to="/sunglass">
            <div className="showcase_productName">
              <h1>Sunglass</h1>
            </div>
            <img
              src="/shohag/sunglass_showcase.jpg"
              alt="Showcase Product"
            />
            </Link>
          </div>

          <div className="showcase_container_image">
            <Link to="/accessories">
              <div className="showcase_productName">
                <h1>Accessories</h1>
              </div>
              <img
                src="/shohag/accessories.jpg"
                alt="Showcase Product"
              />
            </Link>
          </div>
        </div>
      </div>
  );
};

export default Showcase;
