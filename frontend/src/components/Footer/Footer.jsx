import { Link } from "react-router-dom";
import { TbBrandFacebook } from "react-icons/tb";
import { LuTwitter } from "react-icons/lu";
import { LuInstagram } from "react-icons/lu";
import { HiOutlinePhone } from "react-icons/hi";
import { HiOutlineMail } from "react-icons/hi";
import { useEffect, useState } from "react";

export default function Footer() {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  let date = new Date();
  // console.log(typeof date.getHours());
  // console.log(typeof date);
  // console.log(typeof hours);

  useEffect(() => {
    setTimeout(() => {
      setHours(date.getHours());
      setMinutes(date.getMinutes());
      setSeconds(date.getSeconds());
    }, 1000);
  }, [date, seconds])


  return (
    <>
      <div className="bg-slate-100 z-5 relative pt-[100px] w-full md:px-56 px-8 md:flex lg:flex sm:flex md:gap-32 sm:gap-16 md:text-left text-center">
        <div>
          <div className="flex md:gap-2 sm:gap-2 gap-1 items-center md:justify-start sm:justify-start justify-center">
            <img
              src="https://lksalenterahati.org/wp-content/uploads/2024/06/graduation-cap_2650127-300x300.png"
              alt="logo"
              className="md:w-6 md:h-6 w-6 h-6"
            />
            <h2 className="font-bold md:text-xl text-2xl">
              <Link to={"/"}>
                <span className="text-blue-600">Edu</span>All
              </Link>
            </h2>
          </div>
          <p className="text-[12px] text-gray-700 my-4">
            EduAll exceeded all <br /> the expectations!
          </p>
          <div className="flex items-center gap-2 text-2xl text-blue-500 md:justify-start sm:justify-start justify-center mb-12">
            <TbBrandFacebook className="cursor-pointer hover:scale-125 transition ease-in-out" />
            <LuTwitter className="cursor-pointer hover:scale-125 transition ease-in-out" />
            <LuInstagram className="cursor-pointer hover:scale-125 transition ease-in-out" />
          </div>
        </div>
        <div className="mb-12">
          <h3 className="mb-2 font-bold text-lg text-gray-900">Navigation</h3>
          <ul className="style-none text-sm text-gray-800 flex justify-center flex-col">
            <Link to='/about' className="my-1 cursor-pointer hover:text-blue-900">
              About Us
            </Link>
            <Link to='/courses' className="my-1 cursor-pointer hover:text-blue-900">Courses</Link>
            <Link className="my-1 cursor-pointer hover:text-blue-900">
              Instructor
            </Link>
            <Link className="my-1 cursor-pointer hover:text-blue-900">FAQs</Link>
            <Link to='/blogs' className="my-1 cursor-pointer hover:text-blue-900">Blogs</Link>
          </ul>
        </div>
        <div className="mb-12">
          <h3 className="mb-4 font-bold text-lg text-gray-900">Category</h3>
          <ul className="style-none text-sm text-gray-800">
            <li className="my-2 cursor-pointer hover:text-blue-900">
              UI/UX Design
            </li>
            <li className="my-2 cursor-pointer hover:text-blue-900">
              Web Development
            </li>
            <li className="my-2 cursor-pointer hover:text-blue-900">
              Python Development
            </li>
            <li className="my-2 cursor-pointer hover:text-blue-900">
              Digital Marketing
            </li>
            <li className="my-2 cursor-pointer hover:text-blue-900">
              Graphic Design
            </li>
          </ul>
        </div>
        <div className="pb-8">
          <h3 className="mb-4 font-bold text-lg text-gray-900">Contact Us</h3>
          <div className="flex items-center gap-4 my-3 md:justify-start sm:justify-start justify-center">
            <HiOutlinePhone className="text-2xl text-blue-500 cursor-pointer hover:scale-125 transition ease-in-out" />
            <p className="text-[14px] text-gray-800">(207) 555-0119</p>
          </div>
          <div className="flex items-center gap-4 my-3 md:justify-start sm:justify-start justify-center">
            <HiOutlineMail className="text-2xl text-blue-500 cursor-pointer hover:scale-125 transition ease-in-out" />
            <p className="text-[14px] text-gray-800">EduAll@gmail.com</p>
          </div>
        </div>
      </div>
      <div className="bg-slate-100 md:flex sm:flex items-center justify-between md:px-56 px-8 md:py-8 py-4 text-[12px] text-gray-700 md:text-left sm:text-left text-center">
        <p className="md:my-0 sm:my-0 my-2">
          Copyright &copy; {date.getFullYear()} EduAll | All Rights Reserved.
        </p>
        <div className="md:flex sm:flex items-center gap-8 md:my-0 sm:my-0 my-2">
          <div className="md:my-0 sm:my-0 my-2">
            <span className="md:mx-8 sm:mx-8 mx-4">Privacy Policy</span>
            <span className="">Terms & conditions</span>
          </div>
          <span>
            {hours}:{minutes}:{seconds}
          </span>
        </div>
      </div>
    </>
  );
}
