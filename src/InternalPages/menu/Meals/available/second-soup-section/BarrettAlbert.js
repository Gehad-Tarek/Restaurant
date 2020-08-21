import React from 'react';
import MealsNumber from '../MealsNumber';

export default function BarrettAlbert() {
    return (
        <>
            <img src="images/newSection.jpg" />
            <div className="meal-ingredients">
                <h1>Barrett Albert</h1>
                <p>Fugit corrupti off</p>
                <p>
                    <b> 18 </b>
                    <span> رس </span>
                </p>
            </div>
            <div className="meals-number">
                <MealsNumber />
            </div>

        </>
    );
}