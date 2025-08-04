import React, { useEffect, useState } from 'react';
import { FaArrowUp } from "react-icons/fa6";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 140) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return ( 
    // z-39
    <div className="fixed bottom-4 right-4 z-10 shadow-md hover:shadow-lg rounded-full">
    {isVisible && (
      <button
        onClick={scrollToTop}
        className="bg-blue-500 text-white rounded-full p-2 md:text-2xl lg:text-2xl sm:text-xl text-xl shadow-lg hover:bg-blue-700 transition duration-300 border-[2px] border-white"
      >
        <FaArrowUp />
      </button>
    )}
  </div>
  );
};

export default ScrollToTopButton;
