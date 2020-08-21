import React from "react";
import blackLogo from '../../svg/blackLogo.svg';
import blackFacebook from '../../svg/blackFacebook.svg';
import blackTwitter from '../../svg/blackTwitter.svg';

export default function SocialMedia() {
    return (
        <div className="social-media-icons">
            <a href="https://www.instagram.com/egyptianrestaurant/" title="انستجرام" className="svg-icon">
                <img src={blackLogo} />
            </a>
            <a href="https://www.facebook.com/egyptianRestaurant/" title="فيس بوك" className="svg-icon">
                <img src={blackFacebook} />
            </a>
            <a href="https://twitter.com/MasryJed" title="تويتر" className="svg-icon">
                <img src={blackTwitter} />
            </a>
        </div>
    );
}