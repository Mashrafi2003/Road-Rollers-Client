import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
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
        </div>
    );
};

export default Home;