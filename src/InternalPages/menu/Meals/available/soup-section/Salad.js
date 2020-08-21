import React from 'react';
import MealsNumber from '../MealsNumber';

export default function Salad() {
    return (
        <>
            <img src="images/image5.png" />
            <div className="meal-ingredients">
                <h1>سلطة القيصر</h1>
                <p>طماطم - خس - خيار - تفاح</p>
                <p>
                    <b> 33 </b>
                    <span> رس </span>
                </p>
            </div>
            <div className="meals-number">
                <MealsNumber />
            </div>

        </>
    );
}