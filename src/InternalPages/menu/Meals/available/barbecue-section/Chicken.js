import React from 'react';
import MealsNumber from '../MealsNumber';

export default function Chicken() {
    return (
        <>
            <img src="images/image2.png" />
            <div className="meal-ingredients">
                <h1>فراخ مشوية</h1>
                <p>فرخة مشوية + سلطة + عيش + طحينة</p>
                <p>
                    <b> 89 </b>
                    <span> رس </span>
                </p>
            </div>
            <div className="meals-number">
                <MealsNumber />
            </div>

        </>
    );
}