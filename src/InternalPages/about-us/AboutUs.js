import React from 'react';
import '../../style.scss';
import './aboutUs.scss';
import HeaderSection from './HeaderSection';
import CommonComponents from './CommonComponents';

export default function AboutUs() {
    return (
        <div className="about-us">
            <div className="partOne-content">
                <HeaderSection />
            </div>
            <div className="common-part">
                <CommonComponents />
            </div>
        </div>
    );
}