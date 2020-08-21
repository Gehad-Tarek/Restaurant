import React from 'react';
import './contact-us.scss';
import HeaderSection from './header-section/HeaderSection';
import Contacts from './contacts-section/Contacts';
import Map from './map-section/Map';
import EmailUs from './email-section/EmailUs';
import CommonComponents from './common-section/CommonComponents';

export default function ContactUs() {
    return (
        <div className="contact-us">
            <div className="partOne-content">
                <HeaderSection />
            </div>
            <div className="contacts">
                <Contacts />
            </div>
            <div className="map">
                <Map />
            </div>
            <div className="email-us">
                <EmailUs />
            </div>
            <div className="common-components">
                <CommonComponents />
            </div>
        </div >
    );
}