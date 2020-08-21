import React from 'react';
import logo from '../../../../svg/logo.svg';
import facebook from '../../../../svg/facebook.svg';
import twitter from '../../../../svg/twitter.svg';

export default function SocialMedia() {
    return (
        <div className="social-media-icons">
            <a href="https://twitter.com/MasryJed" title="تويتر" className="svg-icon">
                <img src={twitter} />
            </a>
            <a href="https://www.facebook.com/egyptianRestaurant/" title="فيس بوك" className="svg-icon">
                <img src={facebook} />
            </a>
            <a href="https://www.instagram.com/egyptianrestaurant/" title="انستجرام" className="svg-icon">
                <img src={logo} />
            </a>
        </div>
    );
}