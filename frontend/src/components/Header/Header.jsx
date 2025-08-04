// "use client";
import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import Dropdown from "../Dropdown";
import { Link, NavLink, useLocation, useParams } from "react-router-dom";
import { BiCategoryAlt } from "react-icons/bi";
import { FaRegHeart } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
// import { LuMoreHorizontal } from "react-icons/lu";
import CategoryDropdown from "../CategoryDropdown";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { getUserData, logout } from "../../redux/features/authSlice";
import Sidebar from "../Sidebar";
import { HiOutlineUser } from "react-icons/hi2";
import { MdLogout, MdLogin } from "react-icons/md";

export default function Header({
  // searchCourse, setSearchCourse
  // eslint-disable-next-line react/prop-types
  setSearchQuery,
}) {
  const [searchValue, setSearchValue] = useState("");

  const handleSearch = (e) => {
    setSearchValue(e.target.value);
    setSearchQuery(e.target.value); // Pass search value to parent
  };

  //--------------------------

  const dispatch = useDispatch();
  const { id } = useParams();
  const { pathname } = useLocation();

  const [isOpen, setIsOpen] = useState(false);
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [isOpenPages, setIsOpenPages] = useState(false);
  const [isOpenCourses, setIsOpenCourses] = useState(false);
  const [isOpenDashboard, setIsOpenDashboard] = useState(false);
  const [isHoverProfile, setIsHoverProfile] = useState(false);

  const { isAuthenticated, role } = useSelector((state) => state?.auth);

  const userData = useSelector((state) => state?.auth?.data);

  useEffect(() => {
    dispatch(getUserData());
  }, [dispatch]);

  const toggleSidebar = () => {
    setIsOpen((prev) => !prev);
  };

  // const toggleDropdown = () => {
  //   setIsOpen(!isOpen);
  // };
  // const closeDropdown = () => {
  //   setIsOpen(false);
  // };

  const toggleCategoryDropdown = () => {
    setIsCategoryOpen(!isCategoryOpen);
  };
  // const closeCategoryDropdown = (): void => {
  //   setIsCategoryOpen(false);
  // }

  const handleMouseEnterPages = () => {
    setIsOpenPages(true);
  };
  const handleMouseLeavePages = () => {
    setIsOpenPages(false);
  };

  const handleMouseEnterCourses = () => {
    setIsOpenCourses(true);
  };
  const handleMouseLeaveCourses = () => {
    setIsOpenCourses(false);
  };

  const handleMouseEnterDashboard = () => {
    setIsOpenDashboard(true);
  };
  const handleMouseLeaveDashboard = () => {
    setIsOpenDashboard(false);
  };

  const handleMouseEnterProfile = () => {
    setIsHoverProfile(true);
  };
  const handleMouseLeaveProfile = () => {
    setIsHoverProfile(false);
  };

  const bodyRef = useRef(null);
  const handleClickOutside = (e) => {
    if (bodyRef.current && !bodyRef.current.contains(e.target)) {
      setIsCategoryOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isCategoryOpen]);

  const [backdropClass, setBackdropClass] = useState("");
  useEffect(() => {
    if (!isOpen) {
      const timer = setTimeout(() => {
        setBackdropClass("backdrop-blur-3xl");
      }, 140);

      return () => {
        clearTimeout(timer); // Clear the timeout if the component unmounts or isOpen changes
      };
    } else {
      setBackdropClass("");
    }
  }, [isOpen]);

  // useEffect(() => {
  //   // getting user details
  //   isAuthenticated && dispatch(getUserData());
  // }, [isAuthenticated === true]);

  // const handleLogoutUser = () => {
  //   dispatch(logoutUser(id));
  // }

  const handleLogoutUser = async () => {
    try {
      const res = await axios.post(
        `http://localhost:5000/api/v1/user/logout`,
        {},
        {
          // {} is necessary
          withCredentials: true,
        }
      );
      console.log(res);
      if (res?.data?.success) dispatch(logout());
      // alert(res?.data?.message);
      toast.success(res?.data?.message);
    } catch (err) {
      toast.error(err.message);
      // console.log(err.message);
    }
  };

  useEffect(() => {
    setIsOpen(false);
    setIsCategoryOpen(false);
    setIsOpenPages(false);
    setIsOpenDashboard(false);
    setIsOpenCourses(false);
    setIsHoverProfile(false); // close dropdown on route change
  }, [pathname]);

  return (
    <>
      {/* backdrop-blur-3xl */}
      {/* <div className="relative md:h-[75px] lg:h-[75px] sm:h-[48px] h-[48px]"> */}
      <div
        className={`w-full md:px-16 px-4 py-[12px] flex items-center justify-between border-b-[1px] border-slate-300 shadow-lg md:h-[75px] sticky top-0 z-20 bg-white/70 ${backdropClass} ${
          isOpen ? "bg-white" : "bg-white/70"
        }`}
      >
        <div className="flex items-center md:gap-5 gap-4">
          {/* <Dropdown /> */}
          <Sidebar
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            toggleSidebar={toggleSidebar}
          />
          <div className="flex md:gap-2 sm:gap-2 gap-1 items-center md:mr-[22px] md:ml-[-20px] mr-2 ml-[-1px]">
            <img
              src="https://lksalenterahati.org/wp-content/uploads/2024/06/graduation-cap_2650127-300x300.png"
              alt="logo"
              className="md:w-8 md:h-8 w-4 h-4"
            />
            <h2 className="font-bold md:text-2xl">
              <Link to={"/"}>
                <span className="text-blue-600">Edu</span>All
              </Link>
            </h2>
          </div>
          {/* <Dropdown /> */}
          <ul
            className={`lg:flex md:hidden sm:hidden hidden items-center list-none gap-8 md:text-[14px] text-[12px]`}
          >
            <li
              ref={bodyRef}
              className={`flex gap-2 items-center border-[2px] rounded-3xl px-4 py-2 bg-blue-50 border-gray-300 cursor-pointer ${
                isCategoryOpen && "text-blue-700"
              }`}
              onClick={toggleCategoryDropdown}
            >
              <span>
                <BiCategoryAlt />
              </span>
              <div className="mt-[-4px]">Category</div>
              <svg
                className={`md:w-2.5 md:h-2.5 w-2 h-2 transform transition-transform duration-75 ${
                  isCategoryOpen ? "rotate-180" : "rotate-0"
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
              <div
                className={`text-black block ml-[-10px] transition-opacity duration-75 ease-in-out ${
                  isCategoryOpen
                    ? "opacity-100 delay-75"
                    : "opacity-0 pointer-events-none"
                }`}
              >
                {" "}
                {isCategoryOpen && <CategoryDropdown />}
              </div>
            </li>
            <li className="hover:text-blue-700">
              <NavLink
                to={"/"}
                className={({ isActive }) =>
                  isActive
                    ? "text-blue-700 flex items-center"
                    : "flex items-center"
                }
              >
                <div className="mt-[-4px]">Home</div>
                <svg
                  className="md:w-2.5 md:h-2.5 ml-2 w-2 h-2"
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
              </NavLink>
            </li>
            {/* <li className="flex items-center hover:text-blue-900">
              <NavLink to={"/courses"}>Courses</NavLink>
              <svg
                className="md:w-2.5 md:h-2.5 ml-2 w-2 h-2"
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
            </li>
            <li className="flex items-center hover:text-blue-900">
              <NavLink to={"/pages"}>Pages</NavLink>
              <svg
                className="md:w-2.5 md:h-2.5 ml-2 w-2 h-2"
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
            </li> */}

            <li
              className="relative cursor-pointer mt-4"
              onMouseEnter={handleMouseEnterCourses}
              onMouseLeave={handleMouseLeaveCourses}
            >
              <div className={`${isOpenCourses && "text-blue-700"} mb-4`}>
                <NavLink
                  to="#"
                  className={({ isActive }) =>
                    isActive && pathname !== "/"
                      ? "text-blue-700 flex items-center"
                      : "flex items-center"
                  }
                >
                  <div className="mt-[-4px]">Courses</div>
                  <svg
                    className={`md:w-2.5 md:h-2.5 ml-2 w-2 h-2 transform transition-transform duration-75 ${
                      isOpenCourses ? "rotate-180" : "rotate-0"
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
                </NavLink>
              </div>
              {isOpenCourses && (
                <div className="absolute left-0 mt-0 w-48 bg-white shadow-lg rounded-md transition-opacity duration-300 ease-in-out overflow-hidden border-[1px] border-gray-100">
                  <Link
                    to="/courses"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                  >
                    All Courses
                  </Link>
                  <Link
                    to={`/course-details/${id}`}
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                  >
                    Course Details
                  </Link>
                  <Link
                    to="/course-curriculum"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                  >
                    Course Curriculum
                  </Link>
                  <Link
                    to="/course-lesson"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                  >
                    Course Lesson
                  </Link>
                  {role === "ADMIN" && (
                    <Link
                      to="/create-course"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                    >
                      Create Course
                    </Link>
                  )}
                </div>
              )}
            </li>
            <li
              className="relative cursor-pointer mt-4"
              onMouseEnter={handleMouseEnterPages}
              onMouseLeave={handleMouseLeavePages}
            >
              <div className={`${isOpenPages && "text-blue-700"} mb-4`}>
                <NavLink
                  to="#"
                  className={({ isActive }) =>
                    isActive && pathname !== "/" && pathname !== "/courses"
                      ? "text-blue-700 flex items-center"
                      : "flex items-center"
                  }
                >
                  <div className="mt-[-4px]">Pages</div>
                  <svg
                    className={`md:w-2.5 md:h-2.5 ml-2 w-2 h-2 transform transition-transform duration-75 ${
                      isOpenPages ? "rotate-180" : "rotate-0"
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
                </NavLink>
              </div>
              {isOpenPages && (
                <div className="absolute left-0 mt-0 w-48 bg-white shadow-lg rounded-md transition-opacity duration-300 ease-in-out overflow-hidden border-[1px] border-gray-100">
                  <NavLink
                    to="/about"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                  >
                    About Us
                  </NavLink>
                  <NavLink
                    to="/shop"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                  >
                    Shop
                  </NavLink>
                  <NavLink
                    to="/quiz"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                  >
                    Quiz
                  </NavLink>
                  <NavLink
                    to="/blogs"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                  >
                    Blogs
                  </NavLink>
                  {role === "ADMIN" && (
                    <NavLink
                      to="/create-blog"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                    >
                      Create Blog
                    </NavLink>
                  )}
                  {/* <NavLink
                    to="/login"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                  >
                    Student Login
                  </NavLink>
                  <NavLink
                    to="/signup"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                  >
                    Student Registration
                  </NavLink> */}
                  <NavLink
                    to="/contact"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                  >
                    Contact Us
                  </NavLink>
                </div>
              )}
            </li>

            {/* <li className="flex items-center hover:text-blue-900">
              <NavLink to={"/blog"}>Blog</NavLink>
              <svg
                className="md:w-2.5 md:h-2.5 ml-2 w-2 h-2"
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
            </li> */}

            <li
              className="relative cursor-pointer mt-4"
              onMouseEnter={handleMouseEnterDashboard}
              onMouseLeave={handleMouseLeaveDashboard}
            >
              <div
                className={`flex items-center ${
                  isOpenDashboard && "text-blue-700"
                } mb-4`}
              >
                <div className="mt-[-2px]">Dashboard</div>
                <svg
                  className={`md:w-2.5 md:h-2.5 ml-2 w-2 h-2 transform transition-transform duration-75 ${
                    isOpenDashboard ? "rotate-180" : "rotate-0"
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
              {isOpenDashboard && (
                <div className="absolute left-0 mt-0 w-48 bg-white shadow-lg rounded-md transition-opacity duration-300 ease-in-out overflow-hidden border-[1px] border-gray-100">
                  {role === "ADMIN" && (
                    <NavLink
                      to="/admin-dashboard"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                    >
                      Admin Dashboard
                    </NavLink>
                  )}
                  {role === "USER" && (
                    <NavLink
                      to="/student-dashboard"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                    >
                      Student Dashboard
                    </NavLink>
                  )}
                  {role === "INSTRUCTOR" && (
                    <NavLink
                      to="/instructor-dashboard"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                    >
                      Instructor Dashboard
                    </NavLink>
                  )}
                </div>
              )}
            </li>

            {/* <div className="">
              <li>
                <LuMoreHorizontal
                  onClick={toggleDropdown}
                  className="cursor-pointer border-[1px] rounded-full p-2 border-gray-300 w-9 h-9 hover:text-blue-900"
                />
              </li>
              {isOpen && (
                <div className="mt-2 w-36 absolute top-[52px] rounded-lg shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                  <li className="flex items-center hover:bg-gray-100 rounded-xl">
                    <NavLink
                      to="/about"
                      className="block px-2 py-2 text-sm text-gray-700"
                      onClick={closeDropdown}
                    >
                      About
                    </NavLink>
                    <svg
                      className="md:w-2.5 md:h-2.5 w-2 h-2"
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
                  </li>
                  <li className="flex items-center hover:bg-gray-100 rounded-xl">
                    <NavLink
                      to="/contact"
                      className="block px-2 py-2 text-sm text-gray-700"
                      onClick={closeDropdown}
                    >
                      Contact
                    </NavLink>
                    <svg
                      className="md:w-2.5 md:h-2.5 w-2 h-2"
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
                  </li>
                </div>
              )}
            </div> */}
          </ul>
        </div>
        <div className="flex items-center md:gap-4 gap-2">
          <div className="flex items-center justify-between border-[2px] rounded-3xl md:px-4 px-2 bg-blue-50 border-gray-300 py-1">
            <input
              type="text"
              placeholder="Search courses..."
              className="outline-none bg-blue-50 md:text-[14px] text-[12px] md:w-[200px] w-[120px]"
              value={searchValue}
              onChange={handleSearch}
              // onChange={(e) => setSearchCourse(e.target.value)}
            />
            <IoSearch className="md:w-6 md:h-6 sm:w-6 sm:h-6 w-5 h-5 bg-blue-500 rounded-full text-white cursor-pointer p-1 md:mr-[-12px] mr-[-6px]" />
          </div>
          <NavLink to="/favourites">
            <div className="rounded-full relative md:p-[2px] p-[1px] border-[1px] border-slate-200">
              <span className="md:w-4 md:h-4 sm:h-4 sm:w-4 w-3 h-3 rounded-full bg-blue-500 absolute md:right-[-1.6px] sm:right-[-2px] right-[-2.3px] animate-pulse text-white md:text-[12px] sm:text-[12px] text-[10px] text-center">
                1
              </span>
              {/* <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDvltL2Q21sSHtDGnlVRPeR5Do_027gyvs0w&s"
                alt="cart_img"
                className="md:w-9 md:h-9 w-6 h-6 rounded-full cursor-pointer"
              /> */}
              <FaRegHeart style={{ color: "blue" }} className="md:w-8 md:h-8 w-6 h-6 rounded-full md:p-2 lg:p-2 p-1 cursor-pointer"/>
            </div>
          </NavLink>
          <NavLink
            to={isAuthenticated ? "/profile" : "/login"}
            className="relative mt-2"
            onMouseEnter={handleMouseEnterProfile}
            onMouseLeave={handleMouseLeaveProfile}
          >
            <div className="mb-2">
              {userData?.user?.avatar?.secure_url ? (
                <NavLink to="/profile">
                  <img
                    src={userData?.user?.avatar?.secure_url}
                    alt="profile_img"
                    className="md:w-10 md:h-10 w-7 h-7 rounded-full border-[1px] border-gray-300 cursor-pointer"
                  />
                </NavLink>
              ) : (
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSO3ihX_uOy-JxLG_WgdbL0ZGRn33A0xcBjuw&s"
                  alt="profile_img"
                  className="md:w-9 md:h-9 w-6 h-6 rounded-full cursor-pointer"
                />
              )}

              {/* {isHoverProfile && isAuthenticated && userData !== undefined && (
                <div className="absolute lg:right-[-55px] md:right-[-55px] sm:right-[-8px] right-[-8px] mt-2 lg:w-28 md:w-28 sm:w-20 w-20 bg-white shadow-lg rounded-md transition-opacity duration-300 ease-in-out overflow-hidden border-[1px] border-gray-100">
                  <NavLink
                    to="/profile"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                  >
                    Profile
                  </NavLink>
                  <NavLink
                    to="/"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                    onClick={handleLogoutUser}
                  >
                    Logout
                  </NavLink>
                </div>
              )}

              {(isHoverProfile && !isAuthenticated) ||
                (userData === undefined && (
                  <div className="absolute lg:right-[-55px] md:right-[-55px] sm:right-[-8px] right-[-8px] mt-2 lg:w-28 md:w-28 sm:w-20 w-20 bg-white shadow-lg rounded-md transition-opacity duration-300 ease-in-out overflow-hidden border-[1px] border-gray-100">
                    <NavLink
                      to="/login"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                    >
                      Login
                    </NavLink>
                  </div>
                ))} */}

              {isHoverProfile && isAuthenticated && userData && (
                <div className="absolute lg:right-[-55px] md:right-[-55px] sm:right-[-8px] right-[-8px] mt-2 lg:w-28 md:w-28 sm:w-20 w-20 bg-white shadow-lg rounded-md transition-opacity duration-300 ease-in-out overflow-hidden border-[1px] border-gray-100">
                  <div className="flex items-center border-b text-gray-800 hover:bg-gray-200 overflow-hidden">
                    <HiOutlineUser className="ml-2" />
                    <NavLink
                      to="/profile"
                      className="px-4 py-2 md:text-[14px] text-[10px]"
                    >
                      Profile
                    </NavLink>
                  </div>
                  <div className="flex items-center text-gray-800 hover:bg-gray-200 overflow-hidden">
                    <MdLogout className="ml-2" />
                    <NavLink
                      to="/"
                      className="px-4 py-2 md:text-[14px] text-[10px]"
                      onClick={handleLogoutUser}
                    >
                      Logout
                    </NavLink>
                  </div>
                </div>
              )}

              {isHoverProfile && (!isAuthenticated || !userData) && (
                <div className="absolute lg:right-[-55px] md:right-[-55px] sm:right-[-8px] right-[-8px] mt-2 lg:w-28 md:w-28 sm:w-20 w-20 bg-white shadow-lg rounded-md transition-opacity duration-300 ease-in-out overflow-hidden border-[1px] border-gray-100">
                  <div className="flex items-center text-gray-800 hover:bg-gray-200 overflow-hidden">
                    <MdLogin className="ml-2" />
                    <NavLink
                      to="/login"
                      className="px-4 py-2 md:text-[14px] text-[10px]"
                    >
                      Login
                    </NavLink>
                  </div>
                </div>
              )}

              {/* {isHoverProfile && !isAuthenticated && userData.guestLogin && (
                <div className="absolute lg:right-[-55px] md:right-[-55px] sm:right-[-8px] right-[-8px] mt-2 lg:w-28 md:w-28 sm:w-20 w-20 bg-white shadow-lg rounded-md transition-opacity duration-300 ease-in-out overflow-hidden border-[1px] border-gray-100">
                  <NavLink
                    to="/"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                    onClick={handleLogoutUser}
                  >
                    Logout
                  </NavLink>
                </div>
              )} */}
            </div>
          </NavLink>
        </div>
      </div>
      {/* </div> */}
    </>
  );
}
