import React from 'react';
import List from './List';
import AvailableMeals from './AvailableMeals';
import CarrierBag from './CarrierBag';

export default function Meals() {
    return (
        <div className="content">

            <div className="list">
                <div className="left">
                    <List />
                </div>
                <div className="right">
                    <h1>قائمة الطعام</h1>
                    <p>اختر ما تريد من الأكلات</p>
                </div>
            </div>

            <div className="available">
                <div className="left">
                    <AvailableMeals />
                </div>
                <div className="right">
                    <CarrierBag />
                </div>
            </div>

        </div>
    );
}