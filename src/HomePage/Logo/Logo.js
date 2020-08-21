import React from "react";
import { Link } from "react-router-dom";

export default function Logo() {
    return (
        <div className="logo-section-content">
            <div className="left">
                <a href="https://www.rh.net.sa/">
                    <img src="images/rowaad.png" />
                </a>
                <p>تصميم وتنفيذ </p>
            </div>
            <div className="right">
                <h1>جميع الحقوق محفوظة للمطعم المصري للمشويات </h1>
                <Link to="/">
                    <img src="images/logo.png" />
                </Link>
            </div>
        </div>
    );

}