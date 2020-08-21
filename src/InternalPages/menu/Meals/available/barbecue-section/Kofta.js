import React from 'react';
import MealsNumber from '../MealsNumber';

export default function Kofta() {
    return (
        <>
            <img src="images/kofta.jpg" />
            <div className="meal-ingredients">
                <h1>كفتة مشوية</h1>
                <p>نص كيلو كفتة مشوية + طحينة + عيش</p>
                <p>
                    <b> 124 </b>
                    <span> رس </span>
                </p>
            </div>
            <div className="meals-number">
                <MealsNumber />
            </div>

        </>
    );
}