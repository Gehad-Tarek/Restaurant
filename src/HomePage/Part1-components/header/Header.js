import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <div className="content">
            <ul>
                <Link to="/menu">
                    <li>
                        قائمة الطعام
                        <i class="fas fa-bars"></i>
                    </li>
                </Link>
                <Link to="/login">
                    <li>
                        دخول
                        <i class="far fa-user"></i>
                    </li>
                </Link>
                <Link to="/login">
                    <li>
                        0
                        <i class="fas fa-shopping-cart"></i>
                    </li>
                </Link>
                <Link to="/contact-us">
                    <li>
                        اتصل بنا
                    </li>
                </Link>
                <Link to="/about-us">
                    <li>
                        من نحن
                    </li>
                </Link>
                <Link to="/">
                    <li>
                        <img src="images/logo.png" />
                    </li>
                </Link>
            </ul>
        </div >
    );
}
