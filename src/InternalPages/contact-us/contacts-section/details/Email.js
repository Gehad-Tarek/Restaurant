import React from 'react';
import mail from '../../../../svg/mail.svg';

export default function Email() {
    return (
        <div>
            <div className="svg-icon">
                <img src={mail} />
            </div>
            <div>
                <h1>البريد الإلكتروني</h1>
                <p> info@al-sabbahi.org </p>
            </div>
        </div>
    );
}