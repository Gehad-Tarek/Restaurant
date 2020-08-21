import React from 'react';
import right from '../../../../svg/right.svg';
import close from '../../../../svg/close.svg';

export default function AddToCartOverlay() {
    const [showOverlay, setShow] = React.useState(true);

    const closeOverlay = () => {
        setShow(false)
    }

    return (
        <div className="cart-overlay">
            <img src={right} />
            <span className="caption" > تم الإضافة إلى السلة بنجاح </span>
            {/* <button  onClick={closeOverlay}> */}
                <img src={close} className="close-button" />
                {/* {showOverlay ? {closeOverlay} : null} */}
            {/* </button> */}

        </div>
    );
}