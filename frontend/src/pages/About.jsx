import { GoDotFill } from "react-icons/go";
import { LuUsers } from "react-icons/lu";
import { BsCameraVideo } from "react-icons/bs";
import { LuThumbsUp } from "react-icons/lu";
import { TbUsersGroup } from "react-icons/tb";
import MoreAbout from "../components/MoreAbout";
import Testimonials from "../components/Testimonials";

export default function About() {


  return (
    <>
      <div className="mx-8 md:mx-56 mt-16 mb-8 lg:flex md:flex sm:flex items-center justify-between">
        <div className="">
          <h3 className="flex items-center text-sm text-blue-700 gap-1 font-semibold">
            <GoDotFill style={{ color: "blue", textAlign: "left" }} />
            About EduAll
          </h3>
          <h1 className="text-3xl font-semibold my-4 text-gray-900">
            The Place Where You <br />
            Can Achieve Success
          </h1>
          <p className="text-[14px]">
            We are passionate about transforming lives through education. we
            believe <br />
            in the power of knowledge to unlock oppurtunities and shape the
            future.
          </p>
          <div className="my-8 md:flex lg:flex sm:flex items-center gap-4 md:shadow-none sm:shadow-none shadow-md md:p-0 sm:p-0 p-4 rounded-md">
            <img
              src="https://www.definedgesecurities.com/wp-content/uploads/2023/06/NOISLESS-CHARTS@288x.png"
              alt=""
              className="h-14 w-14 rounded-full"
            />
            <div>
              <h3 className="text-[20px] font-semibold">Our Mission</h3>
              <p className="text-[14px] mt-2">
                Driven by a team of dedicated educators, technologists, and{" "}
                <br />
                visionaries, we strive to create a supportive environment.
              </p>
            </div>
          </div>
          <div className="my-8 md:flex lg:flex sm:flex items-center gap-4 md:shadow-none sm:shadow-none shadow-md md:p-0 sm:p-0 p-4 rounded-md">
            <img
              src="https://theambitionsagency.com/wp-content/uploads/2022/07/9-monitoring.svg"
              alt=""
              className="h-14 w-14 rounded-full bg-blue-100"
            />
            <div>
              <h3 className="text-[20px] font-semibold">Our Vision</h3>
              <p className="text-[14px] mt-2">
                A professional seeking to upskill, or a lifelong learner
                exploring
                <br />
                new horizons, we're here to accompany you every step of the way.
              </p>
            </div>
          </div>
        </div>
        <div>
          <img
            src="https://img.freepik.com/premium-vector/mobile-online-data-monitoring-analysis-management-illustrations_1278800-9036.jpg?size=626&ext=jpg&ga=GA1.1.1438486360.1723621434&semt=ais_hybrid"
            alt=""
            className="h-96 w-88"
          />
        </div>
      </div>
      <div className="lg:flex md:flex sm:grid sm:grid-cols-2 grid grid-cols-2 lg:items-center lg:justify-center md:items-center md:justify-center gap-4 my-12 md:mx-0 mx-8">
        <div className="border-[1px] border-slate-200 rounded-xl text-center md:py-8 py-4 md:px-10 px-4 bg-blue-50 shadow-sm">
          <div className="border-none rounded-full mt-2 mb-4 flex justify-center">
            <LuUsers className="text-3xl text-blue-800"/>
          </div>
          <span className="md:text-4xl text-3xl font-bold md:p-4 p-1">1.6K</span>
          <p className="text-[13px] md:pt-4 pt-2">Successfully Trained</p>
        </div>
        <div className="border-[1px] border-slate-200 rounded-xl text-center md:py-8 py-4 md:px-10 px-4 bg-pink-50 shadow-sm">
          <div className="border-none rounded-full mt-2 mb-4 flex justify-center">
          <BsCameraVideo className="text-3xl text-blue-800" />
          </div>
          <span className="md:text-4xl text-3xl font-bold md:p-4 p-1">16.5K</span>
          <p className="text-[13px] md:pt-4 pt-2">Courses Completed</p>
        </div>
        <div className="border-[1px] border-slate-200 rounded-xl text-center md:py-8 py-4 md:px-10 px-4 md:bg-blue-50 lg:bg-blue-50 sm:bg-pink-50 bg-pink-50 shadow-sm">
          <div className="border-none rounded-full mt-2 mb-4 flex justify-center">
          <LuThumbsUp className="text-3xl text-blue-800" />
          </div>
          <span className="md:text-4xl text-3xl font-bold md:p-4 p-1">45.8K</span>
          <p className="text-[13px] md:pt-4 pt-2">Satisfaction Rate</p>
        </div>
        <div className="border-[1px] border-slate-200 rounded-xl text-center md:py-8 py-4 md:px-10 px-4 lg:bg-pink-50 md:bg-pink-50 sm:bg-blue-50 bg-blue-50 shadow-sm">
          <div className="border-none rounded-full mt-2 mb-4 flex justify-center">
          <TbUsersGroup className="text-3xl text-blue-800" />
          </div>
          <span className="md:text-4xl text-3xl font-bold md:p-4 p-1">55.6K</span>
          <p className="text-[13px] md:pt-4 pt-2">Students Community</p>
        </div>
      </div>
      <MoreAbout />
      <Testimonials />
    </>
  );
}
