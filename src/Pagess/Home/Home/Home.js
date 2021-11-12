import React from 'react';
import Banner from '../Banner/Banner';
import ClientReview from '../ClientReview/ClientReview';
import HomesCar from '../HomesCar/HomesCar';
import MakeEasy from '../MakeEasy/MakeEasy';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <HomesCar></HomesCar>
            <MakeEasy></MakeEasy>
            <ClientReview></ClientReview>
        </div>
    );
};

export default Home;