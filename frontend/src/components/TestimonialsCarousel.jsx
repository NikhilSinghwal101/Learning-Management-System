import React, { useState } from 'react';
import '../App.css';

const testimonials = [
  {
    quote: "Using the LMS has transformed my learning experience. The interface is intuitive, and the interactive features keep me engaged.",
    author: "Student A"
  },
  {
    quote: "The LMS has streamlined my teaching process significantly. I can easily manage assignments and track student performance.",
    author: "Instructor B"
  },
  {
    quote: "Our team has benefited immensely from the LMS. The flexibility allows employees to learn at their own pace.",
    author: "Corporate Trainer C"
  },
];

const TestimonialsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <div className="testimonial-carousel">
      <div className="testimonial">
        <p>"{testimonials[currentIndex].quote}"</p>
        <cite>- {testimonials[currentIndex].author}</cite>
      </div>
      <button className="prev" onClick={prevTestimonial}>&#10094;</button>
      <button className="next" onClick={nextTestimonial}>&#10095;</button>
    </div>
  );
};

export default TestimonialsCarousel;
