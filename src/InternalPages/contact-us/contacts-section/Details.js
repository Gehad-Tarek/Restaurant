import React from 'react';
import PhoneNumber from './details/PhoneNumber';
import Address from './details/Address';
import Email from './details/Email';
import WhatsApp from './details/WhatsApp';
import SocialMedia from './details/SocialMedia';

export default function Details() {
    return (
        <div className="details">
            <div className="contact">
                <PhoneNumber />
            </div>
            <div className="contact">
                <Address />
            </div>
            <div className="contact">
                <Email />
            </div>
            <div className="contact">
                <WhatsApp />
            </div>
            <div className="contact">
                <SocialMedia />
            </div>
        </div>
    );
}