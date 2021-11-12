import React from 'react';
import Banner from '../Banner/Banner';
import Products from '../Products/Products';
import Header from '../Shared/Header';
import Footer from '../Shared/Footer';


const Home = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <Products></Products>
            <Footer></Footer>
        </div>
    );
};

export default Home;