import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ImageSlider.scss";

const ImageSlider = ({ slides }) => {
  const navigate = useNavigate();

  const [currentIndex, setCurrentIndex] = useState(0);
  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };


  const slideStylesWidthBackground = {
    backgroundImage: `url(https://backend.thespectacle23.com/images/${slides[currentIndex]?.images[0]?.filename})`,
  };

  const handleControl = (id) => {
    navigate(`/productDetails/${id}`);
  };

  let discountPrice;
  if (slides[currentIndex]) {
    discountPrice =
      slides[currentIndex]?.description?.price - slides[currentIndex]?.description?.discount;
  } else {
    return "Lading";
  }

  return (
    <div className="sliderStyles">
      <div className="turn-icon">
        <div onClick={goToPrevious} className="leftArrowStyles">
          ❰
        </div>
        <div onClick={goToNext} className="rightArrowStyles">
          ❱
        </div>
      </div>
      <div className="slider-container">Top Selling</div>
      <div className="slider-discount">Upto 50% Off</div>

      <div
        onClick={() => handleControl(slides[currentIndex]?._id)}
        className="slideStyles"
        style={slideStylesWidthBackground}
      >
        {/* // slider description  */}
        <div className="slider-description">
          <div className="slider-content">
            <div className="discount_price">{slides[currentIndex]?.description?.name.substring(0, 22)}</div>
            <div style={{textDecoration:"line-through"}}>Regular Price: {slides[currentIndex]?.description?.price} Taka</div>
            <div>Offer Price: <span className="discount_price">{discountPrice} Taka</span></div>
          </div>
        </div>
      </div>
      <div className="dotsContainerStyles">
        {slides.map((slide, slideIndex) => (
          <div
            className="dotStyle"
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
          >
            ●
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;

