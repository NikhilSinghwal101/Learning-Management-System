import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { FaQuoteRight } from "react-icons/fa6";
import { PiStar, PiStarFill } from "react-icons/pi";
import { SlUser } from "react-icons/sl";
import { testimonialsData } from "../../Testimonials";

const ReactAliceCarousel = () => {
//   const items = [
//     <img src="image1.jpg" alt="Slide 1" />,
//     <img src="image2.jpg" alt="Slide 2" />,
//     <img src="image3.jpg" alt="Slide 3" />,
//   ];

  return (
    <AliceCarousel>
      {/* {items.map((item, index) => (
        <div key={index}>{item}</div>
      ))} */}
      {testimonialsData.map((data) => (
        <div className="rounded-xl px-6 pt-12 pb-6 bg-gray-50 relative lg:mt-0 md:mt-0 sm:mt-4 mt-4 lg:mx-48 md:mx-48 sm:mx-8 mx-8 border-[1px] border-slate-300">
          <FaQuoteRight className="text-4xl absolute right-4 top-4 text-gray-200" />
          <div className="flex items-center gap-2">
            <SlUser className="text-6xl rounded-full p-2 bg-gray-200 text-white" />
            <div className="">
              {(data.rating === 5 && (
                <div className="flex items-center gap-1">
                  <PiStarFill className="text-lg text-yellow-400" />
                  <PiStarFill className="text-lg text-yellow-400" />
                  <PiStarFill className="text-lg text-yellow-400" />
                  <PiStarFill className="text-lg text-yellow-400" />
                  <PiStarFill className="text-lg text-yellow-400" />
                </div>
              )) ||
                (data.rating === 4 && (
                  <div className="flex items-center gap-1">
                    <PiStarFill className="text-lg text-yellow-400" />
                    <PiStarFill className="text-lg text-yellow-400" />
                    <PiStarFill className="text-lg text-yellow-400" />
                    <PiStarFill className="text-lg text-yellow-400" />
                    <PiStar className="text-lg text-yellow-400" />
                  </div>
                ))}
              <h3 className="text-xl font-bold text-gray-900">{data.name}</h3>
            </div>
          </div>
          <p className="text-md text-gray-500 mt-4">{data.desc}</p>
        </div>
      ))}
    </AliceCarousel>
  );
};

export default ReactAliceCarousel;
