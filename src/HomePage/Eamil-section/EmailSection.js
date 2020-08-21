import React from "react";

export default function EmailSection() {
    return (
        <div className="email-section-content">
            <button>اشترك</button>
            <input type="email" placeholder="اكتب بريدك الإلكتروني" />
            <h1 data-aos="fade-left" data-aos-duration="2000">اشترك في القائمة البريدية ليصلك كل ما هو جديد</h1>
        </div>
    );
}