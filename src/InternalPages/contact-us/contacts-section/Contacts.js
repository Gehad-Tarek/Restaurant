import React from 'react';
import Details from './Details';

export default function Contacts() {
    return (
        <div className="restaurant-contacts" id={'contacts'}>
            <div className="restaurant-image">
                <img src="images/story-img.png" />
            </div>
            <div className="restaurant-details">
                <Details />
            </div>
        </div>
    );
}