import React from "react";
import { Link } from "react-router-dom";

export default function FooterLinks() {
    return (
        <div className="content">
            <ul>
                <li>
                    <Link to="/about-us">من نحن</Link>
                </li>
                <li>
                    <Link to="/contact-us">اتصل بنا</Link>
                </li>
                <li>
                    <Link to="/menu">قائمة الطعام</Link>
                </li>
            </ul>
        </div>
    );
}