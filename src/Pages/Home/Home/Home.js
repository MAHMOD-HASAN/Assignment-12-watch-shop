import React from 'react';
import Banner from '../Banner/Banner';
import Products from '../Products/Products';
import Header from '../Shared/Header';
import Footer from '../Shared/Footer';
import Reviews from '../Reviews/Reviews';


const Home = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <Products></Products>
            <Reviews></Reviews>
            <Footer></Footer>
        </div>
    );
};

export default Home;