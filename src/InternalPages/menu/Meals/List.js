import React from 'react';
import Slider from 'infinite-react-carousel';

export default class List extends React.Component {
    render() {
        const settings = {
            arrows: false,
            arrowsBlock: false,
            autoplay: false,
            slidesToShow: 4
        };
        return (
            <div className="content">
                <div className="slider">
                    <Slider {...settings}>
                        <a href="#barbecue">
                            <img src="images/logo.png" className="barbecue" />
                            <h4>مشويات</h4>
                        </a>
                        <a href="#newSection">
                            <img src="images/newSection.jpg" className="nsec" />
                            <h4>قسم جديد</h4>
                        </a>
                        <a href="#secondSoup">
                            <img src="images/image4.png" />
                            <h4>شوربة</h4>
                        </a>
                        <a href="#soup">
                            <img src="images/image5.png" />
                            <h4>شوربة</h4>
                        </a>
                    </Slider>
                </div>
            </div>
        );
    }
}