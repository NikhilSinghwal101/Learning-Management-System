import React from 'react';
import '../../../App.css';
import Slider from 'react-slick';
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import Banner1 from '../../../assets/banner1.jpg';
import Banner2 from '../../../assets/banner2.jpg';
import Banner3 from '../../../assets/sweet.jpg';

const ReactSlickCarousel = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    const images = [
        Banner1,
        Banner2,
        Banner3
    ];

    return (
        <div className="max-w-lg mx-auto flex items-center justify-center">
            <Slider {...settings}>
                {images.map((img, index) => (
                    <div key={index}>
                        <img src={img} alt={`Slide ${index}`} className="w-full" />
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default ReactSlickCarousel;
