import React from 'react';
import ScrollableAnchor from 'react-scrollable-anchor';
import { Link } from 'react-router-dom';

export default function CreateAccount() {
    return (
        <div className="content">
            <ScrollableAnchor >
                <form id={'form'}>
                    <input type="text" name="name" placeholder="الاسم بالكامل" title=".Please fill out this field" required />
                    <input type="email" name="email" placeholder="البريد الإلكتروني" title=".Please fill out this field" required />
                    <input type="text" name="phone" placeholder="رقم الهاتف" title=".Please fill out this field" required />
                    <input type="password" name="password" placeholder="كلمة المرور" title=".Please fill out this field" required />
                    <button>إنشاء حساب جديد</button>
                    <Link to="/login">تسجيل دخول</Link>
                </form>
            </ScrollableAnchor>
        </div>
    );
}