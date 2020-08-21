import React from 'react';
import ScrollableAnchor from 'react-scrollable-anchor';
import { Link } from 'react-router-dom';

export default function RetrievePassword() {
    return (
        <div className="content">
            <ScrollableAnchor >
                <form id={'form'}>
                    <input type="email" name="email" placeholder="البريد الإلكتروني" title=".Please fill out this field" required />
                    <button>إرسال رابط لاستعادة كلمة المرور</button>
                    <div className="links">
                        <Link to="/register">حساب جديد</Link>
                        <span > - </span>
                        <Link to="/login">تسجيل دخول</Link>
                    </div>
                </form>
            </ScrollableAnchor>
        </div>
    );
}