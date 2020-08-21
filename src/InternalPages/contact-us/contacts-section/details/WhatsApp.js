import React from 'react';
import whatsapp from '../../../../svg/whatsapp.svg';

export default function WhatsApp() {
    return (
        <>
            <div className="svg-icon">
                <img src={whatsapp} />
            </div>
            <div>
                <h1>واتساب</h1>
                <p>+966541355243</p>
            </div>
        </>
    );
}