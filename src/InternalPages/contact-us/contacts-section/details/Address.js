import React from 'react';
import location from '../../../../svg/location.svg';

export default function Address() {
    return (
        <>
            <div className="svg-icon">
                <img src={location} />
            </div>
            <div>
                <h1>عنوان الفرع الرئيسي</h1>
                <p>شارع حراء</p>
            </div>

        </>
    );
}