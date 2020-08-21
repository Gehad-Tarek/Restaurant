import React from "react";
import { Link } from "react-router-dom";

export default function AnimatedText() {
    return (
        <div className="content" data-aos="fade-left" data-aos-duration="1500">
            <div>
                <Link to="/menu">
                    <i class="fas fa-bars"></i>
                    <span>القائمة بالكامل</span>
                </Link>
            </div>
            <h1>قائمة الطعام</h1>
        </div>
    );

}