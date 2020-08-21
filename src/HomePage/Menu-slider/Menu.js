import React from 'react';
import Slider from 'infinite-react-carousel';
import Meal from './Meal';
import Kushari from './Kushari';
import Soup from './Soup';
import Salad from './Salad';

export default class Menu extends React.Component {
    render() {
        const settings = {
            arrows: false,
            arrowsBlock: false,
            autoplay: true,
            autoplaySpeed: 3000,
            duration: 600,
            pauseOnHover: false,
            slidesToShow: 4
        };
        return (
            <div className="content">
                <Slider {...settings}>
                    <div className="slide-container">
                        <div className="slide">
                            <Meal />
                        </div>
                    </div>
                    <div className="slide-container">
                        <div className="slide">
                            <Kushari />
                        </div>
                    </div>

                    <div className="slide-container">
                        <div className="slide">
                            <Soup />
                        </div>
                    </div>

                    <div className="slide-container">
                        <div className="slide">
                            <Salad />
                        </div>
                    </div>

                    <div className="slide-container">
                        <div className="slide">
                            <Meal />
                        </div>
                    </div>
                </Slider>
            </div>
        );
    }
}