import React from 'react';
import Header from '../../HomePage/Part1-components/header/Header';
import ScrollableAnchor from 'react-scrollable-anchor';
import { configureAnchors } from 'react-scrollable-anchor';
// configureAnchors({scrollDuration: 1400});

export default function HeaderSection() {
    return (
        <>
            <div className="header">
                <Header />
            </div>
            <div className="navigate-section">
                <a href="#paragraph" className="navigate-button">
                    <img src="images/arrow-down.png" />
                </a>
                <h1>من نحن</h1>
            </div>
            <ScrollableAnchor>
                <p className="about-us-caption" id={'paragraph'}>
                    هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ عن التركيز على الشكل الخارجى للنص
                    أو شكل توضع الفقرات في الصفحة التى يقرأها.
                    ولذلك يتم استخدام طريقة لوريم إيبسوم
                    لأنها تعطي توزيعاً طبيعياً -إلى حد ما- للأحرف عوضاً عن استخدام
                    " هنا يوجد محتوى نصي و هنا يوجد محتوى نصي "
                    فتجعلها تبدو (أى الأحرف ) وكأنها نص مقروء.
                    العديد من برامج النشر المكتبي وبرامج تحرير صفحات الويب تستخدم  لوريم إيبسوم بشكل إفتراضي  كنموذج عن النص ,
                    وإذا قمت بإدخال
                    "lorem ipsum " في أي محرك بحث ستظهر العديد من المواقع الحديثة العهد في نتائج البحث.
                    على مدى السنين ظهرت نسخ جديدة ومختلفة من نص لوريم إيبسوم ,
                    أحياناً عن طريق الصدفة, وأحياناً عن عمد كإدخال بعض العبارات الفكاهية إليها.
             </p>
            </ScrollableAnchor>
        </>
    );
}