import { useEffect, useState } from "react";
import ImageSlider from "./ImageSlider";
import "./Slider.scss"

const Slider = () => {

    const [products, setProducts]= useState([])
    useEffect(()=>{
        fetch(`http://localhost:2020/featuredProduct`)
          .then(res=>res.json())
          .then(data=>setProducts(data))
      },[])

      let filtered = products.filter(item=>item?.featured)
      console.log(filtered);


  return (
    <div className="slider">
      <div className="containerStyles">
        {products?.length >=0 && <ImageSlider slides={filtered} />}
        {products?.length ===0 && "Loading" }
      </div>
    </div>
  );
};

export default Slider;