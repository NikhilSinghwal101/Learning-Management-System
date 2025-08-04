import { Link } from "react-router-dom";
import Counter from "./Counter/Counter";

export default function CategoryCarousel() {
  return (
    <div className="">
      <div className="text-center md:mt-36 mx-8 mt-16">
        <h1 className="md:text-4xl text-2xl font-bold my-4">
          Explore <Counter endNumber={50} duration={2000}/>+ Online Courses For Students
        </h1>
        <p className="text-sm">
          Welcome to our diverse and dynamic course catalog. we're dedicated to
          providing <br />
          you with access to high-quality education.
        </p>
      </div>
      <div className="md:flex items-center justify-center gap-4 mt-8 md:mx-8 mx-12">
        <div className="h-64 w-72 bg-blue-100 rounded-2xl p-8 hover:scale-105 cursor-pointer mb-4 shadow-md shadow-gray-300">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQE99WgfLn6153h7btyBFPIvS31NTE85PqCbw&s"
            alt=""
            className="h-20 w-20 rounded-full"
          />
          <h3 className="text-xl font-bold mt-4">Tech & Coding</h3>
          <p className="text-sm mt-2">30+ courses</p>
          <Link to="/courses">
            <button className="text-blue-800 mt-4 font-bold text-[14px]">
              View Category →
            </button>
          </Link>
        </div>
        <div className="h-64 w-72 bg-blue-500 rounded-2xl p-8 text-white hover:scale-105 cursor-pointer mb-4 shadow-md shadow-gray-300">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDLtEm-KS7XY4GVJ5VXiOqiirUwBrx8rCEiw&s"
            alt=""
            className="h-20 w-20 rounded-full"
          />
          <h3 className="text-xl font-bold mt-4">Web Development</h3>
          <p className="text-sm mt-2">20+ courses</p>
          <Link to="/courses">
            <button className="text-white mt-4 text-[14px]">
              View Category →
            </button>
          </Link>
        </div>
        <div className="h-64 w-72 bg-blue-100 rounded-2xl p-8 hover:scale-105 cursor-pointer mb-4 shadow-md shadow-gray-300">
          <img
            src="https://w1.pngwing.com/pngs/30/196/png-transparent-web-design-icon-web-development-icon-design-user-interface-design-search-engine-optimization-adobe-xd-blue-electric-blue.png"
            alt=""
            className="h-20 w-20 rounded-full"
          />
          <h3 className="text-xl font-bold mt-4">IT & Software</h3>
          <p className="text-sm mt-2">15+ courses</p>
          <Link to="/courses">
            <button className="text-blue-800 mt-4 font-bold text-[14px]">
              View Category →
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
