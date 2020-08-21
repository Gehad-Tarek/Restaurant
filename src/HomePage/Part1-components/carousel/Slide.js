import React from "react";

export default function Slide() {
    return (
        <div className="content">
            <img src="images/image1.png" />
            <h1>دجاج ومكرونة بشاميل </h1>
            <p>دجاج طازج مع مكرونة بشاميل</p>
            <p className="price"><span>150</span>رس </p>
            <p>
                <i class="fas fa-shopping-cart"></i>
                أضف لسلة المشتريات
            </p>
        </div>
    );
}