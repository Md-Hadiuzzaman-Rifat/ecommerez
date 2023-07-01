import React from 'react';
import Banner from "../Banner/Banner"
import Footer from "../Footer/Footer"
import Showcase from '../Showcase/Showcase';
import Category from "../Category/Category"
const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Showcase></Showcase>
            <Category></Category>
            <Footer></Footer>
        </div>
    );
};

export default Home;