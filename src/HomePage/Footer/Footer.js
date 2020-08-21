import React from "react";
import FooterLinks from "./FooterLinks";
// import SocialMedia from "../../InternalPages/contact-us/contacts-section/details/SocialMedia";
import SocialMedia from "./SocialMedia";

export default function Footer() {
    return (
        <div className="footer">
            <div className="footer-links">
                <FooterLinks />
            </div>
            <div className="social-media">
                <SocialMedia />
            </div>
        </div>
    );
}