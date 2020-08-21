import React from 'react';
import Header from '../../../HomePage/Part1-components/header/Header';

export default function HeaderSection() {
    return (
        <div className="content">
            <div className="header">
                <Header />
            </div>
            <div className="navigate-section">
                <a href="#contacts" className="navigate-button">
                    <img src="images/arrow-down.png" />
                </a>
                <h1>اتصل بنا</h1>
            </div>
        </div>
    );
}