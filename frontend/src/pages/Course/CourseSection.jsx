// export default function CourseSection() {
//   const [select, setSelect] = useState(false);
//   return (
//     <>
//       <div className="mt-12 bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-500 p-8">
//         <h1 className="text-center text-4xl font-bold text-white">
//           Explore Our Courses And Learn With Build Skills.
//         </h1>
//         <div className="gap-8 flex items-center justify-between md:mx-48 bg-white p-3 mt-8 rounded-full">
//           <li className="flex gap-2 items-center border-[2px] rounded-3xl px-4 py-2 bg-blue-700 border-none cursor-pointer text-white text-sm">
//             <span>
//               <BiCategoryAlt />
//             </span>
//             All Categories
//           </li>
//           <li className="flex gap-2 items-center border-[2px] rounded-3xl px-4 py-2 bg-blue-700 border-none cursor-pointer text-white text-sm">
//             <span>
//               <LuCode2 />
//             </span>
//             Programming
//           </li>
//           <li className="flex gap-2 items-center border-[2px] rounded-3xl px-4 py-2 bg-blue-700 border-none cursor-pointer text-white text-sm">
//             <span>
//               <MdOutlineWeb />
//             </span>
//             Web Design
//           </li>
//         </div>
//         <div className="gap-4 grid grid-cols-3 md:mx-48 p-2 mt-8">
//           {CourseData.map((course, idx) => (
//             <CourseCard
//               key={idx}
//               img={course.coverImg}
//               duration={course.duration}
//               title={course.title}
//               lessons={course.lessons}
//               level={course.level}
//               rating={course.rating}
//               user={course.userImg}
//               name={course.userName}
//               price={course.price}
//             />
//           ))}
//         </div>
//       </div>
//     </>
//   );
// }

// import { BiCategoryAlt } from "react-icons/bi";
// import { LuCode2 } from "react-icons/lu";
// import { MdOutlineWeb } from "react-icons/md";
// import CourseCard from "./CourseCard";
// // import CourseData from "../../../public/coursedata.json";
// import { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { getAllCourses } from "../../redux/features/courseSlice";
// import { useParams } from "react-router-dom";
// // import { toast } from "react-toastify";
// // import { useLocation } from "react-router-dom";

// export default function CourseSection({ filterCourseBasedOnCategoryOrTitle }) {
//   const dispatch = useDispatch();
//   const params = useParams();
//   const courseData = useSelector((state) => state?.courses?.courses?.courses);
//   const [filterBy, setFilterBy] = useState("All Categories");
//   const [dataFilter, setDataFilter] = useState([]);

//   const handleDataFilter = (category) => {
//     if(category === "All Categories") {
//       setDataFilter(courseData);
//     } else {
//       const filteredData = courseData?.filter(
//         (course) => course.category === category
//       );
//       setDataFilter(filteredData);
//     }
//     setFilterBy(category);
//     // return [
//     //   ...filteredData
//     // ]
//   };

//   // const handleDataFilter = (category) => {
//   //   let combinedData = [
//   //     ...(filterCourseBasedOnCategoryOrTitle || []),
//   //     ...(courseData || []),
//   //   ];

//   //   if (category === "All Categories") {
//   //     setDataFilter(combinedData);
//   //   } else {
//   //     const filteredData = combinedData?.filter(
//   //       (course) => course.category === category
//   //     );
//   //     setDataFilter(filteredData);
//   //   }
//   //   setFilterBy(category);
//   // };

//   // const handleDataAllCategory = () => {
//   //   const allCategory = CourseData.map((course) => course);
//   //   setDataFilter(allCategory);
//   // };

//   // useEffect(() => {
//   //   setDataFilter(dataFilter)
//   // }, [filterBy])

//   // console.log("filterBy: ", filterBy);

//   // console.log("dataFilter => ", dataFilter);
//   // console.log("handleDataFilter => ", handleDataFilter);

//   useEffect(() => {
//     dispatch(getAllCourses());
//     setDataFilter(courseData);
//   }, []);

//   // const { pathname } = useLocation();
//   // useEffect(() => {
//   //   toast.success("Courses Fetched Successfully!");
//   // }, [pathname === '/courses'])

//   return (
//     <>
//       <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-500 md:p-8 p-4">
//         <h1 className="text-center text-2xl md:text-4xl font-bold text-white md:px-0 px-2 mt-4 mb-2">
//           Explore Our Courses And Learn With Build Skills
//         </h1>
//         <div className="gap-8 flex items-center justify-between mx-2 md:mx-48 bg-white p-3 mt-8 rounded-full">
//           <li
//             className={`flex gap-1 md:gap-2 items-center border-[2px] rounded-3xl px-1 md:px-4 py-1 md:py-2 bg-blue-700 border-none cursor-pointer text-gray-100 md:text-sm text-[9px] ${
//               "All Categories".toLowerCase() === filterBy.toLowerCase() &&
//               "text-white bg-blue-800"
//             }`}
//             onClick={() => handleDataFilter("All Categories")}
//           >
//             <span>
//               <BiCategoryAlt />
//             </span>
//             All Categories
//           </li>
//           <li
//             className={`flex gap-1 md:gap-2 items-center border-[2px] rounded-3xl px-1 md:px-4 py-1 md:py-2  bg-blue-700 border-none cursor-pointer text-gray-100 md:text-sm text-[9px] ${
//               "Programming".toLowerCase() === filterBy.toLowerCase() &&
//               "bg-blue-800 text-white"
//             }`}
//             onClick={() => handleDataFilter("Programming")}
//           >
//             <span>
//               <LuCode2 />
//             </span>
//             Programming
//           </li>
//           <li
//             className={`flex gap-1 md:gap-2 items-center border-[2px] rounded-3xl px-1 md:px-4 py-1 md:py-2  bg-blue-700 border-none cursor-pointer text-gray-100 md:text-sm text-[9px] ${
//               "Web Design".toLowerCase() === filterBy.toLowerCase() &&
//               "bg-blue-800 text-white"
//             }`}
//             onClick={() => handleDataFilter("Web Development")}
//           >
//             <span>
//               <MdOutlineWeb />
//             </span>
//             Web Design
//           </li>
//         </div>
//         <div className="gap-4 md:grid sm:grid lg:grid grid-cols-3 md:mx-48 p-2 md:mt-8 lg:mt-8 sm:mt-8 mt-4">
//           {dataFilter?.map((course, idx) => {
//             return (
//               <CourseCard
//                 key={idx}
//                 id={course._id}
//                 // img={course.coverImg}
//                 img={course.thumbnail?.secure_url}
//                 title={course.title}
//                 duration={course.duration}
//                 lessons={course.lessons}
//                 level={course.level}
//                 rating={course.rating}
//                 user={course.userImg}
//                 name={course.createdBy}
//                 price={course.price}
//                 category={course.category}
//               />
//             );
//           })}
//           {filterCourseBasedOnCategoryOrTitle?.map((course, idx) => {
//             return (
//               <CourseCard
//                 key={idx}
//                 img={course.thumbnail?.secure_url}
//                 title={course.title}
//                 duration={course.duration}
//                 lessons={course.lessons}
//                 level={course.level}
//                 rating={course.rating}
//                 user={course.userImg}
//                 name={course.createdBy}
//                 price={course.price}
//                 category={course.category}
//               />
//             );
//           })}
//         </div>
//       </div>
//     </>
//   );
// }

//----------------------------------------------------------------------------------

// import { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { getAllCourses } from "../../redux/features/courseSlice";
// import CourseCard from "./CourseCard";
// import { BiCategoryAlt } from "react-icons/bi";
// import { LuCode } from "react-icons/lu";
// import { MdOutlineWeb } from "react-icons/md";
// import { useLocation } from "react-router-dom";
// import { toast } from "react-toastify";

// export default function CourseSection({
//   searchQuery,
//   selectedCategory,
//   setSelectedCategory,
// }) {
//   const dispatch = useDispatch();
//   const { pathname } = useLocation();
//   const courseData = useSelector((state) => state?.courses?.courses?.courses);
//   const [filteredCourses, setFilteredCourses] = useState([]);

//   // useEffect(() => {
//   //   dispatch(getAllCourses()).then((res) => {
//   //     // Only toast if you're on the course page and data exists
//   //     if (pathname === "/courses" && res?.payload?.success) {
//   //       toast.success(res.payload.message);
//   //     }
//   //   });
//   // }, [dispatch, pathname]);

//   useEffect(() => {
//     const fetchCourses = async () => {
//       if (pathname !== "/courses") return;
//       const toastId = toast.loading("Fetching courses...");

//       try {
//         const res = await dispatch(getAllCourses()).unwrap(); // .unwrap() if you're using createAsyncThunk

//         if (pathname === "/courses" && res?.success) {
//           toast.update(toastId, {
//             render: res.message || "Courses fetched successfully!",
//             type: "success",
//             isLoading: false,
//             autoClose: 3000,
//           });
//         }
//       } catch (error) {
//         toast.update(toastId, {
//           render: "Failed to fetch courses.",
//           type: "error",
//           isLoading: false,
//           autoClose: 3000,
//         });
//       }
//     };

//     fetchCourses();
//   }, [dispatch, pathname]);

//   useEffect(() => {
//     handleFilter();
//   }, [searchQuery, selectedCategory, courseData]);

//   const handleFilter = () => {
//     if (!courseData) return;

//     let filtered = courseData;

//     // Filter by category
//     if (selectedCategory !== "All Categories") {
//       filtered = filtered?.filter(
//         (course) =>
//           course?.category?.toLowerCase() === selectedCategory?.toLowerCase()
//       );
//     }

//     // Filter by search query
//     if (searchQuery) {
//       filtered = filtered.filter(
//         (course) =>
//           course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
//           course.category.toLowerCase().includes(searchQuery.toLowerCase())
//       );
//     }

//     setFilteredCourses(filtered);
//   };

//   return (
//     <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-500 md:p-8 p-4">
//       <h1 className="text-center text-2xl md:text-4xl font-bold text-white mt-4 mb-2">
//         Explore Our Courses And Learn With Build Skills
//       </h1>

//       {/* Category Filters */}
//       <div className="gap-8 flex items-center justify-between mx-2 md:mx-48 bg-white p-3 mt-8 rounded-full">
//         {["All Categories", "Programming", "Web Development"].map(
//           (category) => (
//             <li
//               key={category}
//               className={`
//               flex gap-1 md:gap-2 items-center border-[2px] rounded-3xl px-1 md:px-4 py-1 md:py-2 bg-blue-700 border-none cursor-pointer text-gray-100 md:text-sm
//               ${
//                 selectedCategory === category
//                   ? "bg-blue-800 text-white"
//                   : "bg-blue-700 text-gray-100"
//               }
//               cursor-pointer text-[9px]`}
//               onClick={() => setSelectedCategory(category)}
//             >
//               {category === "All Categories" && <BiCategoryAlt />}
//               {category === "Programming" && <LuCode />}
//               {category === "Web Development" && <MdOutlineWeb />}
//               {category}
//             </li>
//           )
//         )}
//       </div>

//       {/* Course Cards */}
//       <div className="gap-4 md:grid sm:grid lg:grid grid-cols-3 md:mx-48 p-2 md:mt-8 lg:mt-8 sm:mt-8 mt-4">
//         {filteredCourses.map((course, idx) => (
//           <CourseCard
//             key={idx}
//             id={course?._id}
//             img={course?.thumbnail?.secure_url}
//             title={course?.title}
//             duration={course?.duration}
//             lessons={course?.numberOfLectures}
//             level={course?.level}
//             rating={course?.rating}
//             user={course?.userImg}
//             name={course?.createdBy}
//             price={course?.price}
//             category={course?.category}
//           />
//         ))}
//       </div>
//     </div>
//   );
// }

//-----------------------------------------------------------------------------------

// With react-loading-skeleton
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCourses } from "../../redux/features/courseSlice";
import CourseCard from "./CourseCard";
import { BiCategoryAlt } from "react-icons/bi";
import { LuCode } from "react-icons/lu";
import { MdOutlineWeb } from "react-icons/md";
import { useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function CourseSection({
  searchQuery,
  selectedCategory,
  setSelectedCategory,
}) {
  const dispatch = useDispatch();
  const { pathname } = useLocation();

  const { courses: courseData, isLoading } = useSelector(
    (state) => state?.courses
  );

  const [filteredCourses, setFilteredCourses] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      if (pathname !== "/courses") return;

      const toastId = toast.loading("Fetching courses...");

      try {
        const res = await dispatch(getAllCourses()).unwrap();
        if (pathname === "/courses" && res?.success) {
          toast.update(toastId, {
            render: res.message || "Courses fetched successfully!",
            type: "success",
            isLoading: false,
            autoClose: 3000,
            closeButton: true,
            onClick: () => toast.dismiss(toastId),
          });
        }
      } catch (error) {
        toast.update(toastId, {
          render: "Failed to fetch courses.",
          type: "error",
          isLoading: false,
          autoClose: 3000,
          closeButton: true,
          onClick: () => toast.dismiss(toastId),
        });
      }
    };

    fetchCourses();
  }, [dispatch, pathname]);

  useEffect(() => {
    handleFilter();
  }, [searchQuery, selectedCategory, courseData]);

  const handleFilter = () => {
    if (!courseData?.courses) return;

    let filtered = courseData.courses;

    if (selectedCategory !== "All Categories") {
      filtered = filtered?.filter(
        (course) =>
          course?.category?.toLowerCase() === selectedCategory?.toLowerCase()
      );
    }

    if (searchQuery) {
      filtered = filtered.filter(
        (course) =>
          course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          course.category.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    setFilteredCourses(filtered);
  };

  return (
    <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-500 md:p-8 p-4">
      <h1 className="text-center text-2xl md:text-4xl font-bold text-white mt-4 mb-2">
        Explore Our Courses And Build Skills
      </h1>

      {/* Category Filters */}
      <div className="gap-8 flex items-center justify-between mx-2 md:mx-48 bg-white p-3 mt-8 rounded-full">
        {["All Categories", "Programming", "Web Development"].map(
          (category) => (
            <li
              key={category}
              className={`
                flex gap-1 md:gap-2 items-center border-[2px] rounded-3xl px-1 md:px-4 py-1 md:py-2 
                ${
                  selectedCategory === category ? "bg-blue-800" : "bg-blue-700"
                } 
                text-white cursor-pointer text-[9px] md:text-sm
              `}
              onClick={() => setSelectedCategory(category)}
            >
              {category === "All Categories" && <BiCategoryAlt />}
              {category === "Programming" && <LuCode />}
              {category === "Web Development" && <MdOutlineWeb />}
              {category}
            </li>
          )
        )}
      </div>

      {/* Course Cards or Skeleton */}
      <div className="gap-4 md:grid sm:grid lg:grid grid-cols-3 md:mx-48 p-2 md:mt-8 lg:mt-8 sm:mt-8 mt-4">
        {isLoading
          ? Array(6)
              .fill(0)
              .map((_, i) => (
                <div key={i} className="bg-white rounded-lg p-4 shadow-md mt-4">
                  <Skeleton height={200} className="rounded-md" />
                  <Skeleton
                    width={`70%`}
                    height={20}
                    style={{ marginTop: "12px" }}
                  />
                  <Skeleton count={2} />
                  <Skeleton
                    width={`40%`}
                    height={20}
                    style={{ marginTop: "8px" }}
                  />
                  <Skeleton count={2} />
                  <Skeleton
                    width={`60%`}
                    height={20}
                    style={{ marginTop: "10px" }}
                  />
                </div>
              ))
          : filteredCourses.map((course, idx) => (
              <CourseCard
                key={idx}
                courseId={course?._id}
                img={course?.thumbnail?.secure_url}
                title={course?.title}
                duration={course?.duration}
                lessons={course?.numberOfLectures}
                level={course?.level}
                rating={course?.rating}
                userImg={course?.userImg}
                name={course?.createdBy}
                price={course?.price}
                category={course?.category}
              />
            ))}
      </div>
    </div>
  );
}
