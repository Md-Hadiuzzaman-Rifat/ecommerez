import React from "react";
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
import { PacmanLoader, ScaleLoader } from "react-spinners";
import "./Home.scss";
import Blogs from "../Blogs/Blogs";

const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};

const Home = () => {
  const { currentUser } = useAuth();
  // console.log(currentUser);
  let [loading, setLoading] = useState(true);
  let [color, setColor] = useState("#365ed6");
  return (
    <div className="Home">
      {/* <div className="loader">
        <PacmanLoader color="#6268ff" margin={2} size={35} />
      </div> */}
      <Banner></Banner>
      <Showcase></Showcase>
      <ProductLayout></ProductLayout>
      <DiscountSell></DiscountSell>
      <Blogs></Blogs>
      <Newsletter></Newsletter>
      <Footer></Footer>
    </div>
  );
};

export default Home;
