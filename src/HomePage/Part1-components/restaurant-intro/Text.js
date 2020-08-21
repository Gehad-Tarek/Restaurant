import React from 'react';
import Slider from 'infinite-react-carousel';

export default class Text extends React.Component {
    render() {
        const settings = {
            accessibility: false,
            arrows: false,
            arrowsBlock: false,
            centerPadding: 50,
            pauseOnHover: false,
            swipe: false
        };
        return (
            <div className="content">
                <Slider {...settings}>
                    <div className="slide">
                        <p className="title">
                            الأكل والمشويات المصري بطعم وريحة القاهرة .
                        </p>
                        <p className="text">
                            أجمل الأكلات المصرية في جدة والسعودية
                            نقدم المشويات الطازجة الرائعة بنكهة الأهرامات والقاهرة
                            الأكل له طعم آخر .
                        </p>
                    </div>
                    <div className="slide">
                        <p className="title">
                            الأكل والمشويات المصري بطعم وريحة القاهرة .
                        </p>
                        <p className="text">
                            أجمل الأكلات المصرية في جدة والسعودية
                            نقدم المشويات الطازجة الرائعة بنكهة الأهرامات والقاهرة
                            الأكل له طعم آخر .
                        </p>
                    </div>
                </Slider>
            </div>
        );
    }
}