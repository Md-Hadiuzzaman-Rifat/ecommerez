import React, { useEffect, useRef } from "react";
import Banner from "../Banner/Banner";
import Footer from "../Footer/Footer";
import Showcase from "../Showcase/Showcase";
import Category from "../Category/Category";
import Newsletter from "../Newsletter/Newsletter";
import HotSales from "../HotSales/HotSales";
import DiscountSell from "../Discount/DiscountSell";
import ProductLayout from "../ProductLayout/ProductLayout";
import { useAuth } from "../../context/AuthContext";
import { useState, CSSProperties } from "react";
import "./Home.scss";
import Blogs from "../Blogs/Blogs";
import Slider from "../ImageSlider/Slider";
import Preloader from "../PreLoader/PreLoader"
import { handleClose, searchClose } from "../../features/cartHandler/cartHandler";
import { useDispatch } from "react-redux";

const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};

const Home = () => {
  const dispatch= useDispatch()
  const { currentUser } = useAuth();
  let [loading, setLoading] = useState(true);
  let [color, setColor] = useState("#365ed6");

  useEffect(() => {
    dispatch(handleClose());
    dispatch(searchClose());
    window.scrollTo(0, 0);
  }, [dispatch]);


  return (
    <div className="Home">
      <Preloader></Preloader>
      <Banner></Banner>
      <Showcase></Showcase>
       {/* for small screen  */}
      {
        window.innerWidth <= 500 && <Slider></Slider>
      }
      {/* // for large screen  */}
      {
        window.innerWidth > 500 && <ProductLayout></ProductLayout>
      }
      <DiscountSell></DiscountSell>
      <Blogs></Blogs>
      <Newsletter></Newsletter>
      <div className="payment-banner">
      <img src="https://i0.wp.com/glassesbd.com/wp-content/uploads/2023/04/SSL-Commerz-Pay-With-logo-All-Size_Feb-2023-02-scaled.jpg?resize=1500%2C176&ssl=1" alt="" />
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Home;
