import React from 'react';
import Marquee from 'react-fast-marquee';
import img1 from '../../images/parada-removebg-preview.png';
import img2 from '../../images/polaroid-removebg-preview.png';
import img3 from '../../images/rayban-removebg-preview.png';
import img4 from '../../images/rode-removebg-preview_s.png';
import img6 from '../../images/varilux-removebg-preview_s.png';
import img7 from '../../images/Zeiss-Logo-removebg-preview (1).png';
import img8 from '../../images/pngwing.com.png';
import "./BrandName.scss"

function BrandName() {
  return (
    <div className="Brand">
      <div className="title">
        <h2 style={{color:"gray", fontWeight:"400"}}>OUR OFFICIAL PARTNER</h2>
      </div>
      <div className='bg-gray'>
        <Marquee direction="right" speed={100} delay={1}>
          <div className="image_wrapper">
            <img src={img1} alt="" />
          </div>
          <div className="image_wrapper">
            <img src={img2} alt="" />
          </div>
          <div className="image_wrapper">
            <img src={img3} alt="" />
          </div>
          <div className="image_wrapper">
            <img src={img4} alt="" />
          </div>

          <div className="image_wrapper">
            <img src={img6} alt="" />
          </div>
          <div className="image_wrapper">
            <img src={img7} alt="" />
          </div>
          <div className="image_wrapper">
            <img src={img8} alt="" />
          </div>
        </Marquee>
      </div>
    </div>
  );
}

export default BrandName;