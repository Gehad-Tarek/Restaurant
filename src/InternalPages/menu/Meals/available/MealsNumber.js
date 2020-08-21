import React from 'react';
import plus from '../../../../svg/plus.svg';
import minus from '../../../../svg/minus.svg';
import shoppingCart from '../../../../svg/shoppingCart.svg';
import AddToCartOverlay from './AddToCartOverlay';

export default function MealsNumber() {
    const [meals, updateMeals] = React.useState(1);
    const [showOverlay, setShow] = React.useState(false);

    // if user press plus button to increase meals number  
    const increaseMealsNumber = () => {
        updateMeals(meals + 1)
    }
    // if user press minus button to decrease meals number
    const decreaseMealsNumber = () => {
        if (meals > 1) {
            updateMeals(meals - 1)
        }
    }
    // if user want to write meals number manually
    const insertNumber = (e) => {
        updateMeals(e.target.value)
    }
    // if user want to add any purchases to his own carrier bag 
    const updatePurchases = () => {
        setShow(true)
    }

    return (
        <>
            <div className="total-number">
                <button onClick={increaseMealsNumber}>
                    <img src={plus} />
                </button>
                <input type="text" value={meals} onChange={insertNumber} />
                <button onClick={decreaseMealsNumber}>
                    <img src={minus} />
                </button>
            </div>
            <button className="add-to-cart" onClick={updatePurchases}>
                <img src={shoppingCart} />
                <span> أضف لسلة المشتريات </span>
            </button>
            <div className="overlay">
                {showOverlay ? <AddToCartOverlay /> : null}
            </div>
        </>
    );
}
