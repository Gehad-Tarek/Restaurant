import React from 'react';
import MealsNumber from '../MealsNumber';

export default function Test() {
    return (
        <>
            <img src="images/test.jpg" />
            <div className="meal-ingredients">
                <h1>تست وجبة جديدة</h1>
                <p>مكون1 مكون 2 مكون 3 مكون 4</p>
                <p>
                    <b> 100 </b>
                    <span> رس </span>
                </p>
            </div>
            <div className="meals-number">
                <MealsNumber />
            </div>

        </>
    );
}