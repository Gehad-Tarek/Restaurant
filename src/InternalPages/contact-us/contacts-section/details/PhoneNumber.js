import React from 'react';
import phone from '../../../../svg/phone.svg';

export default function PhoneNumber() {
    return (
        <>
            <div className="svg-icon">
                <img src={phone} />
            </div>
            <div>
                <h1>رقم هاتف الفرع الرئيسي</h1>
                <p>966126056261</p>
            </div>

        </>
    );
}