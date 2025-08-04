import React from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

const ReactCarousel = () => {
    const images = ['image1.jpg', 'image2.jpg', 'image3.jpg'];

    return (
        <CarouselProvider naturalSlideWidth={100} naturalSlideHeight={125} totalSlides={images.length}>
            <Slider>
                {images.map((img, index) => (
                    <Slide index={index} key={index}>
                        <img src={img} alt={`Slide ${index}`} className="w-full" />
                    </Slide>
                ))}
            </Slider>
            <ButtonBack>Back</ButtonBack>
            <ButtonNext>Next</ButtonNext>
        </CarouselProvider>
    );
};

export default ReactCarousel;
