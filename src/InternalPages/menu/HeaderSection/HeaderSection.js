import React from 'react';
import Header from '../../../HomePage/Part1-components/header/Header';

export default function HeaderSection() {
    return (
        <>
            <div className="header">
                <Header />
            </div>
            <div className="navigate-section">
                <a href="#meals" className="navigate-button">
                    <img src="images/arrow-down.png" />
                </a>
                <div className="navigate-text">
                    <h1>الاكل والمشويات المصري</h1>
                    <p>بطعم وريحة القاهرة</p>
                </div>
            </div>
        </>
    );
}