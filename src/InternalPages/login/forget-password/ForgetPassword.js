import React from 'react';
import RetrievePassword from './RetrievePassword';
import CommonComponents from '../CommonComponents';
import HeaderSection from './HeaderSection';

export default function ForgetPassword() {
    return (
        <>
            <div className="forgetPassword">
                <div className="partOne-content">
                    <HeaderSection />
                </div>
                <div className="retrieve-password">
                    <RetrievePassword />
                </div>
                <div className="common-components">
                    <CommonComponents />
                </div>
            </div>
        </>
    );
}