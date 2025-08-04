import React, { useState } from 'react';

const CustomCarousel = ({ items }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => 
            (prevIndex - 1 + items.length) % items.length
        );
    };

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
    };

    return (
        <div className="relative w-full max-w-lg mx-auto">
            <div className="overflow-hidden">
                <div
                    className="flex transition-transform duration-300"
                    style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                    {items.map((item, index) => (
                        <div key={index} className="flex-shrink-0 w-full">
                            <img src={item} alt={`Slide ${index}`} className="w-full h-60" />
                        </div>
                    ))}
                </div>
            </div>
            <button onClick={prevSlide} className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-2 py-1">
                Prev
            </button>
            <button onClick={nextSlide} className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-2 py-1">
                Next
            </button>
        </div>
    );
};

export default CustomCarousel;