// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import { TfiMenu } from "react-icons/tfi";

// const items = [
//   {
//     tag: "Home",
//     to: "/",
//   },
//   {
//     tag: "Courses",
//     to: "/courses",
//   },
//   {
//     tag: "Pages",
//     to: "/about",
//   },
//   {
//     tag: "Dashboard",
//     to: "/",
//   },
// ];

// const options = [
//   ["Home"],
//   ["All Courses", "Course Details", "Course Lesson"],
//   [
//     "About Us",
//     "Blog",
//     "Shop",
//     "Student Login",
//     "Student Registration",
//     "Contact Us",
//   ],
//   ["Student Dashboard", "Instructor Dashboard"],
// ];

// const Sidebar = ({ isOpen, setIsOpen, toggleSidebar }) => {
//   //   const [isOpen, setIsOpen] = useState<boolean>(false);

//   //   const toggleSidebar = () => {
//   //     setIsOpen((prev) => !prev);
//   //   };

//   //   console.log(isOpen);

//   const [expandedHome, setExpandedHome] = useState(false);
//   const [expandedCourses, setExpandedCourses] = useState(false);
//   const [expandedPages, setExpandedPages] = useState(false);
//   const [expandedDashboard, setExpandedDashboard] = useState(false);

//   const handleToggle = (index) => {
//     if (index === 0) {
//       setExpandedHome(!expandedHome);
//     } else if (index === 1) {
//       setExpandedCourses(!expandedCourses);
//     } else if (index === 2) {
//       setExpandedPages(!expandedPages);
//     } else {
//       setExpandedDashboard(!expandedDashboard);
//     }
//   };

//   useEffect(() => {
//     setExpandedHome(false);
//     setExpandedCourses(false);
//     setExpandedPages(false);
//     setExpandedDashboard(false);
//   }, [isOpen]);

//   return (
//     <>
//       {/* <button
//         className="md:hidden p-4 text-white bg-blue-600 rounded-md m-2"
//         onClick={toggleSidebar}
//       >
//         Menu
//       </button> */}

//       <TfiMenu onClick={toggleSidebar} className="cursor-pointer lg:hidden" />

//       {/* Sidebar */}
//       <div
//         className={`fixed top-0 left-0 w-[70%] h-full bg-white transition-transform duration-300 transform ${
//           isOpen ? "translate-x-0" : "-translate-x-full"
//         } z-50`}
//       >
//         <div className="flex justify-between items-center p-4">
//           <h2 className="text-black text-lg">Menu</h2>
//           <button
//             onClick={toggleSidebar}
//             className="text-black text-3xl px-2 hover:bg-gray-100 rounded-full"
//           >
//             &times;
//           </button>
//         </div>
//         <nav className="mt-4 h-[calc(100vh-64px)] overflow-y-auto">
//           <ul className="flex flex-col">
//             {items.map((item, index) => (
//               <div className="" key={index}>
//                 <div
//                   className="flex items-center hover:bg-gray-100"
//                   onClick={() => handleToggle(index)}
//                 >
//                   <Link to={item.to}>
//                     <p className="block p-4 text-black">{item.tag}</p>
//                   </Link>
//                   <svg
//                     className="w-2.5 h-2.5"
//                     aria-hidden="true"
//                     xmlns="http://www.w3.org/2000/svg"
//                     fill="none"
//                     viewBox="0 0 10 6"
//                   >
//                     <path
//                       stroke="currentColor"
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth="2"
//                       d="m1 1 4 4 4-4"
//                     />
//                   </svg>
//                 </div>

//                 {expandedHome && index === 0 && (
//                   <div className="bg-gray-600">
//                     {options[index].map((optionItems, idx) => (
//                       <div
//                         className="text-white hover:bg-gray-700 pl-6 pt-[10px] pb-[10px]"
//                         key={idx}
//                       >
//                         <Link to="/">{optionItems}</Link>
//                       </div>
//                     ))}
//                   </div>
//                 )}

//                 {expandedCourses && index === 1 && (
//                   <div className="bg-gray-600">
//                     {options[index].map((optionItems, idx) => (
//                       <div
//                         className="text-white hover:bg-gray-700 pl-6 pt-[10px] pb-[10px]"
//                         key={idx}
//                       >
//                         <Link to="/courses">{optionItems}</Link>
//                       </div>
//                     ))}
//                   </div>
//                 )}

//                 {expandedPages && index === 2 && (
//                   <div className="bg-gray-600">
//                     {options[index].map((optionItems, idx) => (
//                       <div
//                         className="text-white hover:bg-gray-700 pl-6 pt-[10px] pb-[10px]"
//                         key={idx}
//                       >
//                         <Link to="/">{optionItems}</Link>
//                       </div>
//                     ))}
//                   </div>
//                 )}

//                 {expandedDashboard && index === 3 && (
//                   <div className="bg-gray-600">
//                     {options[index].map((optionItems, idx) => (
//                       <div
//                         className="text-white hover:bg-gray-700 pl-6 pt-[10px] pb-[10px]"
//                         key={idx}
//                       >
//                         <Link to="/">{optionItems}</Link>
//                       </div>
//                     ))}
//                   </div>
//                 )}
//               </div>
//             ))}
//           </ul>
//         </nav>
//       </div>

//       {/* Overlay */}
//       {isOpen && (
//         <div
//           className={`fixed inset-0 bg-black opacity-50 z-40`}
//           onClick={toggleSidebar}
//         ></div>
//       )}
//     </>
//   );
// };

// export default Sidebar;

//$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$

// Sidebar.jsx

import React, { useEffect, useState } from "react";
import { TfiMenu } from "react-icons/tfi";
import { Link } from "react-router-dom";
import "../App.css";
import { useSelector } from "react-redux";

const Sidebar = ({ isOpen, setIsOpen, toggleSidebar }) => {
  // const { role }= useSelector((state) => state?.auth?.data?.user); => This is wrong and does not work
  const role = useSelector((state) => state?.auth?.data?.user?.role);

  const items = [
    {
      tag: "Home",
    },
    {
      tag: "Courses",
    },
    {
      tag: "Pages",
    },
    {
      tag: "Dashboard",
    },
  ];

  const options = [
    [
      {
        tagItems: [
          {
            item: "Home",
            to: "/",
          },
        ],
      },
    ],
    [
      {
        tagItems: [
          {
            item: "All Courses",
            to: "/courses",
          },
          {
            item: "Course Details",
            to: "/course-details",
          },
          {
            item: "Course Lesson",
            to: "/course-lesson",
          },
          ...(role === "ADMIN" || role === "INSTRUCTOR"
            ? [{ item: "Create Course", to: "/create-course" }]
            : []),
        ],
      },
    ],
    [
      {
        tagItems: [
          {
            item: "About Us",
            to: "/about",
          },
          {
            item: "Shop",
            to: "/shop",
          },
          {
            item: "Quiz",
            to: "/quiz",
          },
          {
            item: "Blogs",
            to: "/blogs",
          },
          ...(role === "ADMIN" || role === "INSTRUCTOR"
            ? [{ item: "Create Blog", to: "/create-blog" }]
            : []),
          {
            item: "Contact Us",
            to: "/contact",
          },
        ],
      },
    ],
    [
      {
        tagItems: [
          ...(role === "ADMIN"
            ? [{ item: "Admin Dashboard", to: "/admin-dashboard" }]
            : []),
          ...(role === "USER"
            ? [{ item: "Student Dashboard", to: "/student-dashboard" }]
            : []),
          ...(role === "INSTRUCTOR"
            ? [{ item: "Instructor Dashboard", to: "/instructor-dashboard" }]
            : []),
        ],
      },
    ],
  ];

  //   const [isOpen, setIsOpen] = useState<boolean>(false);

  //   const toggleSidebar = () => {
  //     setIsOpen((prev) => !prev);
  //   };

  //   console.log(isOpen);

  // const [expandedHome, setExpandedHome] = useState(false);
  // const [expandedCourses, setExpandedCourses] = useState(false);
  // const [expandedPages, setExpandedPages] = useState(false);
  // const [expandedDashboard, setExpandedDashboard] = useState(false);

  // const handleToggle = (index) => {
  //   if (index === 0) {
  //     setExpandedHome(!expandedHome);
  //   } else if (index === 1) {
  //     setExpandedCourses(!expandedCourses);
  //   } else if (index === 2) {
  //     setExpandedPages(!expandedPages);
  //   } else {
  //     setExpandedDashboard(!expandedDashboard);
  //   }
  // };

  const [expandedIndex, setExpandedIndex] = useState(null | Number);
  const handleToggle1 = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  // useEffect(() => {
  //   setExpandedHome(false);
  //   setExpandedCourses(false);
  //   setExpandedPages(false);
  //   setExpandedDashboard(false);
  // }, [isOpen]);

  useEffect(() => {
    setExpandedIndex(null);
  }, [isOpen]);

  return (
    <>
      <TfiMenu
        onClick={toggleSidebar}
        className="cursor-pointer lg:hidden text-xl"
      />

      {/* Sidebar */}
      <div
        // w-64
        className={`fixed top-0 left-0 w-[68%] h-full bg-black transition-transform duration-300 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } z-50`}
      >
        <div className="flex justify-between items-center p-4">
          <h2 className="text-gray-200 text-lg px-2">Menu</h2>
          <button
            onClick={toggleSidebar}
            className="text-gray-200 text-2xl px-2 pb-1 hover:bg-gray-600 rounded-full"
          >
            &times;
          </button>
        </div>
        <nav className="mt-4 h-[calc(100vh-64px)] overflow-y-auto scrollbar">
          {/* h-[calc(100vh-64px)] overflow-y-auto scrollbar  => nav className */}
          <ul className="flex flex-col sidebar-items">
            {items.map((item, index) => (
              <div
                className="text-gray-200 hover:text-white bg-slate-800 cursor-pointer mx-2 my-1 rounded-md text-[15px]"
                key={index}
              >
                <div
                  className={`flex items-center justify-center'}`}
                  onClick={() => handleToggle1(index)}
                >
                  <p className={`block p-4`}>{item.tag}</p>
                  <svg
                    className={`w-2.5 h-2.5 transition-transform duration-300 ease-in-out ${
                      expandedIndex === index ? "rotate-180" : ""
                    }`}
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 1 4 4 4-4"
                    />
                  </svg>
                </div>

                {/* {expandedIndex === index && index === 0 && ( */}
                <div
                  className={`bg-gray-900 cursor-pointer rounded-b-md sidebar-items-expand ${
                    expandedIndex === index ? "expanded" : ""
                  }`}
                >
                  {options[index]?.map((optionGroup, _idx) =>
                    optionGroup.tagItems.map((item, itemIdx) => (
                      <Link to={item.to} key={itemIdx}>
                        <div className="text-gray-300 hover:text-gray-100 hover:bg-black m-2 rounded-md pl-6 pt-[10px] pb-[10px] text-[14px]">
                          {item.item}
                        </div>
                      </Link>
                    ))
                  )}
                </div>
                {/* )} */}

                {/* {expandedIndex === index && index === 1 && (
                    <div className="bg-gray-600 cursor-pointer sidebar-items-expand">
                    {
                        options[index].map((optionItems, idx) => (
                            <div className="text-gray-300 hover:text-gray-100 hover:bg-gray-500 pl-6 pt-[10px] pb-[10px]" key={idx}><Link to="/">{optionItems}</Link></div>
                        ))
                    }
                  </div>
                )} */}

                {/* {expandedIndex === index && index === 2 && (
                     <div className="bg-gray-600 cursor-pointer sidebar-items-expand">
                     {
                         options[index].map((optionItems, idx) => (
                             <div className="text-gray-300 hover:text-gray-100 hover:bg-gray-500 pl-6 pt-[10px] pb-[10px]" key={idx}><Link to="/">{optionItems}</Link></div>
                         ))
                     }
                   </div>
                )} */}

                {/* {expandedDashboard && index === 3 && (
                   <div className="bg-gray-600 cursor-pointer sidebar-items-expand">
                   {
                       options[index].map((optionItems, idx) => (
                           <div className="text-gray-300 hover:text-gray-100 hover:bg-gray-500 pl-6 pt-[10px] pb-[10px]" key={idx}><Link to="/">{optionItems}</Link></div>
                       ))
                   }
                 </div>
                )} */}
              </div>
            ))}
          </ul>
        </nav>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          className={`fixed inset-0 bg-black opacity-50 z-40`}
          onClick={toggleSidebar}
        ></div>
      )}
    </>
  );
};

export default Sidebar;

//-------------------------------------------------------

// import React, { useEffect, useState } from "react";
// import Link from "next/link";
// import { TfiMenu } from "react-icons/tfi";

// interface SidebarProps {
//   isOpen: boolean; // Boolean to control visibility
//   setIsOpen: React.Dispatch<React.SetStateAction<boolean>>; // State updater function
//   toggleSidebar: () => void; // Function to toggle sidebar
// }

// interface SidebarItem {
//   tag: string;
//   to: string;
// }

// const items: SidebarItem[] = [
//   {
//     tag: "Home",
//     to: "/",
//   },
//   {
//     tag: "Courses",
//     to: "/courses",
//   },
//   {
//     tag: "Pages",
//     to: "/about",
//   },
//   {
//     tag: "Dashboard",
//     to: "/",
//   },
// ];

// const options = [
//   ["Home"],
//   ["All Courses", "Course Details", "Course Lesson"],
//   ["About Us", "Blog", "Shop", "Student Login", "Student Registration", "Contact Us"],
//   ["Student Dashboard", "Instructor Dashboard"],
// ];

// const Sidebar: React.FC<SidebarProps> = ({
//   isOpen,
//   setIsOpen,
//   toggleSidebar,
// }) => {
//   const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

//   const handleToggle = (index: number) => {
//     setExpandedIndex(expandedIndex === index ? null : index);
//   };

//   useEffect(() => {
//     setExpandedIndex(null); // Close all sections when sidebar is toggled
//   }, [isOpen]);

//   return (
//     <>
//       <TfiMenu onClick={toggleSidebar} className="cursor-pointer lg:hidden" />

//       {/* Sidebar */}
//       <div
//         className={`fixed top-0 left-0 w-64 h-full bg-white transition-transform duration-300 transform ${
//           isOpen ? "translate-x-0" : "-translate-x-full"
//         } z-50`}
//       >
//         <div className="flex justify-between items-center p-4">
//           <h2 className="text-black text-lg">Menu</h2>
//           <button
//             onClick={toggleSidebar}
//             className="text-black text-3xl px-2 hover:bg-gray-100 rounded-full"
//           >
//             &times;
//           </button>
//         </div>
//         <nav className="mt-4 h-[calc(100vh-64px)] overflow-y-auto"> {/* Set height and overflow */}
//           <ul className="flex flex-col">
//             {items.map((item, index) => (
//               <div key={index}>
//                 <div
//                   className="flex items-center hover:bg-gray-100"
//                   onClick={() => handleToggle(index)}
//                 >
//                   <Link to={item.to}>
//                     <p className="block p-4 text-black">{item.tag}</p>
//                   </Link>
//                   <svg
//                     className="w-2.5 h-2.5"
//                     aria-hidden="true"
//                     xmlns="http://www.w3.org/2000/svg"
//                     fill="none"
//                     viewBox="0 0 10 6"
//                   >
//                     <path
//                       stroke="currentColor"
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth="2"
//                       d="m1 1 4 4 4-4"
//                     />
//                   </svg>
//                 </div>

//                 {expandedIndex === index && (
//                   <div className="bg-gray-600">
//                     {options[index].map((optionItems, idx) => (
//                       <div
//                         className="text-white hover:bg-gray-700 pl-6 pt-[10px] pb-[10px]"
//                         key={idx}
//                       >
//                         <Link to="/">{optionItems}</Link>
//                       </div>
//                     ))}
//                   </div>
//                 )}
//               </div>
//             ))}
//           </ul>
//         </nav>
//       </div>

//       {/* Overlay */}
//       {isOpen && (
//         <div
//           className={`fixed inset-0 bg-black opacity-50 z-40`}
//           onClick={toggleSidebar}
//         ></div>
//       )}
//     </>
//   );
// };

// export default Sidebar;
