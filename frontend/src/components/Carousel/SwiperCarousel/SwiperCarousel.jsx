
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';

const SwiperCarousel = () => {
    const images = ['image1.jpg', 'image2.jpg', 'image3.jpg'];

    return (
        <Swiper spaceBetween={50} slidesPerView={1}>
            {images.map((img, index) => (
                <SwiperSlide key={index}>
                    <img src={img} alt={`Slide ${index}`} className="w-full" />
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default SwiperCarousel;