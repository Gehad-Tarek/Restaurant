import React from 'react';
import MealsNumber from '../MealsNumber';

export default function Soup() {
    return (
        <>
            <img src="images/logo.png" />
            <div className="meal-ingredients">
                <h1>شوربه خضار</h1>
                <p>شوربه مرق اللحم بالخضروات</p>
                <p>
                    <b> 5.75 </b>
                    <span> رس </span>
                </p>
            </div>
            <div className="meals-number">
                <MealsNumber />
            </div>

        </>
    );
}