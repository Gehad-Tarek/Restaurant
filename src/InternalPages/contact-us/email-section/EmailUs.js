import React from 'react';

export default function EmailUs() {
    return (
        <div className="content">
            <form>
                <h1>تواصل معنا </h1>
                <input type="text" name="name" placeholder="الاسم بالكامل" required />
                <input type="email" name="email" placeholder="البريد الإلكتروني" required />
                <input type="" name="phone" placeholder="رقم الهاتف" required />
                <textarea name="message" placeholder="الرسالة" required />
                <button>إرسال</button>
            </form>
        </div>
    );
}