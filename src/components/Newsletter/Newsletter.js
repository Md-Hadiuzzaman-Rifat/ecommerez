import React from "react";
import "./Newsletter.scss";

const Newsletter = () => {
  return (
    <div className="newsletter">
      <div
        style={{ backgroundImage: `url(${"/newsletter-bg.jpeg"})` }}
        className="newsletter_content"
      >
        <p>NEWSLETTER</p>
        <h3>SIGNUP FOR LATEST UPDATE AND OFFERS</h3>
        <div className="content_input">
          <input type="text" />
          <button>Submit</button>
        </div>
        <span>Will be used accordance with our Privacy Policy.</span>
        <div className="content_links"></div>
      </div>
    </div>
  );
};

export default Newsletter;
