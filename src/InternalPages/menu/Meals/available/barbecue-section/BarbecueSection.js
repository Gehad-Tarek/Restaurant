import React from 'react';
import Kofta from './Kofta';
import Chicken from './Chicken';

export default function BarbecueSection() {
    return (
        <>
            <h1 id={'barbecue'}>مشويات </h1>
            <div className="meal">
                <Kofta />
            </div>
            <div className="meal">
                <Chicken />
            </div>
        </>
    );
}