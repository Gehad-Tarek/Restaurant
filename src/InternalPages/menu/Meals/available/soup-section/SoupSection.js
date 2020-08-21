import React from 'react';
import Soup from './Soup';
import Salad from './Salad';
import ChickenSalad from './ChickenSalad';

export default function SoupSection() {
    return (
        <>
            <h1 id={'soup'}>شوربة </h1>
            <div className="meal">
                <Soup />
            </div>
            <div className="meal">
                <Salad />
            </div>
            <div className="meal">
                <ChickenSalad />
            </div>
        </>
    );
}