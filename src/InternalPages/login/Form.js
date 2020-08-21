import React from 'react';
import { Link } from 'react-router-dom';
// import password from '../../svg/password.svg';

export default function Form() {
    return (
        <div className="content">
            <form id={'form'}>
                <input type="email" name="email" placeholder="البريد الإلكتروني" title=".Please fill out this field" required />
                <input type="password" name="password" placeholder="كلمة المرور" title=".Please fill out this field" required />
                {/* <img src={password} /> */}
                <button>تسجيل دخول</button>
                <Link to="/register">حساب جديد</Link>
                <Link to="/forget-password">نسيت كلمة المرور؟</Link>
            </form>
        </div>
    );
}