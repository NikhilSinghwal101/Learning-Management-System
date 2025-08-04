// "use client";
import React, { useState, useEffect, useRef } from "react";
import { Link } from 'react-router-dom';
import { TfiMenu } from "react-icons/tfi";
import { BiCategoryAlt } from "react-icons/bi";

export default function Dropdown() {
   // const bodyRef = useRef(null);

  // bodyRef.current = document.body;
  // console.log(bodyRef.current);

  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const closeDropdown = () => {
    setIsOpen(false);
  };


   // close dropdown on clicking anywhere on the screen
   const dropdownRef = useRef(null);

   const handleClickOutside = (event) => {
     if (
       dropdownRef.current &&
       !dropdownRef.current.contains(event.target)
     ) {
       setIsOpen(false); // Close the dropdown if the click was outside of it
       // console.log(event.target)
 
       // If the click is outside the dropdown (!dropdownRef.current.contains(event.target as Node) evaluates to true), the dropdown will be closed by setting isOpen to false.
       // If the click is inside the dropdown, nothing happens, and the dropdown remains open.
     }
   };
 
   useEffect(() => {
     // Add event listener
     document.addEventListener("mousedown", handleClickOutside);
 
     // Cleanup on component unmount
     return () => {
       document.removeEventListener("mousedown", handleClickOutside);
     };
   }, []);


  return (
    <>
      <div 
      // ref={dropdownRef}
      >
        <li className="list-none lg:hidden">
        <TfiMenu onClick={toggleDropdown} className="cursor-pointer"/>
        </li>
        {isOpen && (
          <div className="mt-4 w-[72%] h-screen absolute top-[56px] rounded-lg shadow-lg bg-white ring-1 ring-black ring-opacity-5 p-2 z-50">
            <ul className={`list-none gap-8 md:text-[14px] text-[12px]`}>
              <li className="flex gap-2 items-center border-[2px] rounded-3xl px-4 py-2 bg-blue-50 border-gray-300 cursor-pointer m-1">
                <span>
                  <BiCategoryAlt />
                </span>
                Category
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
              <li className="flex items-center rounded-3xl hover:bg-gray-100 m-1">
                <Link
                  to={"/"}
                  className="block px-2 py-2 text-[12px] text-gray-700"
                  onClick={closeDropdown}
                >
                  Home
                </Link>
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
              <li className="flex items-center rounded-3xl hover:bg-gray-100 m-1">
                <Link
                  to={"/courses"}
                  className="block px-2 py-2 text-[12px] text-gray-700"
                  onClick={closeDropdown}
                >
                  Courses
                </Link>
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
              <li className="flex items-center rounded-3xl hover:bg-gray-100 m-1">
                <Link
                  to={"/pages"}
                  className="block px-2 py-2 text-[12px] text-gray-700"
                  onClick={closeDropdown}
                >
                  Pages
                </Link>
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
              <li className="flex items-center rounded-3xl hover:bg-gray-100 m-1">
                <Link
                  to={"/blog"}
                  className="block px-2 py-2 text-[12px] text-gray-700"
                  onClick={closeDropdown}
                >
                  Blog
                </Link>
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
              <li className="flex items-center rounded-3xl hover:bg-gray-100 m-1">
                <Link
                  to="/about"
                  onClick={closeDropdown}
                  className="block px-2 py-2 text-[12px] text-gray-700"
                >
                  About
                </Link>
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
              <li className="flex items-center rounded-3xl hover:bg-gray-100 m-1">
                <Link
                  to="/contact"
                  onClick={closeDropdown}
                  className="block px-2 py-2 text-[12px] text-gray-700"
                >
                  Contact
                </Link>
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
            </ul>
          </div>
        )}
      </div>

         {/* overlay */}
         {isOpen && (
        <div
          className={`fixed top-[65px] left-0 right-0 bottom-0 bg-black opacity-50 z-40 h-screen`}
          onClick={toggleDropdown}
        >
          <button className="absolute top-2 right-8 bg-white text-black rounded-full px-2 py-1 text-2xl z-50">&times;</button>
        </div>
      )}
    </>
  );
}
