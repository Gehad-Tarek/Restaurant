import React from "react";

export default function AppSection() {
    return (
        <div className="app-section-content">
            <div className="left">
                <img src="images/mobile.png" />
            </div>
            <div className="right">
                <h1 data-aos="fade-left" data-aos-duration="1500">اكتشف تطبيق المطعم المصري</h1>
                <p data-aos="fade-left" data-aos-duration="2000">واطلب الاوردر اون لاين من خلال جوالك الذكي .</p>
                <div >
                    <a href="https://www.apple.com/ios/app-store/">
                        <img src="images/appstore.png" data-aos="zoom-in" data-aos-duration="1500" />
                    </a>
                    <a href="https://play.google.com/store">
                        <img src="images/google.png" data-aos="zoom-in" data-aos-duration="1500" />
                    </a>
                </div>
            </div>
        </div>
    );
}
