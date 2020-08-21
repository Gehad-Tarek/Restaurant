import React from "react";

export default function AboutSection() {
    return (
        <div className="about-section-content" >
            <div className="left">
                <img src="images/story-img.png" data-aos="zoom-in" data-aos-duration="900" />
            </div>
            <div className="right">
                <h1 className="title" data-aos="fade-left" data-aos-duration="1500">من مصر للسعودية وجبات طازجة ولذيذة ومشويات رائعة</h1>
                <p className="text" data-aos="fade-left" data-aos-duration="2000">
                    أجمل الأكلات المصرية في جدة و السعودية
                    نقدمالمشويات الطازجة الرائعة بنكهة الأهرامات والقاهرة
                    الأكل له طعم آخر .
                </p>
            </div>
        </div>
    );
}