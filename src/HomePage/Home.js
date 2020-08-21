import React from 'react';
import PartOne from './Part1-components/PartOne';
import MenuSlider from './Menu-slider/MenuSlider';
import About from './About/about';
import AppSection from './App-section/AppSection';
import EmailSection from './Eamil-section/EmailSection';
import Logo from './Logo/Logo';
import Footer from './Footer/Footer';

export default function Home() {
    return (
        <>
            <PartOne />
            <MenuSlider />
            <About />
            <AppSection />
            <EmailSection />
            <Logo />
            <Footer />
        </>
    );
}