import React from 'react';
import SoupSection from './available/soup-section/SoupSection';
import SecondSoupSection from './available/second-soup-section/SecondSoupSection';
import NewSection from './available/new-section/NewSection';
import BarbecueSection from './available/barbecue-section/BarbecueSection';

export default function AvailableMeals() {
    return (
        <>
            <div className="section">
                <SoupSection />
            </div>
            <div className="section">
                <SecondSoupSection />
            </div>
            <div className="section">
                <NewSection />
            </div>
            <div className="section">
                <BarbecueSection />
            </div>
        </>
    );
}