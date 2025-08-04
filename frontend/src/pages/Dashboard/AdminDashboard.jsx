// import React, { useEffect } from "react";
// import {
//   Chart as ChartJS,
//   ArcElement,
//   Tooltip,
//   Legend,
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   Title,
// } from "chart.js";
// import { Pie, Bar } from "react-chartjs-2";
// import { FaUsers } from "react-icons/fa";
// import { GiMoneyStack } from "react-icons/gi";
// import { FcSalesPerformance } from "react-icons/fc";
// import { BsCollectionPlayFill, BsTrash } from "react-icons/bs";
// import { MdOutlineModeEdit } from "react-icons/md";
// import { useNavigate } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { deleteCourse, getAllCourses } from "../../redux/features/courseSlice";
// import { getStatsData } from "../../redux/features/statSlice";
// import { getPaymentRecord } from "../../redux/features/razorpaySlice";

// ChartJS.register(
//   ArcElement,
//   Tooltip,
//   Legend,
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   Title
// );

// const AdminDashboard = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const { allUsersCount, subscribedUsersCount } = useSelector(
//     (state) => state.stat
//   );
//   const { allPayments, finalMonths, monthlySalesRecord } = useSelector(
//     (state) => state.razorpay
//   );

//   const userData = {
//     labels: ["Registered User", "Enrolled User"],
//     datasets: [
//       {
//         label: "User Details",
//         data: [allUsersCount, subscribedUsersCount],
//         backgroundColor: ["yellow", "green"],
//         borderColor: ["yellow", "green"],
//         borderWidth: 1,
//       },
//     ],
//   };

//   const salesData = {
//     labels: [
//       "January",
//       "Febraury",
//       "March",
//       "April",
//       "May",
//       "June",
//       "July",
//       "August",
//       "September",
//       "October",
//       "November",
//       "December",
//     ],
//     fontColor: "white",
//     datasets: [
//       {
//         label: "Sales / Month",
//         data: monthlySalesRecord,
//         backgroundColor: ["rgb(255, 99, 132)"],
//         borderColor: ["white"],
//         borderWidth: 2,
//       },
//     ],
//   };

//   // getting the courses data from redux toolkit store
//   const myCourses = useSelector((state) => state.courses?.courses?.courses);
//   // console.log("myCourses: ", myCourses);

//   // function to handle the course delete
//   const handleCourseDelete = async (id) => {
//     if (window.confirm("Are you sure you want to delete the course?")) {
//       const res = await dispatch(deleteCourse(id));

//       // fetching the new updated data for the course
//       if (res.payload.success) {
//         await dispatch(getAllCourses());
//       }
//     }
//   };

//   useEffect(() => {
//     (async () => {
//       await dispatch(getAllCourses());
//       await dispatch(getStatsData());
//       await dispatch(getPaymentRecord());
//     })();
//   }, []);

//   return (
//     <div>
//       <div className="min-h-[90vh] pt-5 flex flex-col flex-wrap gap-10 text-gray-800">
//         <h1 className="text-center md:text-3xl text-xl font-semibold text-green-500">
//           Admin Dashboard
//         </h1>

//         {/* creating the records card and chart for sales and user details */}
//         <div className="grid md:grid-cols-2 lg:grid-cols-2 grid-cols-1 gap-5 m-auto mx-10">
//           {/* displaying the users chart and data */}
//           <div className="flex flex-col items-center gap-10 p-5 shadow-lg rounded-md border-[1px] border-gray-300">
//             {/* for displaying the pie chart */}
//             <div className="md:w-80 md:h-80 lg:h-80 lg:w-80 h-60 w-60">
//               <Pie data={userData} />
//             </div>

//             {/* card for user data */}
//             <div className="grid grid-cols-2 md:gap-5 gap-2 md:text-[16px] text-[10px]">
//               {/* card for registered users */}
//               <div className="flex items-center justify-between md:py-5 md:px-5 py-2 px-2 md:gap-5 gap-1 rounded-md shadow-md border-[1px] border-gray-200">
//                 <div className="flex flex-col items-center">
//                   <p className="font-semibold">Registered Users</p>
//                   <h3 className="md:text-4xl sm:text-xl text-[12px] font-bold">{allUsersCount}</h3>
//                 </div>
//                 <FaUsers className="text-green-500 md:text-5xl text-3xl" />
//               </div>

//               {/* card for enrolled users */}
//               <div className="flex items-center justify-between md:py-5 md:px-5 py-2 px-2 md:gap-5 gap-1 rounded-md shadow-md border-[1px] border-gray-200">
//                 <div className="flex flex-col items-center">
//                   <p className="font-semibold">Subscribed Users</p>
//                   <h3 className="md:text-4xl sm:text-xl text-[12px] font-bold">{subscribedUsersCount}</h3>
//                 </div>
//                 <FaUsers className="text-green-500 md:text-5xl text-3xl" />
//               </div>
//             </div>
//           </div>

//           {/* displaying the sales chart and data */}
//           <div className="flex flex-col items-center gap-10 p-5 shadow-lg rounded-md border-[1px] border-gray-300">
//             {/* for displaying the bar chart */}
//             <div className="md:h-80 lg:h-80 h-60 relative w-full">
//               <Bar className="absolute bottom-0 md:h-80 lg:h-80 h-60 w-full" data={salesData} />
//             </div>

//             {/* card for user data */}
//             <div className="grid grid-cols-2 md:gap-5 gap-2 md:text-[16px] text-[10px]">
//               {/* card for registered users */}
//               <div className="flex items-center justify-between md:py-5 md:px-5 py-2 px-2 md:gap-5 gap-1 rounded-md shadow-md border-[1px] border-gray-200">
//                 <div className="flex flex-col items-center">
//                   <p className="font-semibold">Subscriptions Count</p>
//                   <h3 className="md:text-4xl sm:text-xl text-[12px] font-bold">{allPayments?.count}</h3>
//                 </div>
//                 <FcSalesPerformance className="text-green-500 md:text-5xl text-3xl" />
//               </div>

//               {/* card for enrolled users */}
//               <div className="flex items-center justify-between md:py-5 md:px-5 py-2 px-2 md:gap-5 gap-1 rounded-md shadow-md border-[1px] border-gray-200">
//                 <div className="flex flex-col items-center">
//                   <p className="font-semibold">Total Revenue</p>
//                   <h3 className="md:text-4xl sm:text-xl text-[12px] font-bold">
//                     {allPayments?.count * 499}
//                   </h3>
//                 </div>
//                 <GiMoneyStack className="text-green-500 md:text-5xl text-3xl" />
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* CRUD courses section */}
//         <div className="mx-[10%] w-[80%] self-center flex flex-col items-center justify-center gap-10 mb-10">
//           <div className="flex w-full items-center justify-between">
//             <h1 className="text-center md:text-3xl text-[14px] font-semibold">
//               Courses Overview
//             </h1>

//             {/* add course card */}
//             <button
//               onClick={() => {
//                 navigate("/create-course", {
//                   state: {
//                     initialCourseData: {
//                       newCourse: true,
//                       title: "",
//                       category: "",
//                       createdBy: "",
//                       description: "",
//                       thumbnail: undefined,
//                       previewImage: "",
//                     },
//                   },
//                 });
//               }}
//               className="w-fit bg-green-500 hover:bg-green-600 text-white transition-all ease-in-out duration-300 rounded py-2 px-4 font-semibold md:text-lg cursor-pointer text-sm"
//             >
//               Create New Course
//             </button>
//           </div>

//           <div className="overflow-x-auto w-full">
//             <table className="w-full border border-gray-300 md:text-[16px] text-[11px]">
//               <thead className="bg-gray-200">
//                 <tr>
//                   <th className="px-4 py-2 border">S No.</th>
//                   <th className="px-4 py-2 border">Course Title</th>
//                   <th className="px-4 py-2 border">Course Category</th>
//                   <th className="px-4 py-2 border">Instructor</th>
//                   <th className="px-4 py-2 border">Total Lectures</th>
//                   <th className="px-4 py-2 border">Course Description</th>
//                   <th className="px-4 py-2 border">Actions</th>
//                 </tr>
//               </thead>

//               <tbody>
//                 {myCourses?.map((element, index) => (
//                   <tr key={element?._id} className="border-b hover:bg-gray-100">
//                     <td className="px-4 py-2 border text-center">
//                       {index + 1}
//                     </td>

//                     {/* Course Title */}
//                     <td className="px-4 py-2 border">
//                       <textarea
//                         readOnly
//                         className="w-40 h-auto bg-gray-100 resize-none border border-gray-300 p-2 rounded-md"
//                         value={element?.title}
//                       ></textarea>
//                     </td>

//                     <td className="px-4 py-2 border">{element?.category}</td>
//                     <td className="px-4 py-2 border">{element?.createdBy}</td>
//                     <td className="px-4 py-2 border">
//                       {element?.numberOfLectures}
//                     </td>

//                     {/* Course Description */}
//                     <td className="px-4 py-2 border max-w-28 truncate">
//                       <textarea
//                         readOnly
//                         className="w-80 h-auto bg-gray-100 resize-none border border-gray-300 p-2 rounded-md"
//                         value={element?.description.replace(/<\/?p>/g, "")}
//                       ></textarea>
//                     </td>

//                     {/* Actions */}
//                     <td className="px-4 py-2 border">
//                       <div className="flex items-center gap-4">
//                         {/* Edit Button */}
//                         <button
//                           onClick={() =>
//                             navigate(`/update-course/${element._id}`, {
//                               state: {
//                                 initialCourseData: {
//                                   newCourse: false,
//                                   ...element,
//                                 },
//                               },
//                             })
//                           }
//                           className="bg-yellow-500 hover:bg-yellow-600 transition-all duration-300 text-white py-2 px-4 rounded-md font-bold md:text-lg text-sm"
//                         >
//                           <MdOutlineModeEdit />
//                         </button>

//                         {/* Delete Button */}
//                         <button
//                           onClick={() => handleCourseDelete(element._id)}
//                           className="bg-red-500 hover:bg-red-600 transition-all duration-300 text-white py-2 px-4 rounded-md font-bold md:text-lg text-sm"
//                         >
//                           <BsTrash />
//                         </button>

//                         {/* Manage Lectures */}
//                         <button
//                           onClick={() =>
//                             navigate("/display-lectures", {
//                               state: { ...element },
//                             })
//                           }
//                           className="bg-green-500 hover:bg-green-600 transition-all duration-300 text-white py-2 px-4 rounded-md font-bold md:text-lg text-sm"
//                         >
//                           <BsCollectionPlayFill />
//                         </button>
//                       </div>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AdminDashboard;

//----------------------------------------------------------------------------------------------
// Admin dashboard based on life-time access -> 1 year access to courses ( Not based on subscription )

import React, { useEffect } from "react";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
} from "chart.js";
import { Pie, Bar } from "react-chartjs-2";
import { FaUsers } from "react-icons/fa";
import { GiMoneyStack } from "react-icons/gi";
import { FcSalesPerformance } from "react-icons/fc";
import { BsCollectionPlayFill, BsTrash } from "react-icons/bs";
import { MdOutlineModeEdit } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteCourse, getAllCourses } from "../../redux/features/courseSlice";
import { getStatsData } from "../../redux/features/statSlice";
import { getPaymentRecord } from "../../redux/features/razorpaySlice";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  Title
);

const AdminDashboard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { allUsersCount, purchasedUsersCount } = useSelector(
    (state) => state.stat
  );
  const { allPayments, monthlySalesRecord } = useSelector(
    (state) => state.razorpay
  );

  // const totalRevenue = allPayments?.length
  //   ? allPayments.reduce((acc, payment) => acc + payment.amount, 0)
  //   : 0;

  // console.log("Course prices", allPayments.map(p => p.course?.price));


  const totalRevenue = Array.isArray(allPayments)
    ? allPayments.reduce(
        (acc, payment) => acc + (payment.course?.price || 0),
        0
      )
    : 0;

  const userData = {
    labels: ["Registered Users", "Purchased Users"],
    datasets: [
      {
        label: "User Stats",
        data: [allUsersCount, purchasedUsersCount],
        backgroundColor: ["#FFD700", "#32CD32"],
        borderColor: ["#FFD700", "#32CD32"],
        borderWidth: 1,
      },
    ],
  };

  const salesData = {
    labels: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ],
    datasets: [
      {
        label: "Sales / Month",
        data: monthlySalesRecord,
        backgroundColor: "rgba(54, 162, 235, 0.6)",
        borderColor: "#fff",
        borderWidth: 2,
      },
    ],
  };

  const myCourses = useSelector((state) => state.courses?.courses?.courses);

  const handleCourseDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete the course?")) {
      const res = await dispatch(deleteCourse(id));
      if (res.payload.success) {
        await dispatch(getAllCourses());
      }
    }
  };

  useEffect(() => {
    dispatch(getAllCourses());
    dispatch(getStatsData());
    dispatch(getPaymentRecord());
  }, []);

  return (
    <div className="min-h-[90vh] pt-5 flex flex-col flex-wrap gap-10 text-gray-800">
      <h1 className="text-center md:text-3xl text-xl font-semibold text-green-500">
        Admin Dashboard
      </h1>

      {/* Stats & Charts Section */}
      <div className="grid md:grid-cols-2 lg:grid-cols-2 grid-cols-1 gap-5 mx-10">
        {/* User Pie Chart */}
        <div className="flex flex-col items-center gap-10 p-5 shadow-lg rounded-md border border-gray-300">
          <div className="md:w-80 md:h-80 h-60 w-60">
            <Pie data={userData} />
          </div>
          <div className="grid grid-cols-2 gap-5 text-sm md:text-base">
            <div className="flex flex-col items-center p-4 border rounded-md shadow-md">
              <p className="font-semibold">Registered Users</p>
              <h3 className="text-2xl font-bold">{allUsersCount}</h3>
              <FaUsers className="text-green-500 text-3xl mt-2" />
            </div>
            <div className="flex flex-col items-center p-4 border rounded-md shadow-md">
              <p className="font-semibold">Purchased Users</p>
              <h3 className="text-2xl font-bold">{purchasedUsersCount}</h3>
              <FaUsers className="text-green-500 text-3xl mt-2" />
            </div>
          </div>
        </div>

        {/* Sales Bar Chart */}
        <div className="flex flex-col items-center gap-10 p-5 shadow-lg rounded-md border border-gray-300">
          <div className="md:h-80 h-60 w-full">
            <Bar className="w-full h-full" data={salesData} />
          </div>
          <div className="grid grid-cols-2 gap-5 text-sm md:text-base">
            <div className="flex flex-col items-center p-4 border rounded-md shadow-md">
              <p className="font-semibold">Total Purchases</p>
              <h3 className="text-2xl font-bold">{allPayments?.length || 0}</h3>
              <FcSalesPerformance className="text-green-500 text-3xl mt-2" />
            </div>
            <div className="flex flex-col items-center p-4 border rounded-md shadow-md">
              <p className="font-semibold">Total Revenue</p>
              <h3 className="text-2xl font-bold">
                ₹{(totalRevenue).toFixed(2)}
              </h3>
              <GiMoneyStack className="text-green-500 text-3xl mt-2" />
            </div>
          </div>
        </div>
      </div>

      {/* CRUD courses section */}
      <div className="mx-[10%] w-[80%] self-center flex flex-col items-center justify-center gap-10 mb-10">
        <div className="flex w-full items-center justify-between">
          <h1 className="text-center md:text-3xl text-[14px] font-semibold">
            Courses Overview
          </h1>
          <button
            onClick={() => {
              navigate("/create-course", {
                state: {
                  initialCourseData: {
                    newCourse: true,
                    title: "",
                    category: "",
                    createdBy: "",
                    description: "",
                    thumbnail: undefined,
                    previewImage: "",
                  },
                },
              });
            }}
            className="w-fit bg-green-500 hover:bg-green-600 text-white transition-all ease-in-out duration-300 rounded py-2 px-4 font-semibold md:text-lg cursor-pointer text-sm"
          >
            Create New Course
          </button>
        </div>

        <div className="overflow-x-auto w-full">
          <table className="w-full border border-gray-300 md:text-[16px] text-[11px]">
            <thead className="bg-gray-200">
              <tr>
                <th className="px-4 py-2 border">S No.</th>
                <th className="px-4 py-2 border">Course Title</th>
                <th className="px-4 py-2 border">Course Category</th>
                <th className="px-4 py-2 border">Instructor</th>
                <th className="px-4 py-2 border">Total Lectures</th>
                <th className="px-4 py-2 border">Course Description</th>
                <th className="px-4 py-2 border">Actions</th>
              </tr>
            </thead>

            <tbody>
              {myCourses?.map((element, index) => (
                <tr key={element?._id} className="border-b hover:bg-gray-100">
                  <td className="px-4 py-2 border text-center">{index + 1}</td>

                  {/* Course Title */}
                  <td className="px-4 py-2 border">
                    <textarea
                      readOnly
                      className="w-40 h-auto bg-gray-100 resize-none border border-gray-300 p-2 rounded-md"
                      value={element?.title}
                    ></textarea>
                  </td>

                  <td className="px-4 py-2 border">{element?.category}</td>
                  <td className="px-4 py-2 border">{element?.createdBy}</td>
                  <td className="px-4 py-2 border">
                    {element?.numberOfLectures}
                  </td>

                  {/* Course Description */}
                  <td className="px-4 py-2 border max-w-28 truncate">
                    <textarea
                      readOnly
                      className="w-80 h-auto bg-gray-100 resize-none border border-gray-300 p-2 rounded-md"
                      value={element?.description.replace(/<\/?p>/g, "")}
                    ></textarea>
                  </td>

                  {/* Actions */}
                  <td className="px-4 py-2 border">
                    <div className="flex items-center gap-4">
                      {/* Edit Button */}
                      <button
                        onClick={() =>
                          navigate(`/update-course/${element._id}`, {
                            state: {
                              initialCourseData: {
                                newCourse: false,
                                ...element,
                              },
                            },
                          })
                        }
                        className="bg-yellow-500 hover:bg-yellow-600 transition-all duration-300 text-white py-2 px-4 rounded-md font-bold md:text-lg text-sm"
                      >
                        <MdOutlineModeEdit />
                      </button>

                      {/* Delete Button */}
                      <button
                        onClick={() => handleCourseDelete(element._id)}
                        className="bg-red-500 hover:bg-red-600 transition-all duration-300 text-white py-2 px-4 rounded-md font-bold md:text-lg text-sm"
                      >
                        <BsTrash />
                      </button>

                      {/* Manage Lectures */}
                      <button
                        onClick={() =>
                          navigate("/display-lectures", {
                            state: { ...element },
                          })
                        }
                        className="bg-green-500 hover:bg-green-600 transition-all duration-300 text-white py-2 px-4 rounded-md font-bold md:text-lg text-sm"
                      >
                        <BsCollectionPlayFill />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
