import React from 'react';
import AnimatedImages from './AnimatedImages';
import Text from './Text';

export default function Intro() {
    return (
        <div className="content">
            <div className="left-side">
                <div className="pyramids">
                    <img src="images/prymids.png" />
                </div>
                <div className="animated-images">
                    <AnimatedImages />
                </div>
            </div>
            <div className="right-side">
                <Text />
            </div>
        </div>

    );
}


