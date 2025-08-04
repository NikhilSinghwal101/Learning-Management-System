import { GoDotFill } from "react-icons/go";
import { BiSolidChevronsRight } from "react-icons/bi";

export default function ChooseUs() {
  return (
    <>
      <div className="px-8 md:px-56 pt-16 pb-8 lg:flex md:flex sm:flex items-center justify-between bg-slate-50">
        <div className="">
          <h3 className="flex items-center text-sm text-blue-700 gap-1 font-semibold">
            <GoDotFill style={{ color: "blue", textAlign: "left" }} />
            Why Choose Us
          </h3>
          <h1 className="text-3xl font-semibold my-4 text-gray-900">
            Our Commitment to Excellence, Learn, Grow & Success
          </h1>
          <p className="text-[14px] md:w-[90%]">
            Our LMS provides a robust platform that supports a variety of
            learning styles and formats. From interactive e-learning modules and
            video content to assessments and gamified elements, we ensure a
            rich, engaging experience tailored to diverse educational needs.
          </p>
          <div className="my-4 flex items-center gap-2 md:shadow-none sm:shadow-none shadow-md md:p-0 sm:p-0 p-4 rounded-md">
            <BiSolidChevronsRight style={{ color: "blue" }} />
            <p className="text-[14px]"> 9/10 Average Satisfaction Rate</p>
          </div>
          <div className="my-4 flex items-center gap-2 md:shadow-none sm:shadow-none shadow-md md:p-0 sm:p-0 p-4 rounded-md">
            <BiSolidChevronsRight style={{ color: "blue" }} />
            <p className="text-[14px]">96% Completion Rate</p>
          </div>
          <div className="my-4 flex items-center gap-2 md:shadow-none sm:shadow-none shadow-md md:p-0 sm:p-0 p-4 rounded-md">
            <BiSolidChevronsRight style={{ color: "blue" }} />
            <p className="text-[14px]">Friendly Environment & Expert Teacher</p>
          </div>
        </div>
        <div className="w-full">
          <img
            src="https://img.freepik.com/premium-photo/expert-solutions-fullstack-mobile-ecommerce-development_1245763-69318.jpg?size=626&ext=jpg&ga=GA1.1.1438486360.1723621434&semt=ais_hybrid"
            alt=""
            className="w-full h-full rounded-full shadow-xl shadow-blue-200"
          />
        </div>
      </div>
    </>
  );
}
