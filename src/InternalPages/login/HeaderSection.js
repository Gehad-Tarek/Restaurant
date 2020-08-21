import React from 'react';
import Header from '../../HomePage/Part1-components/header/Header';

export default function HeaderSection() {
    return (
        <>
            <div className="header">
                <Header />
            </div>
            <div className="navigate-section">
                <h1>تسجيل  دخول</h1>
                <a href="#form" className="navigate-button">
                    <img src="images/arrow-down.png" />
                </a>
            </div>
        </>
    );
}