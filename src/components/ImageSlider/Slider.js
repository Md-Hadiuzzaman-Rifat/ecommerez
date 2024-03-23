import { useEffect, useState } from "react";
import ImageSlider from "./ImageSlider";
import "./Slider.scss"

const Slider = () => {

    const [products, setProducts]= useState([])
    useEffect(()=>{
        fetch(`https://eye-care-back-end.vercel.app/featuredProduct`)
          .then(res=>res.json())
          .then(data=>setProducts(data))
      },[])
      let filtered = products.filter(item=>item?.featured)
    

  return (
    <div className="slider-content">
      <h2>Top Rated</h2>
      <div className="slider">
      <div className="containerStyles">
        {products?.length >=0 && <ImageSlider slides={filtered} />}
        {products?.length ===0 && "Loading" }
      </div>
    </div>
    </div>
    
  );
};

export default Slider;