import React from 'react';
import BarrettAlbert from './BarrettAlbert';

export default function SecondSoupSection() {
    return (
        <>
            <h1 id={'secondSoup'} className="soup-title">شوربة </h1>
            <div className="meal">
                <BarrettAlbert />
            </div>
        </>
    );
}