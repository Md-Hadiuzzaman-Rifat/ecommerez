import React from 'react';
import Banner from "../Banner/Banner"
import Footer from "../Footer/Footer"
import Showcase from '../Showcase/Showcase';
import Category from "../Category/Category";
import Newsletter from '../Newsletter/Newsletter';
import HotSales from '../HotSales/HotSales';
const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Showcase></Showcase>
            <Category></Category>
            <HotSales></HotSales>
            <Newsletter></Newsletter>
            <Footer></Footer>
        </div>
    );
};

export default Home;