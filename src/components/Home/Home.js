import React from 'react';
import Banner from "../Banner/Banner"
import Footer from "../Footer/Footer"
import Showcase from '../Showcase/Showcase';
import Category from "../Category/Category";
import Newsletter from '../Newsletter/Newsletter';
import HotSales from '../HotSales/HotSales';
import DiscountSell from '../Discount/DiscountSell';
import ProductLayout from "../ProductLayout/ProductLayout"
import {useAuth} from "../../context/AuthContext"

const Home = () => {
    const {currentUser}=useAuth()
    console.log(currentUser);
    return (
        <div>
            <Banner></Banner>
            <Showcase></Showcase>
            <ProductLayout></ProductLayout>
            <DiscountSell></DiscountSell>
            <Newsletter></Newsletter>
            <Footer></Footer>
        </div>
    );
};

export default Home;