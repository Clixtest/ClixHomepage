import React from 'react';
import Banner from './Banner/Banner';
import CoreValues from './CoreValues/CoreValues';
import AboutClix from './AboutClix/AboutClix';
import OurProducts from './OurProducts/OurProducts';
import Innovation from './Innovation/Innovation';
import OurRoadmap from './OurRoadmap/OurRoadmap';
import OurFlowChart from './OurFlowChart/OurFlowChart';
import OurCollection from './OurCollection/OurCollection';
import OurTeam from './OurTeam/OurTeam';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <CoreValues></CoreValues>
            <AboutClix></AboutClix>
            <OurProducts></OurProducts>
            <Innovation></Innovation>
            <OurRoadmap></OurRoadmap>
            <OurFlowChart></OurFlowChart>
            <OurCollection></OurCollection>
            <OurTeam></OurTeam>
        </div>
    );
};

export default Home;