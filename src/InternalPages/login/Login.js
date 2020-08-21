import React from 'react';
import './login.scss';
import HeaderSection from './HeaderSection';
import Form from './Form';
import CommonComponents from './CommonComponents';

export default function Login() {
    return (
        <div className="login">
            <div className="partOne-content">
                <HeaderSection />
            </div>
            <div className="form">
                <Form />
            </div>
            <div className="common-components">
                <CommonComponents />
            </div>
        </div>
    );
}