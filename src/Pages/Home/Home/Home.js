import React from 'react';
import Items from '../../Items/Items';
import Banner from '../Banner/Banner';
import './Home.css';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Items></Items>
        </div>
    );
};

export default Home;