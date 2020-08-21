import React from 'react';
import Header from '../../../HomePage/Part1-components/header/Header';

export default function HeaderSection() {
    return (
        <>
            <div className="header">
                <Header />
            </div>
            <div className="navigate-section">
                <a href="#form" className="navigate-button">
                    <img src="images/arrow-down.png" />
                </a>
                <h1>إستعادة كلمة المرور</h1>
            </div>
        </>
    );
}