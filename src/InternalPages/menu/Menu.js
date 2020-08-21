import React from 'react';
import './menu.scss';
import HeaderSection from './HeaderSection/HeaderSection';
import Meals from './Meals/Meals';
import CommonComponents from './Common/CommonComponents';

export default function MenuPage() {
    return (
        <div className="menu-page">
            <div className="partOne-content">
                <HeaderSection />
            </div>
            <div className="meals" id={'meals'}>
                <Meals />
            </div>
            <div className="common-Part">
                <CommonComponents />
            </div>
        </div>
    );
}