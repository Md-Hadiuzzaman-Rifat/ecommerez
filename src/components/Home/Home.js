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
      <img src="https://i0.wp.com/glassesbd.com/wp-content/uploads/2023/04/SSL-Commerz-Pay-With-logo-All-Size_Feb-2023-02-scaled.jpg?resize=1500%2C176&ssl=1" alt="" />
      <Footer></Footer>
    </div>
  );
};

export default Home;
