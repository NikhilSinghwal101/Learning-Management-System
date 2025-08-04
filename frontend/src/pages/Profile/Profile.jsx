// import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { Link, useLocation } from "react-router-dom";
// import { getUserData } from "../../redux/features/authSlice";
// import { toast } from "react-toastify";

// const Profile = () => {
//   const dispatch = useDispatch();
//   const { pathname } = useLocation();

//   const userData = useSelector((state) => state?.auth?.data);
//   // console.log("userData in profile: ", userData?.user);

//   // useEffect(() => {
//   //   dispatch(getUserData());
//   // }, []);

//   useEffect(() => {
//     dispatch(getUserData()).then((res) => {
//       // Only toast if you're on the profile page and data exists
//       if (pathname === "/profile" && res?.payload?.message) {
//         toast.success(res.payload.message);
//       }
//     });
//   }, [dispatch, pathname]);

//   return (
//     <>
//       <div className="min-h-[90vh] flex items-center justify-center">
//         <div className="my-10 flex flex-col gap-4 rounded-lg p-4 text-gray-800 w-80 shadow-[0_0_10px_black]">
//           <img
//             className="w-40 m-auto rounded-full border border-black"
//             src={userData?.user?.avatar?.secure_url}
//             alt="user profile image"
//           />

//           <h3 className="text-xl font-semibold text-center capitalize">
//             {userData?.user?.fullName}
//           </h3>

//           <div className="grid grid-cols-2">
//             <p>Email :</p>
//             <p>{userData?.user?.email}</p>
//             <p>Role :</p>
//             <p>{userData?.user?.role}</p>
//             <p>Subscription :</p>
//             <p>
//               {userData?.user?.subscription?.status === "active"
//                 ? "Active"
//                 : "Inactive"}
//             </p>
//           </div>

//           {/* button to change the password */}
//           <div className="flex items-center justify-between gap-2">
//             <Link
//               to='/change-password'
//               className="w-1/2 bg-green-600 hover:bg-green-700 transition-all ease-in-out duration-300 rounded-sm py-2 font-semibold cursor-pointer text-center text-white"
//             >
//               <button>Change Password</button>
//             </Link>

//             <Link
//               to='/update-profile'
//               className="w-1/2 border border-black hover:border-green-600 transition-all ease-in-out duration-300 rounded-sm py-2 font-semibold cursor-pointer text-center text-gray-900 hover:text-green-600"
//             >
//               <button>Edit Profile</button>
//             </Link>
//           </div>

//           {userData?.user?.subscription?.status === "active" && (
//             <button
//               className="w-full bg-red-600 hover:bg-red-500 transition-all ease-in-out duration-300 rounded-sm py-2 font-semibold cursor-pointer text-center text-white"
//             >
//               Cancel Subscription
//             </button>
//           )}
//         </div>
//       </div>
//     </>
//   );
// };

// export default Profile;

//------------------------------------------------------------------
// Life-time access to courses not subscription based
//-------------------- Without react-loading-skeleton --------------------------------------------------------

// import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { Link, useLocation } from "react-router-dom";
// import { getUserData } from "../../redux/features/authSlice";
// import { toast } from "react-toastify";

// const Profile = () => {
//   const dispatch = useDispatch();
//   const { pathname } = useLocation();

//   const userData = useSelector((state) => state?.auth?.data);

//   useEffect(() => {
//     dispatch(getUserData()).then((res) => {
//       if (pathname === "/profile" && res?.payload?.message) {
//         toast.success(res.payload.message);
//       }
//     });
//   }, [dispatch, pathname]);

//   return (
//     <div className="min-h-[90vh] py-10 px-4 flex items-center justify-center bg-gradient-to-br from-white to-gray-50">
//       <div className="w-full max-w-3xl p-6 rounded-xl shadow-xl bg-white">
//         {/* Profile Info */}
//         <div className="flex flex-col items-center text-center gap-4 mb-6">
//           <img
//             className="w-32 h-32 rounded-full border-4 border-green-600 shadow-md object-cover"
//             src={userData?.user?.avatar?.secure_url}
//             alt="User Avatar"
//           />
//           <h3 className="text-2xl font-bold capitalize text-gray-800">
//             {userData?.user?.fullName}
//           </h3>
//           <div className="grid grid-cols-2 gap-y-2 max-w-xs text-gray-600 text-sm">
//             <p className="font-medium text-right pr-2">Email:</p>
//             <p className="text-left">{userData?.user?.email}</p>
//             <p className="font-medium text-right pr-2">Role:</p>
//             <p className="text-left">{userData?.user?.role}</p>
//           </div>
//         </div>

//         {/* Profile Action Buttons */}
//         <div className="flex gap-4 mb-8 justify-center">
//           <Link to="/change-password">
//             <button className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded shadow-sm transition">
//               Change Password
//             </button>
//           </Link>
//           <Link to="/update-profile">
//             <button className="border border-green-600 hover:bg-green-50 text-green-700 px-5 py-2 rounded shadow-sm transition">
//               Edit Profile
//             </button>
//           </Link>
//         </div>

//         {/* Purchased Courses */}
//         {userData?.courseInfo?.purchasedCourses?.length > 0 && (
//           <div className="mt-4">
//             <h4 className="text-xl font-semibold mb-4 text-gray-800 border-b pb-2">
//               Your Purchased Courses
//             </h4>
//             <div className="grid gap-4">
//               {userData.courseInfo.purchasedCourses.map((item, index) => (
//                 <div
//                   key={index}
//                   className="flex flex-col sm:flex-row items-center sm:items-start gap-4 border rounded-md p-4 shadow-sm hover:shadow-md transition duration-200"
//                 >
//                   {/* Thumbnail */}
//                   <img
//                     src={
//                       item.course?.thumbnail?.secure_url ||
//                       "/default-thumbnail.jpg"
//                     }
//                     alt={item.course?.title}
//                     className="w-full sm:w-32 h-24 object-cover rounded-md border"
//                   />

//                   {/* Info + Button */}
//                   <div className="flex-1 w-full sm:w-auto">
//                     <h5 className="text-lg font-semibold text-gray-900 mb-1">
//                       {item.course?.title || "Untitled Course"}
//                     </h5>
//                     <p className="text-sm text-gray-500 mb-2">
//                       Purchased on:{" "}
//                       {new Date(item.purchasedAt).toLocaleDateString("en-IN", {
//                         day: "numeric",
//                         month: "short",
//                         year: "numeric",
//                       })}
//                     </p>
//                     <Link
//                       to={`/course-details/${item.course?._id}`}
//                       className="inline-block mt-1 bg-green-600 hover:bg-green-700 text-white px-4 py-1.5 rounded text-sm shadow"
//                     >
//                       Go to Course
//                     </Link>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Profile;

//---------- With react-loading-skeleton ---------------

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { getUserData } from "../../redux/features/authSlice";
import { toast } from "react-toastify";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Profile = () => {
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const [loading, setLoading] = useState(true);

  const userData = useSelector((state) => state?.auth?.data);

  useEffect(() => {
    setLoading(true);
    dispatch(getUserData()).then((res) => {
      setLoading(false);
      if (pathname === "/profile" && res?.payload?.message) {
        toast.success(res.payload.message);
      }
    });
  }, [dispatch, pathname]);

  return (
    <div className="min-h-[90vh] py-10 px-4 flex items-center justify-center bg-gradient-to-br from-white to-gray-50">
      <div className="w-full max-w-3xl p-6 rounded-xl shadow-xl bg-white">
        {/* Profile Info */}
        <div className="flex flex-col items-center text-center gap-4 mb-6">
          {loading ? (
            <Skeleton circle height={128} width={128} />
          ) : (
            <img
              className="w-32 h-32 rounded-full border-4 border-green-600 shadow-md object-cover"
              src={userData?.user?.avatar?.secure_url}
              alt="User Avatar"
            />
          )}

          <h3 className="text-2xl font-bold capitalize text-gray-800">
            {loading ? <Skeleton width={120} /> : userData?.user?.fullName}
          </h3>

          <div className="grid grid-cols-2 gap-y-2 max-w-xs text-gray-600 text-sm">
            <p className="font-medium text-right pr-2">Email:</p>
            <p className="text-left">
              {loading ? <Skeleton width={160} /> : userData?.user?.email}
            </p>
            <p className="font-medium text-right pr-2">Role:</p>
            <p className="text-left">
              {loading ? <Skeleton width={100} /> : userData?.user?.role}
            </p>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex gap-4 mb-8 justify-center">
          <Link to="/change-password">
            <button className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded shadow-sm transition">
              Change Password
            </button>
          </Link>
          <Link to="/update-profile">
            <button className="border border-green-600 hover:bg-green-50 text-green-700 px-5 py-2 rounded shadow-sm transition">
              Edit Profile
            </button>
          </Link>
        </div>

        {/* Purchased Courses */}
        {loading ? (
          <div className="grid gap-4">
            {Array(2)
              .fill(0)
              .map((_, index) => (
                <div
                  key={index}
                  className="flex gap-4 border rounded-md p-4 shadow-sm"
                >
                  <Skeleton height={96} width={128} />
                  <div className="flex-1 space-y-2">
                    <Skeleton width={`80%`} height={20} />
                    <Skeleton width={`60%`} height={16} />
                    <Skeleton width={100} height={32} />
                  </div>
                </div>
              ))}
          </div>
        ) : (
          userData?.courseInfo?.purchasedCourses?.length > 0 && (
            <div className="mt-4">
              <h4 className="text-xl font-semibold mb-4 text-gray-800 border-b pb-2">
                Your Purchased Courses
              </h4>
              <div className="grid gap-4">
                {userData.courseInfo.purchasedCourses.map((item, index) => (
                  <div
                    key={index}
                    className="flex flex-col sm:flex-row items-center sm:items-start gap-4 border rounded-md p-4 shadow-sm hover:shadow-md transition duration-200"
                  >
                    <img
                      src={
                        item.course?.thumbnail?.secure_url ||
                        "/default-thumbnail.jpg"
                      }
                      alt={item.course?.title}
                      className="w-full sm:w-32 md:h-28 sm:h-32 object-cover rounded-md border"
                    />

                    <div className="flex-1 w-full sm:w-auto">
                      <h5 className="text-[18px] font-semibold text-gray-900 mb-1">
                        {item.course?.title || "Untitled Course"}
                      </h5>
                      <p className="text-[12px] text-gray-500 mb-1">
                        Purchased on:{" "}
                        {new Date(item.purchasedAt).toLocaleDateString(
                          "en-IN",
                          {
                            day: "numeric",
                            month: "short",
                            year: "numeric",
                          }
                        )}
                      </p>
                       <p className="text-[12px] text-gray-500 mb-1">
                        Expired on:{" "}
                        {new Date(item.expireAt).toLocaleDateString(
                          "en-IN",
                          {
                            day: "numeric",
                            month: "short",
                            year: "numeric",
                          }
                        )}
                      </p>
                      <Link
                        to={`/course-details/${item.course?._id}`}
                        className="inline-block mt-1 bg-green-600 hover:bg-green-700 text-white px-4 py-1.5 rounded text-sm shadow"
                      >
                        Go to Course
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default Profile;

