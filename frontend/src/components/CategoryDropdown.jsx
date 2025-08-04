import React from "react";
import { Link } from "react-router-dom";

export default function CategoryDropdown() {
  return (
    <>
      <div>
          <div className="ml-[-110px] mt-2 sm:mt-4 md:w-[15%] w-[70%] absolute top-[48px] rounded-lg shadow-lg bg-white ring-1 ring-black ring-opacity-5 p-2">
            <ul className={`list-none gap-8 md:text-[14px] text-[12px]`}>
              <li className="flex items-center rounded-3xl hover:bg-gray-100 m-1">
                <Link
                  to={"/courses"}
                  className="block px-2 py-2 text-[12px] text-gray-700"
                >
                    Tech & Coding
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
                >
                  Web Development
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
                >
                  IT & Software
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
                  to="/courses"
                  className="block px-2 py-2 text-[12px] text-gray-700"
                >
                  Programming
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
                  to="/courses"
                  className="block px-2 py-2 text-[12px] text-gray-700"
                >
                  UI & UX Design
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
      </div>
    </>
  );
}
