import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import Aboutus from '../About/About';
import Banner from '../Banner/Banner';
import Review from '../Review/Review';
import Service from '../Service/Service';



const Home = () => {
    return (
        <div>
            <Navigation/>
            <Banner></Banner>
            <Service></Service>
            <Review></Review>
            <Aboutus/>
            <Footer></Footer>
        </div>
    );
};

export default Home;