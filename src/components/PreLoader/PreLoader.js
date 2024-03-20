import React, { useEffect } from "react";
import "./PreLoader.scss"
import { preLoaderAnim } from "../../animations/animations";

const PreLoader = () => {
  useEffect(() => {
    preLoaderAnim();
  }, []);

  return (
    <div className="preloader">
      <div className="texts-container">
        <span className="preloader_the">THE</span>
        <span className="preloader_group">
        <span>SPEC</span>
        <span>TACLE</span>
        </span>
        <span className="preloader_number">23</span>
      </div>
    </div>
  );
};

export default PreLoader;