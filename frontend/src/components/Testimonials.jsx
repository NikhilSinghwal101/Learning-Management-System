import { SlUser } from "react-icons/sl";
import { PiStar, PiStarFill } from "react-icons/pi";
import { FaQuoteRight } from "react-icons/fa";
import ReactAliceCarousel from "./Carousel/ReactAliceCarousel/ReactAliceCarousel";
import { useState } from "react";

export const testimonialsData = [
  {
    name: "Wade Warren",
    desc: '" They have highly knowledgeable educators who specialize in particular subjects or skills. "',
    rating: 5,
  },
  {
    name: "Jenny Wilson",
    desc: '" They provide a structured educational courses that engage students for learning objectives. "',
    rating: 4,
  },
  {
    name: "David Hawkin",
    desc: '" Certificates are often awarded upon successful completion of a course or training program. "',
    rating: 5,
  },
];

export default function Testimonials() {
  const [phoneScreen, setPhoneScreen] = useState('');
  return (
    <>
      <span className="mt-20 grid place-items-center px-8 py-4 text-center text-blue-800 bg-gray-100 text-xl">
        Our Testimonials
      </span>
      <div className="mx-8 md:mx-[190px] mt-[26px] mb-16 lg:flex md:flex sm:flex items-center justify-between">
        <div className="">
          <h1 className="text-center lg:text-4xl md:text-4xl sm:text-3xl text-3xl font-semibold">
            What Students Think and Say About EduAll
          </h1>
          <p className="text-md text-gray-600 mt-4 lg:mx-8 md:mx-8 sm:mx-4 mx-4 text-center">
            We value our learners' experiences and encourage everyone to share
            their thoughts. Your feedback helps us enhance the learning journey
            for everyone!
          </p>
          <div className="lg:flex md:flex sm:flex lg:flex-nowrap md:flex-nowrap flex-wrap items-center justify-between gap-2 mt-8">
            {testimonialsData.map((data) => (
              <div className="rounded-xl px-6 pt-12 pb-6 bg-gray-50 relative lg:mt-0 md:mt-0 sm:mt-4 mt-4 border-[1px] border-slate-300">
                <FaQuoteRight className="text-4xl absolute right-4 top-4 text-gray-200" />
                <div className="flex items-center gap-2">
                  <SlUser className="text-6xl rounded-full p-2 bg-gray-200 text-white" />
                  <div className="">
                    {/* <div className="flex items-center gap-1"> */}
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
                            <PiStar className="text-lg text-yellow-400"/>
                          </div>
                        ))}
                    {/* </div> */}
                    <h3 className="text-xl font-bold text-gray-900">
                      {data.name}
                    </h3>
                  </div>
                </div>
                <p className="text-md text-gray-500 mt-4">{data.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <ReactAliceCarousel />
    </>
  );
}

//---------------------------------------------------------

// import React, { useState } from 'react';
// import { SlUser } from "react-icons/sl";
// import { PiStar, PiStarFill } from "react-icons/pi";
// import { FaQuoteRight } from "react-icons/fa";

// const testimonials = [
//   {
//     author: "Wade Warren",
//     quote: "They have highly knowledgeable educators who specialize in particular subjects or skills.",
//   },
//   {
//     author: "Jenny Wilson",
//     quote: "They provide structured educational courses that engage students for learning objectives.",
//   },
//   {
//     author: "David Hawkin",
//     quote: "Certificates are often awarded upon successful completion of a course or training program.",
//   },
//   // Add more testimonials as needed
// ];

// export default function Testimonials() {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const nextTestimonial = () => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
//   };

//   const prevTestimonial = () => {
//     setCurrentIndex((prevIndex) =>
//       (prevIndex - 1 + testimonials.length) % testimonials.length
//     );
//   };

//   return (
//     <>
//       <span className="mt-20 grid place-items-center px-8 py-4 text-center text-blue-800 bg-gray-100 text-xl">
//         Our Testimonials
//       </span>
//       <div className="mx-8 md:mx-[190px] mt-[26px] mb-16 flex flex-col items-center">
//         <h1 className="text-center lg:text-4xl md:text-4xl sm:text-3xl text-3xl font-semibold">
//           What Students Think and Say About EduAll
//         </h1>
//         <p className="text-md text-gray-600 mt-4 lg:mx-8 md:mx-8 sm:mx-4 mx-4 text-center">
//           We value our learners' experiences and encourage everyone to share their thoughts. Your feedback helps us enhance the learning journey for everyone!
//         </p>
//         <div className="relative mx-4 mt-8 flex items-center justify-center">
//           <button className="prev" onClick={prevTestimonial}>&#10094;</button>
//           <div className="rounded-xl px-6 pt-12 pb-6 bg-gray-50 relative mx-4">
//             <FaQuoteRight className="text-4xl absolute right-4 top-4 text-gray-200" />
//             <div className="flex items-center gap-2">
//               <SlUser className="text-6xl rounded-full p-2 bg-gray-200 text-white" />
//               <div>
//                 <div className="flex items-center gap-1">
//                   {Array.from({ length: 5 }, (_, index) =>
//                     index < 5 ? <PiStarFill key={index} className="text-lg text-yellow-400"/> : <PiStar key={index} className="text-lg text-yellow-400 font-bold"/>
//                   )}
//                 </div>
//                 <h3 className="text-xl font-bold text-gray-900">{testimonials[currentIndex].author}</h3>
//               </div>
//             </div>
//             <p className="text-md text-gray-500 mt-4">
//               "{testimonials[currentIndex].quote}"
//             </p>
//           </div>
//           <button className="next" onClick={nextTestimonial}>&#10095;</button>
//         </div>
//       </div>
//     </>
//   );
// }
