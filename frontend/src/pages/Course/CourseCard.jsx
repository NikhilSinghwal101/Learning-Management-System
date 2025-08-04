import { HiOutlineVideoCamera } from "react-icons/hi";
import { PiChartBar } from "react-icons/pi";
import { FaRegCircleUser } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function CourseCard({
  courseId,
  img,
  duration,
  title,
  lessons,
  level,
  rating,
  userImg,
  name,
  price,
}) {
  const { user } = useSelector((state) => state?.auth?.data);

  // // custom 1 year course access
  // const oneYearAfterPurchase = new Date(item.purchasedAt);
  // oneYearAfterPurchase.setFullYear(oneYearAfterPurchase.getFullYear() + 1);
  // const hasAccess = new Date() < oneYearAfterPurchase;

  return (
    <>
      <div className="bg-white p-2 rounded-xl relative md:my-0 lg:my-0 sm:my-0 my-4">
        <div className="flex items-center justify-between">
          <div className="absolute top-4 left-4">
            <p className="bg-blue-700 rounded-full px-4 py-2 text-white text-[13px]">
              {duration}
            </p>
          </div>
          <div className="p-2 rounded-full bg-white absolute top-4 right-4 hover:scale-105">
            <FaRegHeart style={{ color: "red" }} />
          </div>
        </div>
        <Link to={`/course-details/${courseId}`}>
          <img
            loading="lazy"
            src={img}
            alt="img"
            className="rounded-xl h-[190px] w-full hover:shadow-xl"
          />
          <h2 className="text-xl text-gray-800 font-semibold p-4 leading-tight min-h-20 hover:text-black">
            {title}
          </h2>
        </Link>
        <div className="flex items-center justify-between p-2 mx-2 text-gray-600 font-semibold text-[14px]">
          <div className="flex items-center gap-1">
            <HiOutlineVideoCamera className="w-6 h-6" />
            <p>{lessons} Lessons</p>
          </div>
          <div className="flex items-center gap-1">
            <PiChartBar className="w-6 h-6" />
            <p>{level}</p>
          </div>
        </div>
        <div className="flex items-center justify-between p-2 mx-2 text-gray-600 font-semibold text-[14px]">
          <div className="flex items-center">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVWfoBmzB7u1SWSNO1a3BvvFr9xl9g49tfUQ&s"
              alt="star"
              className="w-8 h-8"
            />
            <p>{rating}</p>
          </div>
          <div className="flex items-center gap-1">
            <FaRegCircleUser className="w-6 h-6" />
            <p>{name}</p>
          </div>
        </div>
        <div className="md:mx-4 mx-8 text-gray-300">
          <span>- - - - - - - - - - - - - - - - - - - - - -</span>
        </div>
        <div className="flex items-center justify-between mx-4 font-semibold md:my-2">
          <p className="text-red-400 text-[18px]">₹{price}</p>
          <button className="text-blue-500 text-[12px] flex gap-1 items-center">
            <Link to={`/course-details/${courseId}`}>
              {user?.purchasedCourses.some(
                (item) =>
                  item?.course.toString() === courseId &&
                  // new Date() <
                  //   new Date(
                  //     new Date(item.purchasedAt).setFullYear(
                  //       new Date(item.purchasedAt).getFullYear() + 1
                  //     )
                  //   ) // OR
                  new Date() < new Date(item.expireAt)
              )
                ? "Continue Course"
                : "Enroll Now"}
            </Link>
            <FaArrowRight />
          </button>
        </div>
      </div>
    </>
  );
}
