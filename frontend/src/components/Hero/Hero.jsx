import { Link } from "react-router-dom";
import { FiArrowUpRight } from "react-icons/fi";
import TypingEffect from "../TypingEffect";

export default function Hero() {
  return (
    <>
      <div className="w-full h-[100vh] md:px-12 md:py-12 py-2 pt-4 bg-gradient-to-r from-sky-600 to-indigo-500">
        <div className="flex items-center mx-2">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKQGHkh78NsiAnqTGxgIB8t-u1GhMjUPi3GfxjeSGJZX3jrRBu"
            alt=""
            className="md:w-20 md:h-20 w-14 h-14 mx-2 rounded-full hover:animate-spin animate-bounce"
          />
          <li className="font-light text-white md:px-[74px] px-2 md:text-base text-sm">
            Unlock Your Future, Achieve Success
          </li>
        </div>
        <div className="md:mx-44 mx-8 md:flex justify-between">
          <div>
            <h1 className="md:text-6xl leading-snug font-bold md:mb-10 lg:mb-10 sm:mb-8 mb-4 text-3xl text-gray-50 md:h-44 lg:h-44 sm:h-40 h-[120px] ">
              Find Your <span className="text-orange-500">Ideal</span> <br />{" "}
              Course & Build <br />
              <div className="text-green-300 md:mt-[6px] lg:mt-[6px] sm:mt-[2px] mt-[2px]">
                <TypingEffect text="Skills..." speed={250} />
              </div>
            </h1>
            <p className="mb-4 md:text-base text-sm text-white font-light">
              Welcome to EduAll, where learning knows no bounds. <br />
              Whether you're a student, professional or lifelong learner...
            </p>
            <div className="flex items-center gap-8">
              <Link to={"/courses"}>
                <button className="flex items-center md:gap-2 gap-1 rounded-3xl bg-gray-50 text-blue-800 md:px-4 md:py-2 px-2 py-1 md:text-[14px] text-[12px] hover:scale-105 transition ease-in-out">
                  Explore Courses
                  <FiArrowUpRight />
                </button>
              </Link>
              <Link to={"/about"}>
                <button className="flex items-center md:gap-2 gap-1 rounded-3xl bg-gray-50 text-black-800 md:px-4 md:py-2 px-2 py-1 md:text-[14px] text-[12px] hover:scale-105 transition ease-in-out">
                  About Us
                  <FiArrowUpRight />
                </button>
              </Link>
            </div>
          </div>
          <div>
            <video
              src="https://cdn.dribbble.com/userupload/13540644/file/original-020e5afec3b51c1ef21a46463054bcbe.mp4"
              autoPlay
              muted
              loop
              className="w-[450px] md:mt-0 sm:mt-0 mt-4"
            />
          </div>
        </div>
        <div className="h-16 md:h-36 lg:h-36 sm:h-16 md:px-12 md:py-4 lg:py-4 sm:py-2 mt-14 lg:mt-24 md:mt-24 sm:mt-8 z-10 relative bg-white mx-8 md:mx-40 rounded-2xl md:rounded-3xl flex items-center justify-between shadow-md">
          <div className="md:mx-4 sm:mx-4 mx-2 flex items-center">
            <div className="mr-2">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQc6MCQaqsj4vXpKJ5ErT1N7ytxWmCcER5Dkg&s"
                alt=""
                className="rounded-full md:h-8 md:w-8 sm:h-8 sm:w-8 h-6 w-10"
              />
            </div>
            <div>
              <h2 className="md:text-xl md:font-bold text-[12px] font-bold">
                50+ Online Courses
              </h2>
              <p className="md:text-sm md:block hidden">
                Enjoy lifetime access to courses
              </p>
            </div>
          </div>
          <div className="md:mx-4 sm:mx-4 mx-2 flex items-center">
            <div className="mr-2">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1nWQg5l4TGdzKWNn0wg4ph72dkBr5KOp8Xd1KrHFgJ2-CBOWL"
                alt=""
                className="rounded-full md:h-8 md:w-8 sm:h-8 sm:w-8 h-6 w-10"
              />
            </div>
            <div>
              <h2 className="md:text-xl md:font-bold text-[12px] font-bold">
                Top Industry Experts
              </h2>
              <p className="md:text-sm md:block hidden">
                Top instructors around world
              </p>
            </div>
          </div>
          <div className="md:mx-4 sm:mx-4 mx-2 flex items-center">
            <div className="mr-0">
              <img
                src="https://static.vecteezy.com/system/resources/previews/006/788/721/original/clock-arrow-icon-free-vector.jpg"
                alt=""
                className="rounded-full md:h-14 md:w-14 sm:w-14 sm:h-14 h-10 w-16"
              />
            </div>
            <div>
              <h2 className="md:text-xl md:font-bold text-[12px] font-bold">
                Explore Categories
              </h2>
              <p className="md:text-sm md:block hidden">
                Build your library for career
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
