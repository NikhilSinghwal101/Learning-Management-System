import React from 'react';
import CustomCarousel from './CustomCarousel';
import Banner1 from '../../../assets/banner1.jpg';
import Banner2 from '../../../assets/banner2.jpg';
import Banner3 from '../../../assets/sweet.jpg';

const CustomCarouselPage = () => {
    const images = [
        Banner1,
        Banner2,
        Banner3
    ];

    return (
        <div>
            <h1 className="text-center">Image Carousel</h1>
            <CustomCarousel items={images} />
        </div>
    );
};

export default CustomCarouselPage;