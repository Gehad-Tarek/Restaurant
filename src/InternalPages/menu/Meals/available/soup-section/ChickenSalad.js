import React from 'react';
import MealsNumber from '../MealsNumber';

export default function ChickenSalad() {
    return (
        <>
            <img src="images/image1.png" />
            <div className="meal-ingredients">
                <h1>سلطة فراخ</h1>
                <p>شرائح فراخ مدخن + سلطة بلدي + صوص المطعم</p>
                <p>
                    <b> 47 </b>
                    <span> رس </span>
                </p>
            </div>
            <div className="meals-number">
                <MealsNumber />
            </div>

        </>
    );
}