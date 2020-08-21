import React from 'react';
import AboutSection from './AboutSection';
import AppSection from '../../HomePage/App-section/AppSection';
import EmailSection from '../../HomePage/Eamil-section/EmailSection';
import Logo from '../../HomePage/Logo/Logo';
import Footer from '../../HomePage/Footer/Footer';

export default function CommonComponents() {
    return (
        <>
            <AboutSection />
            <AppSection />
            <EmailSection />
            <Logo />
            <Footer />
        </>
    );
}