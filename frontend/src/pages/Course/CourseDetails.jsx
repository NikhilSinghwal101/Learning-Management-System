// import React from 'react'
// import CourseData from '../../../public/coursedata.json';
// import CoverVideo from '../../assets/Venice_10.mp4';

// const CourseDetails = () => {
//   return (
//     <div className='flex justify-between gap-20 md:mx-48 mt-8'>
//       <div className='w-1/2'>
//         {/* <img src={"https://www.simplilearn.com/ice9/app/Javascript_360x194.jpg"} alt="course_img" className='w-full h-[250px] rounded-md'/> */}
//         <video src={CoverVideo} controls controlsList='nodownload' className='object-fit w-full h-[250px] rounded-md'></video>
//         <h2 className='text-4xl mt-4 mb-8'>Introduction to Javascript</h2>
//         <p className='mb-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium ea nemo molestiae harum debitis, sequi inventore, nobis nesciunt cupiditate cumque ut necessitatibus officiis et culpa. Est perspiciatis corrupti eveniet dolor! Temporibus doloribus aut iste in impedit illum eveniet ducimus esse dolore vel harum maxime quo quod aliquam incidunt, perferendis earum similique fugiat, magni aperiam! Dolorem, hic culpa consequuntur.</p>

//         {/* Comment Section */}

//         <div className='mt-8 bg-gray-200'>
//             Comments
//         </div>
//       </div>
//       <div className='w-1/2'>
//           <video src={CoverVideo} controls className='w-1/3 object-fit h-24'></video>
//       </div>
//     </div>
//   )
// }

// export default CourseDetails;

//--------------------------------------------------------------

// import BuyCourseButton from "@/components/BuyCourseButton";
// import { Button } from "@/components/ui/button";
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardFooter,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/div";
// import { Separator } from "@/components/ui/separator";
// import { useGetCourseDetailWithStatusQuery } from "@/features/api/purchaseApi";
import { BadgeInfo, Lock, PlayCircle } from "lucide-react";
import React, { useEffect } from "react";
// import ReactPlayer from "react-player";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCourseById } from "../../redux/features/courseSlice";

const CourseDetails = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const courseId =
    params?.id && params.id !== "undefined"
      ? params.id
      : "67b2b2e532becdc9bbb49737";

  const navigate = useNavigate();
  const singleCourseDetail = useSelector(
    (state) => state?.courses?.course?.course
  );

  console.log("amklf", singleCourseDetail)

  const { state } = useLocation();

  const { user, role } = useSelector((state) => state?.auth?.data);

  // const handleContinueCourse = () => {
  //   // if(purchased){
  //   //   navigate(`/course-progress/${courseId}`)
  //   // }
  // };       // ======> this is second method in which we can make the courseProgress.jsx page for course-progress route

  useEffect(() => {
    dispatch(getCourseById(courseId));
  }, [courseId, dispatch]);

  return (
    <>
      <div className="space-y-5">
        <div className="bg-[#2D2F31] text-white">
          <div className="max-w-7xl mx-auto py-8 px-4 md:px-8 flex flex-col gap-2">
            <h1 className="font-bold text-2xl md:text-3xl">
              {singleCourseDetail?.title}
            </h1>
            <p className="text-gray-400 md:text-xl font-bold">
              {singleCourseDetail?.category?.toUpperCase()}
            </p>
            <p>
              Created By{" "}
              <span className="text-[#C0C4FC] underline italic">
                {singleCourseDetail?.createdBy}
              </span>
            </p>
            <div className="flex items-center gap-2 text-sm">
              <BadgeInfo size={16} />
              <p>
                Last updated : {singleCourseDetail?.createdAt?.split("T")[0]}
              </p>
            </div>
            <p>
              Students enrolled : {singleCourseDetail?.enrolledStudents.length}
            </p>
          </div>
        </div>
        <div className="max-w-7xl mx-auto my-5 px-4 md:px-8 flex flex-col lg:flex-row justify-between gap-10">
          <div className="w-full lg:w-1/2 space-y-5">
            <h1 className="font-bold text-xl md:text-2xl">Description</h1>
            <p
              className="text-sm"
              dangerouslySetInnerHTML={{
                __html: singleCourseDetail?.description,
              }}
            />
            <div>
              <div>
                <div className="font-extrabold text-slate-700">
                  Course Content
                </div>
                <div className="mb-2 text-gray-900">
                  {singleCourseDetail?.lectures?.length} lectures
                </div>
              </div>
              <div className="space-y-3">
                {singleCourseDetail?.lectures?.map((lecture, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-sm">
                    <span>
                      {user?.purchasedCourses?.some(
                        (item) => item?.course?.toString() === courseId
                      ) ? (
                        <PlayCircle size={14} />
                      ) : (
                        <Lock size={14} />
                      )}
                    </span>
                    <p>{lecture?.title}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/3 shadow-lg m-4 rounded-md border-gray-300 border-[1px]">
            <div>
              <div className="p-4 flex flex-col">
                <div className="w-full aspect-video mb-4">
                  {/* <ReactPlayer
                  width="100%"
                  height={"100%"}
                  // playing={true}  // Forces immediate loading
                  url={singleCourseDetail?.lectures[0]?.lecture?.secure_url}
                  // url={CoverVideo}
                  controls={true}
                  config={{ file: { attributes: { controlsList: 'nodownload' } }}}
                /> */}
                  <video
                    width="100%"
                    height="100%"
                    src={singleCourseDetail?.lectures[0]?.lecture?.secure_url}
                    controls
                    disablePictureInPicture
                    controlsList="nodownload"
                    className="object-fill rounded-md w-full"
                  />
                </div>
                <h1 className="font-semibold text-[18px]">
                  {/* {course?.lectures[0]?.lectureTitle} */}
                  {singleCourseDetail?.title}
                </h1>
                {/* <Separator className="my-2" /> */}
                <div className="my-2 flex justify-between items-center">
                  <h1 className="text-lg md:text-xl font-semibold">
                    ₹{singleCourseDetail?.price}
                  </h1>
                  <span className="text-[12px] text-slate-100 bg-blue-500 px-2 py-1 rounded-full">
                    {singleCourseDetail?.category}
                  </span>
                </div>
              </div>
              <div className="flex justify-center p-4 cursor-pointer">
                {/* {purchased ? (
                <Button onClick={handleContinueCourse} className="w-full">Continue Course</Button>
              ) : (
                <BuyCourseButton courseId={courseId} />
                <Button className='w-full'>Buy Course</Button>
              )} */}

                {/*       Subscription based      */}
                {/* {role === "ADMIN" || user?.subscription?.status === "active" ? (
                  <button
                    onClick={() =>
                      navigate("/display-lectures", {
                        state: singleCourseDetail,
                      })
                    }
                    className="bg-green-600 text-white hover:bg-green-700 w-full rounded-md px-2 py-1 font-semibold "
                  >
                    Continue Course
                  </button>
                ) : (
                  <button
                    onClick={() => navigate(`/checkout/${courseId}`)}
                    className="bg-green-600 text-white hover:bg-green-700 w-full rounded-md px-2 py-1 font-semibold "
                  >
                    Subscribe to Course
                  </button>
                )} */}
                {role === "ADMIN" ||
                user?.purchasedCourses?.some(
                  (item) =>
                    item?.course?.toString() === courseId &&
                    // new Date() <
                    //   new Date(
                    //     new Date(item.purchasedAt).setFullYear(
                    //       new Date(item.purchasedAt).getFullYear() + 1
                    //     )
                    //   )  // OR
                    new Date() < new Date(item.expireAt)
                ) ? (
                  <button
                    onClick={() =>
                      navigate("/display-lectures", {
                        state: singleCourseDetail,
                      })
                    }
                    className="bg-green-600 text-white hover:bg-green-700 w-full rounded-md px-2 py-1 font-semibold"
                  >
                    Continue Course
                  </button>
                ) : (
                  <button
                    onClick={() => navigate(`/checkout/${courseId}`)}
                    className="bg-green-600 text-white hover:bg-green-700 w-full rounded-md px-2 py-1 font-semibold"
                  >
                    Buy Course
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CourseDetails;
