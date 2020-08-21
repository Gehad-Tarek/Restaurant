import React from 'react';
import HeaderSection from './HeaderSection';
import CreateAccount from './CreateAccount';
import CommonComponents from '../CommonComponents';

export default function Register() {
    return (
        <div className="register">
            <div className="partOne-content">
                <HeaderSection />
            </div>
            <div className="create-account">
                <CreateAccount />
            </div>
            <div className="common-components">
                <CommonComponents />
            </div>
        </div>
    );
}