// import React, { useState } from "react";

// const StudentDashboard = () => {
//   const [isActive, setIsActive] = useState(1);
//   return (
//     <div className="flex justify-between">
//       <div className="min-h-full w-[20%] bg-gray-200 p-4">hello how are you</div>
//       <div className="w-[80%]">
//         <div className="bg-blue-500 text-white mx-8 md:mx-[100px] lg:mt-8 md:mt-8 sm:mt-[20px] mt-[20px] rounded-md p-4">
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas rerum saepe esse neque provident eaque excepturi facere? Saepe, doloribus eveniet.
//             Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima rerum voluptatibus voluptate neque quam quae qui earum fuga nemo debitis.
//         </div>
//         <div className="flex items-center justify-around mx-8 md:mx-[100px] lg:mt-8 md:mt-8 sm:mt-[20px] mt-[20px] gap-4">
//           <h3
//             className="text-center border-b-4 rounded-sm w-[50%] border-black cursor-pointer hover:text-green-800 text-xl text-green-600 hover:bg-gray-100"
//             onClick={() => setIsActive(1)}
//           >
//             Demo 1
//           </h3>
//           <h3
//             className="text-center border-b-4 rounded-sm w-[50%] border-black cursor-pointer hover:text-green-800 text-xl text-green-600 hover:bg-gray-100"
//             onClick={() => setIsActive(2)}
//           >
//             Demo 2
//           </h3>
//         </div>
//         <div className="mx-8 md:mx-[100px] lg:mt-8 md:mt-8 sm:mt-[20px] mt-[20px] mb-16 lg:flex md:flex sm:flex items-center justify-between gap-4">
//           {isActive === 1 ? (
//             <div
//               className={`min-h-96 ${
//                 isActive === 1 ? "w-full" : "w-[50%]"
//               } border-black rounded-md border-[1px] text-center p-4`}
//             >
//               <h2 className="text-xl pb-4">About Demo 1</h2>
//               <p>
//                 Lorem ipsum dolor sit amet, consectetur adipisicing elit.
//                 Voluptates, ea sit hic magni cumque alias accusantium
//                 reprehenderit eaque itaque, voluptatem impedit maiores deleniti,
//                 incidunt harum quia autem tenetur! A eaque ut dolore qui modi
//                 hic consequatur animi ullam est debitis aut, recusandae, in
//                 voluptas minima ea quis maiores pariatur deserunt saepe fugiat?
//                 Velit assumenda, repellendus quam aperiam quod cumque quos
//                 magnam maiores odio deserunt inventore vitae autem iusto minus
//                 numquam nulla, placeat asperiores impedit error voluptatum
//                 quaerat expedita consectetur molestias natus? Modi quasi nobis
//                 ducimus rerum, fugiat eveniet amet earum nam et numquam.
//                 Recusandae doloribus eveniet, aperiam tenetur mollitia
//                 praesentium? Lorem ipsum dolor sit amet, consectetur adipisicing
//                 elit. Eligendi aut nostrum, possimus asperiores ut esse, aperiam
//                 ipsam dolore, adipisci laboriosam minima? Soluta suscipit nulla
//                 similique accusamus excepturi animi necessitatibus sit nam
//                 cupiditate exercitationem. Autem maiores tenetur ab nemo id
//                 odit, libero similique voluptatem molestiae eligendi, cupiditate
//                 iste placeat doloribus vel!
//               </p>
//             </div>
//           ) : (
//             <div
//               className={`min-h-96 ${
//                 isActive === 2 ? "w-full" : "w-[50%]"
//               } border-black rounded-md border-[1px] text-center p-4`}
//             >
//               <h2 className="text-xl pb-4">About Demo 2</h2>
//               <p>
//                 Lorem ipsum, dolor sit amet consectetur adipisicing elit.
//                 Tenetur similique praesentium, magni atque rem saepe, cum
//                 voluptate, repellat nesciunt dolores perspiciatis. Quod natus
//                 nesciunt rerum suscipit, maxime commodi sapiente iste similique
//                 distinctio unde incidunt ex veritatis officiis dicta inventore
//                 molestiae a perspiciatis ipsa labore ullam numquam doloribus
//                 cupiditate? Tempore, odio ut. Illum rem perspiciatis corrupti
//                 blanditiis optio quia, nobis et voluptate dolor officiis minus
//                 officia, unde assumenda quae aspernatur, ad nostrum velit nulla
//                 nam doloribus quidem autem fugiat non ipsam? Animi, nobis vitae.
//                 Illo qui accusantium ex. Eveniet earum necessitatibus sunt
//                 labore laudantium totam aspernatur quia odio officiis
//                 perspiciatis repellendus impedit, tenetur, soluta similique, at
//                 praesentium error adipisci fugiat ducimus eum! Ullam vel dolorem
//                 repellat nemo nostrum molestiae odio soluta saepe cupiditate
//                 blanditiis totam dolorum sit, perferendis illo dolor expedita
//                 tempora autem sapiente minima id provident officia. Numquam est
//                 neque modi voluptatibus at reiciendis eos ad, optio sed vel,
//                 possimus, labore commodi cum similique magnam veritatis quidem
//                 placeat. Libero atque quisquam sed fugiat aliquam. Explicabo
//                 veritatis eius a distinctio illo vitae unde soluta voluptate quo
//                 necessitatibus modi libero enim quaerat eaque eum eos expedita
//                 iste exercitationem error, totam maiores quae cupiditate
//                 voluptatem reiciendis! Officia omnis facere a ratione,
//                 laboriosam nesciunt! Lorem ipsum dolor sit amet consectetur
//                 adipisicing elit. Alias aperiam quia dolorum quisquam dolor quam
//                 illum officia atque accusamus assumenda.
//               </p>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default StudentDashboard;

//----------------------------------------------------------

// import React, { useEffect } from "react";
// import { useSelector } from "react-redux";
// import { FaUserCircle } from "react-icons/fa";

// const StudentDashboard = () => {
//   const user = useSelector((state) => state?.auth?.data?.user);

//   const enrolledCourses = [
//     { id: 1, title: "React Basics", progress: "80%" },
//     { id: 2, title: "Data Structures", progress: "45%" },
//   ];

//   const recentActivity = [
//     "Completed Quiz in React Basics",
//     "Viewed lecture in Data Structures",
//   ];

//   return (
//     <div className="p-6 md:p-10 bg-gray-50 min-h-screen">
//       <h1 className="text-3xl font-bold mb-6">Welcome, {user?.name || "Student"} 🎓</h1>

//       <div className="grid md:grid-cols-2 gap-6">
//         {/* Profile Card */}
//         <div className="bg-white rounded-xl shadow p-6">
//           <div className="flex flex-col items-start">
//             <FaUserCircle className="text-5xl text-gray-600 mb-2" />
//             <h2 className="text-xl font-semibold mb-1">Your Profile</h2>
//             <p className="text-sm text-gray-600">Email: {user?.email || "N/A"}</p>
//             <p className="text-sm text-gray-600">ID: {user?._id || "N/A"}</p>
//           </div>
//         </div>

//         {/* Enrolled Courses */}
//         <div className="bg-white rounded-xl shadow p-6">
//           <h2 className="text-xl font-semibold mb-4">Enrolled Courses</h2>
//           {enrolledCourses.map((course) => (
//             <div key={course.id} className="mb-3">
//               <p className="font-medium">{course.title}</p>
//               <p className="text-sm text-gray-500">Progress: {course.progress}</p>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Recent Activity */}
//       <div className="mt-8 bg-white rounded-xl shadow p-6">
//         <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
//         <ul className="list-disc pl-5 text-sm text-gray-700">
//           {recentActivity.map((activity, index) => (
//             <li key={index}>{activity}</li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default StudentDashboard;

//-------------------------------------------------

import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { FaUserCircle, FaBook, FaBell, FaCalendarAlt } from "react-icons/fa";
import { useLocation } from "react-router-dom";
import { toast } from "react-toastify";

const StudentDashboard = () => {
  const user = useSelector((state) => state?.auth?.data?.user);
  const { pathname } = useLocation();

  const enrolledCourses = [
    { id: 1, title: "React Basics", progress: 80 },
    { id: 2, title: "Data Structures", progress: 45 },
    { id: 3, title: "Algorithms", progress: 60 },
  ];

  const deadlines = [
    { course: "React Basics", task: "Assignment 3", due: "2025-06-10" },
    { course: "Algorithms", task: "Midterm Exam", due: "2025-06-12" },
  ];

  const messages = [
    { from: "Admin", content: "New schedule posted for July." },
    { from: "Course Bot", content: "Assignment 2 results are out." },
  ];

  useEffect(() => {
    if (pathname === "/student-dashboard") {
      toast("Welcome to Student Dashboard! 🚀");
    }
  }, [pathname]);

  return (
    <div className="min-h-screen bg-gray-100 p-6 md:p-10">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-800">
          Welcome, {user?.name || "Student"} 👋
        </h1>
        <p className="text-gray-600 mt-1">Here’s your learning dashboard</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Profile Card */}
        <div className="bg-white rounded-xl shadow p-6 md:col-span-1">
          <div className="flex items-center gap-4">
            <FaUserCircle className="text-5xl text-gray-600" />
            <div>
              <h2 className="text-lg font-semibold">
                {user?.name || "Student"}
              </h2>
              <p className="text-sm text-gray-600">
                {user?.email || "email@example.com"}
              </p>
            </div>
          </div>
          <div className="mt-4 text-sm text-gray-600">
            <p>
              <strong>ID:</strong> {user?._id || "N/A"}
            </p>
            <p>
              <strong>Role:</strong> Student
            </p>
          </div>
        </div>

        {/* Enrolled Courses */}
        <div className="bg-white rounded-xl shadow p-6 md:col-span-2">
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <FaBook /> Enrolled Courses
          </h2>
          {enrolledCourses.map((course) => (
            <div key={course.id} className="mb-4">
              <p className="font-medium">{course.title}</p>
              <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
                <div
                  className="bg-green-500 h-2 rounded-full transition-all"
                  style={{ width: `${course.progress}%` }}
                />
              </div>
              <p className="text-sm text-gray-500 mt-1">
                {course.progress}% completed
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        {/* Deadlines */}
        <div className="bg-white rounded-xl shadow p-6">
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <FaCalendarAlt /> Upcoming Deadlines
          </h2>
          <ul className="space-y-2 text-sm text-gray-700">
            {deadlines.map((item, index) => (
              <li key={index} className="flex justify-between">
                <span>
                  {item.course} – {item.task}
                </span>
                <span className="text-gray-500">{item.due}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Messages */}
        <div className="bg-white rounded-xl shadow p-6">
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <FaBell /> Messages
          </h2>
          <ul className="space-y-3 text-sm">
            {messages.map((msg, index) => (
              <li
                key={index}
                className="bg-gray-50 p-3 rounded-md border text-gray-700"
              >
                <strong>{msg.from}:</strong> {msg.content}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;

//-------------------------------------------------

// import React from "react";
// import { useSelector } from "react-redux";
// import {
//   FaUserCircle,
//   FaBook,
//   FaBell,
//   FaCalendarAlt,
//   FaClock,
//   FaChartPie,
// } from "react-icons/fa";
// import { Doughnut } from "react-chartjs-2";
// import {
//   Chart as ChartJS,
//   ArcElement,
//   Tooltip,
//   Legend,
// } from "chart.js";

// ChartJS.register(ArcElement, Tooltip, Legend);

// const StudentDashboard = () => {
//   const user = useSelector((state) => state?.auth?.data?.user);

//   const enrolledCourses = [
//     { id: 1, title: "React Basics", progress: 80 },
//     { id: 2, title: "Data Structures", progress: 45 },
//     { id: 3, title: "Algorithms", progress: 60 },
//   ];

//   const deadlines = [
//     { course: "React Basics", task: "Assignment 3", due: "2025-06-10" },
//     { course: "Algorithms", task: "Midterm Exam", due: "2025-06-12" },
//   ];

//   const messages = [
//     { from: "Admin", content: "New schedule posted for July." },
//     { from: "Course Bot", content: "Assignment 2 results are out." },
//   ];

//   const activities = [
//     "Logged in",
//     "Viewed Algorithms lecture",
//     "Completed React Quiz",
//     "Joined live session",
//   ];

//   const doughnutData = {
//     labels: enrolledCourses.map((c) => c.title),
//     datasets: [
//       {
//         data: enrolledCourses.map((c) => c.progress),
//         backgroundColor: ["#34D399", "#60A5FA", "#FBBF24"],
//         borderWidth: 1,
//       },
//     ],
//   };

//   const doughnutOptions = {
//     responsive: true,
//     maintainAspectRatio: false,
//     plugins: {
//       legend: {
//         position: "bottom",
//       },
//     },
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 p-6 md:p-10">
//       {/* Header */}
//       <div className="mb-6">
//         <h1 className="text-3xl font-bold text-gray-800">
//           Welcome, {user?.name || "Student"} 👋
//         </h1>
//         <p className="text-gray-600 mt-1">Here’s your learning dashboard</p>
//       </div>

//       {/* Top Section */}
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//         {/* Profile */}
//         <div className="bg-white rounded-xl shadow p-6">
//           <div className="flex items-center gap-4">
//             <FaUserCircle className="text-5xl text-gray-600" />
//             <div>
//               <h2 className="text-lg font-semibold">{user?.name || "Student"}</h2>
//               <p className="text-sm text-gray-600">{user?.email || "email@example.com"}</p>
//             </div>
//           </div>
//           <div className="mt-4 text-sm text-gray-600">
//             <p><strong>ID:</strong> {user?._id || "N/A"}</p>
//             <p><strong>Role:</strong> Student</p>
//           </div>
//         </div>

//         {/* Donut Chart */}
//         <div className="bg-white rounded-xl shadow p-6 col-span-1">
//           <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
//             <FaChartPie /> Course Progress Overview
//           </h2>
//           <div className="w-full h-64">
//             <Doughnut data={doughnutData} options={doughnutOptions} />
//           </div>
//         </div>

//         {/* Notifications */}
//         <div className="bg-white rounded-xl shadow p-6">
//           <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
//             <FaBell /> Notifications
//           </h2>
//           <p className="text-2xl font-bold text-blue-600">
//             {messages.length}
//           </p>
//           <p className="text-sm text-gray-600">Unread messages</p>
//         </div>
//       </div>

//       {/* Courses */}
//       <div className="bg-white rounded-xl shadow p-6 mt-8">
//         <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
//           <FaBook /> Enrolled Courses
//         </h2>
//         {enrolledCourses.map((course) => (
//           <div key={course.id} className="mb-4">
//             <p className="font-medium">{course.title}</p>
//             <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
//               <div
//                 className="bg-green-500 h-2 rounded-full transition-all"
//                 style={{ width: `${course.progress}%` }}
//               />
//             </div>
//             <p className="text-sm text-gray-500 mt-1">{course.progress}% completed</p>
//           </div>
//         ))}
//       </div>

//       {/* Bottom Section */}
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
//         {/* Deadlines */}
//         <div className="bg-white rounded-xl shadow p-6">
//           <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
//             <FaCalendarAlt /> Upcoming Deadlines
//           </h2>
//           <ul className="space-y-2 text-sm text-gray-700">
//             {deadlines.map((item, index) => (
//               <li key={index} className="flex justify-between">
//                 <span>{item.course} – {item.task}</span>
//                 <span className="text-gray-500">{item.due}</span>
//               </li>
//             ))}
//           </ul>
//         </div>

//         {/* Recent Activity */}
//         <div className="bg-white rounded-xl shadow p-6">
//           <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
//             <FaClock /> Recent Activity
//           </h2>
//           <ul className="space-y-2 text-sm text-gray-700">
//             {activities.map((act, i) => (
//               <li key={i} className="bg-gray-50 p-2 rounded-md border">
//                 {act}
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default StudentDashboard;
