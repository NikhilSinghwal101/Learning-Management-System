// // import React, { useEffect, useState } from "react";
// // import { useDispatch, useSelector } from "react-redux";
// // import { useLocation, useNavigate } from "react-router-dom";
// // import { deleteCourseLecture, getCourseLecture } from "../../redux/features/lectureSlice";

// // const DisplayLectures = () => {
// //   const dispatch = useDispatch();
// //   const navigate = useNavigate();

// //   // for getting the data from location of previous component
// //   const courseDetails = useLocation().state;
// //   console.log("courseDetails: ", courseDetails);
// //   const { lectures } = useSelector((state) => state?.lecture);
// //   const { role } = useSelector((state) => state?.auth);

// //   console.log("lectures: ", lectures);
// //   console.log("role: ", role);

// //   // to play the video accordingly
// //   const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

// //   // function to handle lecture delete
// //   const handleLectureDelete = async (courseId, lectureId) => {
// //     const data = { courseId, lectureId };
// //     await dispatch(deleteCourseLecture(data));
// //     await dispatch(getCourseLecture(courseDetails._id));
// //   };

// //   // fetching the course lecture data
// //   useEffect(() => {
// //     (async () => {
// //       await dispatch(getCourseLecture(courseDetails._id));
// //     })();
// //   }, []);
// //   return (
// //     <div>
// //       <div className="flex flex-col gap-10 items-center justify-center min-h-[90vh] py-10 text-gray-800 mx-[5%]">
// //         {/* displaying the course name */}

// //         <h1 className="text-center text-2xl font-semibold text-green-500">
// //           Course Name : {courseDetails?.title}
// //         </h1>

// //         <div className="flex flex-wrap justify-center gap-10 w-full">
// //           {/* left section for playing the video and displaying course details to admin */}
// //           <div className="space-y-5 w-[28rem] p-2 rounded-lg shadow-[0_0_10px_black]">
// //             <video
// //               className="object-fill rounded-tl-lg rounded-tr-lg w-full"
// //               src={lectures && lectures[currentVideoIndex]?.lecture?.secure_url}
// //               controls
// //               disablePictureInPicture
// //               muted
// //               controlsList="nodownload"
// //             ></video>
// //             <div>
// //               <h1>
// //                 <span className="text-green-500">Title : </span>
// //                 {lectures && lectures[currentVideoIndex]?.title}
// //               </h1>
// //               <p>
// //                 {" "}
// //                 <span className="text-green-500 line-clamp-4">
// //                   Description :{" "}
// //                 </span>
// //                 {lectures && lectures[currentVideoIndex]?.description}
// //               </p>
// //             </div>
// //           </div>

// //           {/* right section for displaying all the lectures of the course */}
// //           <ul className="w-[28rem] p-2 rounded-lg shadow-[0_0_10px_black] space-y-4">
// //             <li className="font-semibold text-xl text-green-500 flex items-center justify-between">
// //               <p>Lectures List</p>
// //               {role === "ADMIN" && (
// //                 <button
// //                   onClick={() =>
// //                     navigate("/add-lecture", {
// //                       state: { ...courseDetails },
// //                     })
// //                   }
// //                   className="bg-green-600 hover:bg-green-500 text-white px-2 py-1 rounded-md font-semibold text-sm"
// //                 >
// //                   Add New Lecture
// //                 </button>
// //               )}
// //             </li>
// //             {lectures &&
// //               lectures.map((element, index) => {
// //                 return (
// //                   <li className="space-y-2" key={element._id}>
// //                     <p
// //                       className="cursor-pointer"
// //                       onClick={() => setCurrentVideoIndex(index)}
// //                     >
// //                       <span className="text-green-500">
// //                         {" "}
// //                         Lecture {index + 1} :{" "}
// //                       </span>
// //                       {element?.title}
// //                     </p>
// //                     {role === "ADMIN" && (
// //                       <button
// //                         onClick={() =>
// //                           handleLectureDelete(courseDetails?._id, element?._id)
// //                         }
// //                         className="bg-red-500 text-white px-2 py-1 rounded-md font-semibold text-sm"
// //                       >
// //                         Delete Lecture
// //                       </button>
// //                     )}
// //                   </li>
// //                 );
// //               })}
// //           </ul>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default DisplayLectures;

// //-----------------------------------------------------------------------------

// // import React, { useEffect, useState } from "react";
// // import { useDispatch, useSelector } from "react-redux";
// // import { useLocation, useNavigate } from "react-router-dom";
// // import {
// //   deleteCourseLecture,
// //   getCourseLecture,
// // } from "../../redux/features/lectureSlice";

// // const DisplayLectures = () => {
// //   const dispatch = useDispatch();
// //   const navigate = useNavigate();

// //   // Fetch course details from the previous component
// //   const courseDetails = useLocation().state;
// //   const { lectures } = useSelector((state) => state?.lecture);
// //   const { role } = useSelector((state) => state?.auth);

// //   console.log("courseDetails: ", courseDetails);
// //   console.log("lectures: ", lectures);
// //   console.log("role: ", role);

// //   // To play the selected video
// //   const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

// //   // Fetch lectures when the component mounts
// //     useEffect(() => {
// //       if (courseDetails?._id) {
// //         dispatch(getCourseLecture(courseDetails._id));
// //       }
// //     }, [dispatch, courseDetails?._id]);

// //   // Handle lecture deletion
// //   const handleLectureDelete = async (courseId, lectureId) => {
// //     await dispatch(deleteCourseLecture({ courseId, lectureId }));
// //     await dispatch(getCourseLecture(courseId));
// //   };

// //   return (
// //     <div>
// //       <div className="flex flex-col gap-10 items-center justify-center min-h-[90vh] py-10 text-gray-800 mx-[5%]">
// //         {/* Display course name */}
// //         <h1 className="text-center text-2xl font-semibold text-green-500">
// //           Course Name: {courseDetails?.title}
// //         </h1>

// //         <div className="flex flex-wrap justify-center gap-10 w-full">
// //           {/* Left section - Video Player */}
// //           <div className="space-y-5 w-[28rem] p-2 rounded-lg shadow-[0_0_10px_black]">
// //             {/* {lectures?.length > 0 ? ( */}
// //             <video
// //               className="object-fill rounded-tl-lg rounded-tr-lg w-full"
// //               src={lectures?.[currentVideoIndex]?.lecture?.secure_url}
// //               controls
// //               disablePictureInPicture
// //               muted
// //               controlsList="nodownload"
// //             ></video>
// //             {/* ) : (
// //               <p className="text-center text-gray-500">No lectures available</p>
// //             )} */}
// //             <div>
// //               <h1>
// //                 <span className="text-green-500">Title: </span>
// //                 {lectures?.[currentVideoIndex]?.title || "N/A"}
// //               </h1>
// //               <p>
// //                 <span className="text-green-500">Description: </span>
// //                 {lectures?.[currentVideoIndex]?.description ||
// //                   "No description available"}
// //               </p>
// //             </div>
// //           </div>

// //           {/* Right section - List of Lectures */}
// //           <ul className="w-[28rem] p-2 rounded-lg shadow-[0_0_10px_black] space-y-4">
// //             <li className="font-semibold text-xl text-green-500 flex items-center justify-between">
// //               <p>Lectures List</p>
// //               {role === "ADMIN" && (
// //                 <button
// //                   onClick={() =>
// //                     navigate("/add-lecture", { state: { ...courseDetails } })
// //                   }
// //                   className="bg-green-600 hover:bg-green-500 text-white px-2 py-1 rounded-md font-semibold text-sm"
// //                 >
// //                   Add New Lecture
// //                 </button>
// //               )}
// //             </li>

// //             {lectures?.length > 0 ? (
// //               lectures.map((element, index) => (
// //                 <li className="space-y-2" key={element._id}>
// //                   <p
// //                     className="cursor-pointer"
// //                     onClick={() => setCurrentVideoIndex(index)}
// //                   >
// //                     <span className="text-green-500">
// //                       Lecture {index + 1}:{" "}
// //                     </span>
// //                     {element?.title}
// //                   </p>
// //                   {role === "ADMIN" && (
// //                     <button
// //                       onClick={() =>
// //                         handleLectureDelete(courseDetails?._id, element?._id)
// //                       }
// //                       className="bg-red-600 hover:bg-red-500 text-white px-2 py-1 rounded-md font-semibold text-sm"
// //                     >
// //                       Delete Lecture
// //                     </button>
// //                   )}
// //                 </li>
// //               ))
// //             ) : (
// //               <p className="text-center text-gray-500">
// //                 No lectures added yet.
// //               </p>
// //             )}
// //           </ul>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default DisplayLectures;

// //-----------------------------------------------------------------------------

// // import React, { useEffect, useState } from "react";
// // import { useDispatch, useSelector } from "react-redux";
// // import { useLocation, useNavigate } from "react-router-dom";
// // import axios from "axios";
// // import { deleteCourseLecture } from "../../redux/features/lectureSlice";
// // import { toast } from "react-toastify";

// // const DisplayLectures = () => {
// //   const dispatch = useDispatch();
// //   const navigate = useNavigate();

// //   // Fetch course details from the previous component
// //   const courseDetails = useLocation().state;
// //   console.log("CourseDetails: ", courseDetails); // we only take the _id from courseDetails
// //   const { role } = useSelector((state) => state?.auth);

// //   const [lectures, setLectures] = useState([]);
// //   const [loading, setLoading] = useState(false);
// //   const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

// //   // Fetch lectures when the component mounts
// //   useEffect(() => {
// //     const fetchLectures = async () => {
// //       setLoading(true);
// //       try {
// //         const response = await axios.get(
// //           `http://localhost:5000/api/v1/course/${courseDetails._id}/lectures`
// //         );
// //         setLectures(response?.data?.lectures); // Assuming the response has a 'lectures' array
// //         setLoading(false);
// //       } catch (error) {
// //         toast.error(error?.response?.data?.message || "Failed to fetch lectures");
// //         setLoading(false);
// //       }
// //     };

// //     if (courseDetails?._id) {
// //       fetchLectures();
// //     }
// //   }, [courseDetails?._id]);

// //   // Handle lecture deletion
// //   const handleLectureDelete = async (courseId, lectureId) => {
// //     const data = { courseId, lectureId };
// //     try {
// //       await dispatch(deleteCourseLecture(data));
// //       // Re-fetch lectures after deletion
// //       const response = await axios.get(
// //         `http://localhost:5000/api/v1/course/${courseDetails._id}/lectures`
// //       );
// //       setLectures(response.data.lectures); // Update the lectures list
// //     } catch (error) {
// //       toast.error(error?.response?.data?.message || "Failed to delete lecture");
// //     }
// //   };

// //   return (
// //     <div>
// //       <div className="flex flex-col gap-10 items-center justify-center min-h-[90vh] py-10 text-gray-800 mx-[5%]">
// //         {/* Display course name */}
// //         <h1 className="text-center text-2xl font-semibold text-green-500">
// //           Course Name: {courseDetails?.title}
// //         </h1>

// //         <div className="flex flex-wrap justify-center gap-10 w-full">
// //           {/* Left section - Video Player */}
// //           <div className="space-y-5 w-[28rem] p-2 rounded-lg shadow-[0_0_10px_black]">
// //             {lectures?.length > 0 ? (
// //               <video
// //                 className="object-fill rounded-tl-lg rounded-tr-lg w-full"
// //                 src={lectures[currentVideoIndex]?.lecture?.secure_url}
// //                 controls
// //                 disablePictureInPicture
// //                 // muted
// //                 controlsList="nodownload"
// //               ></video>
// //             ) : (
// //               <p className="text-center text-gray-500">No lectures available</p>
// //             )}
// //             <div>
// //               <h1>
// //                 <span className="text-green-500">Title: </span>
// //                 {lectures?.[currentVideoIndex]?.title || "N/A"}
// //               </h1>
// //               <p>
// //                 <span className="text-green-500">Description: </span>
// //                 {lectures?.[currentVideoIndex]?.description ||
// //                   "No description available"}
// //               </p>
// //             </div>
// //           </div>

// //           {/* Right section - List of Lectures */}
// //           <ul className="w-[28rem] p-2 rounded-lg shadow-[0_0_10px_black] space-y-4">
// //             <li className="font-semibold text-xl text-green-500 flex items-center justify-between">
// //               <p>Lectures List</p>
// //               {role === "ADMIN" && (
// //                 <button
// //                   onClick={() =>
// //                     navigate("/add-lecture", { state: { ...courseDetails } })
// //                   }
// //                   className="bg-green-600 hover:bg-green-500 text-white px-2 py-1 rounded-md font-semibold text-sm"
// //                 >
// //                   Add New Lecture
// //                 </button>
// //               )}
// //             </li>

// //             {lectures?.length > 0 ? (
// //               lectures.map((element, index) => (
// //                 <li className="space-y-2" key={element._id}>
// //                   <p
// //                     className="cursor-pointer"
// //                     onClick={() => setCurrentVideoIndex(index)}
// //                   >
// //                     <span className="text-green-500">
// //                       Lecture {index + 1}:{" "}
// //                     </span>
// //                     {element?.title}
// //                   </p>
// //                   {role === "ADMIN" && (
// //                     <button
// //                       onClick={() =>
// //                         handleLectureDelete(courseDetails?._id, element?._id)
// //                       }
// //                       className="bg-red-600 hover:bg-red-500 text-white px-2 py-1 rounded-md font-semibold text-sm"
// //                     >
// //                       Delete Lecture
// //                     </button>
// //                   )}
// //                 </li>
// //               ))
// //             ) : (
// //               <p className="text-center text-gray-500">
// //                 No lectures added yet.
// //               </p>
// //             )}
// //           </ul>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default DisplayLectures;



// //-----------------------------------------------------------------------








// import React, { useEffect, useState } from "react";
// import { useLocation, useNavigate } from "react-router-dom";
// import axios from "axios";
// import { toast } from "react-toastify";
// import { useSelector } from "react-redux";
// import { IoIosStarOutline } from "react-icons/io";

// const DisplayLectures = () => {
//   const navigate = useNavigate();

//   // Fetch course details from the previous component
//   const courseDetails = useLocation().state;
//   // console.log("CourseDetails: ", courseDetails); // we only take the _id from courseDetails

//   const { role } = useSelector((state) => state?.auth);

//   const [lectures, setLectures] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

//   // Fetch lectures when the component mounts
//   useEffect(() => {
//     const fetchLectures = async () => {
//       setLoading(true);
//       try {
//         const response = await axios.get(
//           `http://localhost:5000/api/v1/course/${courseDetails._id}/lectures`
//         );
//         setLectures(response?.data?.lectures); // Assuming the response has a 'lectures' array
//         setLoading(false);
//       } catch (error) {
//         toast.error(
//           error?.response?.data?.message || "Failed to fetch lectures"
//         );
//         setLoading(false);
//       }
//     };

//     if (courseDetails?._id) {
//       fetchLectures();
//     }
//   }, [courseDetails?._id]);

//   // Handle lecture deletion
//   const handleLectureDelete = async (courseId, lectureId) => {
//     try {
//       const res = await axios.delete(
//         `http://localhost:5000/api/v1/course?courseId=${courseId}&lectureId=${lectureId}`
//       );
//       console.log("delete res: ", res);
//       toast.success("Lecture deleted successfully");

//       // Re-fetch lectures after deletion to update the list
//       const response = await axios.get(
//         `http://localhost:5000/api/v1/course/${courseDetails._id}/lectures`
//       );
//       setLectures(response.data.lectures); // Update the lectures list
//     } catch (error) {
//       toast.error(error?.response?.data?.message || "Failed to delete lecture");
//     }
//   };

//   return (
//     <div>
//       <div className="flex flex-col gap-10 items-center justify-center min-h-[90vh] py-10 text-gray-800 mx-[5%]">
//         {/* Display course name */}
//         <h1 className="text-center text-2xl font-semibold text-green-500">
//           Course Name: {courseDetails?.title}
//         </h1>

//         <div className="flex flex-wrap justify-center gap-10 w-full">
//           {/* Left section - Video Player */}
//           <div className="space-y-5 w-[28rem] p-2 rounded-lg shadow-[0_0_10px_black]">
//             {lectures?.length > 0 ? (
//               <video
//                 className="object-fill rounded-tl-lg rounded-tr-lg w-full"
//                 src={lectures[currentVideoIndex]?.lecture?.secure_url}
//                 controls
//                 disablePictureInPicture
//                 controlsList="nodownload"
//               ></video>
//             ) : (
//               <p className="text-center text-gray-500">No lectures available</p>
//             )}
//             <div>
//               <h1>
//                 <span className="text-green-500">Title: </span>
//                 {lectures?.[currentVideoIndex]?.title || "N/A"}
//               </h1>
//               <p>
//                 <span className="text-green-500">Description: </span>
//                 {lectures?.[currentVideoIndex]?.description ||
//                   "No description available"}
//               </p>
//             </div>
//           </div>

//           {/* Right section - List of Lectures */}
//           <ul className="w-[28rem] p-2 rounded-lg shadow-[0_0_10px_black] space-y-4">
//             <li className="font-semibold text-xl text-green-500 flex items-center justify-between">
//               <p>Lectures List</p>
//               {role === "ADMIN" && (
//                 <button
//                   onClick={() =>
//                     navigate("/add-lecture", { state: { ...courseDetails } })
//                   }
//                   className="bg-green-600 hover:bg-green-500 text-white px-2 py-1 rounded-md font-semibold text-sm"
//                 >
//                   Add New Lecture
//                 </button>
//               )}
//               {role === "USER" && (
//                 <div>
//                   <div className="text-gray-800 font-normal text-[17px]">
//                     Rate This Course
//                   </div>
//                   <span className="flex items-center justify-center gap-1">
//                     <IoIosStarOutline className="cursor-pointer"/>
//                     <IoIosStarOutline className="cursor-pointer"/>
//                     <IoIosStarOutline className="cursor-pointer"/>
//                     <IoIosStarOutline className="cursor-pointer"/>
//                     <IoIosStarOutline className="cursor-pointer"/>
//                   </span>
//                 </div>
//               )}
//             </li>

//             {lectures?.length > 0 ? (
//               lectures.map((element, index) => (
//                 <li className="space-y-2" key={element._id}>
//                   <p
//                     className="cursor-pointer"
//                     onClick={() => setCurrentVideoIndex(index)}
//                   >
//                     <span className="text-green-500">
//                       Lecture {index + 1}:{" "}
//                     </span>
//                     {element?.title}
//                   </p>
//                   {role === "ADMIN" && (
//                     <button
//                       onClick={() =>
//                         handleLectureDelete(courseDetails?._id, element?._id)
//                       }
//                       className="bg-red-600 hover:bg-red-500 text-white px-2 py-1 rounded-md font-semibold text-sm"
//                     >
//                       Delete Lecture
//                     </button>
//                   )}
//                 </li>
//               ))
//             ) : (
//               <p className="text-center text-gray-500">
//                 No lectures added yet.
//               </p>
//             )}
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DisplayLectures;


//----------------------------------------++++++++++++++++++++++++++++++------------------------------------

import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import { CheckCircle2, CirclePlay } from "lucide-react";

const DisplayLectures = () => {
  const navigate = useNavigate();
  const courseDetails = useLocation().state;
  const { role } = useSelector((state) => state?.auth);

  const [lectures, setLectures] = useState([]);
  const [currentLecture, setCurrentLecture] = useState(null);

  useEffect(() => {
    const fetchLectures = async () => {
      try {
        const res = await axios.get(
          `http://localhost:5000/api/v1/course/${courseDetails._id}/lectures`
        );
        setLectures(res.data.lectures || []);
        setCurrentLecture(res.data.lectures?.[0] || null);
      } catch (err) {
        toast.error(err?.response?.data?.message || "Failed to fetch lectures");
      }
    };

    if (courseDetails?._id) fetchLectures();
  }, [courseDetails?._id]);

  const handleLectureDelete = async (courseId, lectureId) => {
    try {
      await axios.delete(
        `http://localhost:5000/api/v1/course?courseId=${courseId}&lectureId=${lectureId}`
      );
      toast.success("Lecture deleted successfully");
      const res = await axios.get(
        `http://localhost:5000/api/v1/course/${courseDetails._id}/lectures`
      );
      setLectures(res.data.lectures || []);
      setCurrentLecture(res.data.lectures?.[0] || null);
    } catch (err) {
      toast.error(err?.response?.data?.message || "Failed to delete lecture");
    }
  };

  return (
    <div className="max-w-7xl mx-auto md:p-12 lg:p-12 p-8">
      {/* Header */}
      <div className="flex justify-between mb-4 items-center">
        <h1 className="md:text-2xl lg:text-2xl text-md font-bold text-green-600">
          Course Name: {courseDetails?.title}
        </h1>
        {role === "ADMIN" && (
          <button
            onClick={() => navigate("/add-lecture", { state: courseDetails })}
            className="bg-green-600 hover:bg-green-500 text-white px-4 py-2 rounded-md transition"
          >
            Add New Lecture
          </button>
        )}
      </div>

      <div className="flex flex-col md:flex-row gap-6">
        {/* Video Section */}
        <div className="flex-1 md:w-3/5 rounded-lg shadow-lg p-4 border">
          {currentLecture ? (
            <video
              src={currentLecture.lecture?.secure_url}
              controls
              className="w-full rounded-lg"
              disablePictureInPicture
              controlsList="nodownload"
            />
          ) : (
            <p className="text-center text-gray-500">No lectures available</p>
          )}
          {currentLecture && (
            <div className="mt-2">
              <h3 className="font-medium text-lg">Title: {currentLecture.title}</h3>
              <p className="text-sm text-gray-700">
                Description: {currentLecture.description || "No description available"}
              </p>
            </div>
          )}
        </div>

        {/* Lecture List Sidebar */}
        <div className="flex flex-col w-full md:w-2/5 border-t md:border-t-0 md:border-l border-gray-200 md:pl-4 pt-4 md:pt-0 overflow-y-auto">
          <h2 className="font-semibold text-xl mb-4">Course Lectures</h2>
          {lectures.length > 0 ? (
            lectures.map((lecture, idx) => (
              <div
                key={lecture._id}
                className={`p-4 border rounded-md mb-3 hover:bg-gray-100 cursor-pointer ${
                  currentLecture?._id === lecture._id ? "bg-gray-200" : ""
                }`}
                onClick={() => setCurrentLecture(lecture)}
              >
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <CirclePlay size={20} className="text-gray-500" />
                    <span className="font-medium">
                      Lecture {idx + 1}: {lecture.title}
                    </span>
                  </div>
                  {role === "ADMIN" && (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleLectureDelete(courseDetails._id, lecture._id);
                      }}
                      className="text-red-600 hover:underline text-sm"
                    >
                      Delete
                    </button>
                  )}
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500">No lectures added yet.</p>
          )}

          {/* Rating for USER */}
          {role === "USER" && lectures.length > 0 && (
            <div className="mt-4 text-center">
              <div className="text-gray-800 font-normal text-[17px] mb-2">Rate This Course</div>
              <div className="flex justify-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <CheckCircle2 key={i} className="cursor-pointer text-yellow-500" />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DisplayLectures;

