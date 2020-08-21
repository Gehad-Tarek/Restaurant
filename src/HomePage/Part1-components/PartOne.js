import React from 'react';
import Header from './header/Header';
import Intro from './restaurant-intro/Intro';
import Carousel from './carousel/Carousel';

export default function PartOne() {
    return (
        <div className="partOne-content">
            <div className="header">
                <Header />
            </div>
            <div className="restaurant-intro">
                <Intro />
            </div>
            <div className="carousel">
                <Carousel />
            </div>
        </div>
    );
}