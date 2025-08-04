// import { React, useState } from "react";
// import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
// import { Link, useNavigate } from "react-router-dom";
// import axios from "axios";
// // import { server } from "../../server";
// import { toast } from "react-toastify";
// import { login } from "../redux/features/authSlice";
// import { useDispatch } from "react-redux";

// import { GoogleLogin } from "react-google-login";
// const clientId = "7986885452-ocn2p36u2tifmddiadte9bc1h5499s50.apps.googleusercontent.com";

// const Login = () => {
//   const onSuccess = (response) => {
//     console.log("Login Success: currentUser:", response.profileObj);
//     // You can send response.tokenId to your backend for verification
//   };
//   const onFailure = (response) => {
//     console.error("Login Failed: res:", response);
//   };

//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [visible, setVisible] = useState(false);

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     await axios
//       .post(
//         `http://localhost:5000/api/v1/user/login`,
//         {
//           email,
//           password,
//         },
//         { withCredentials: true }
//       )
//       .then((res) => {
//         console.log("login res: ", res);
//         // console.log(res?.data?.user || res?.data?.guestLogin);
//         dispatch(login(res?.data));
//         toast.success(res?.data?.message, {
//           // position: "top-right",
//           // autoClose: 3000,
//           // hideProgressBar: false,
//           // closeOnClick: true,
//           // pauseOnHover: true,
//           // draggable: true,
//           // progress: undefined,
//         });
//         navigate("/");
//         // window.location.reload(true);
//       })
//       .catch((err) => {
//         toast.error(err?.response?.data?.message);
//         // alert(err?.response?.data?.message)
//       });
//   };

//   return (
//     <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
//       <div className="sm:mx-auto sm:w-full sm:max-w-md">
//         <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
//           Login to your account
//         </h2>
//       </div>
//       <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
//         <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
//           <form className="space-y-6" onSubmit={handleSubmit}>
//             <div>
//               <label
//                 htmlFor="email"
//                 className="block text-sm font-medium text-gray-700"
//               >
//                 Email address
//               </label>
//               <div className="mt-1">
//                 <input
//                   type="email"
//                   name="email"
//                   autoComplete="email"
//                   required
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                   className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
//                 />
//               </div>
//             </div>
//             <div>
//               <label
//                 htmlFor="password"
//                 className="block text-sm font-medium text-gray-700"
//               >
//                 Password
//               </label>
//               <div className="mt-1 relative">
//                 <input
//                   type={visible ? "text" : "password"}
//                   name="password"
//                   autoComplete="current-password"
//                   required
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                   className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
//                 />
//                 {visible ? (
//                   <AiOutlineEye
//                     className="absolute right-2 top-2 cursor-pointer"
//                     size={25}
//                     onClick={() => setVisible(false)}
//                   />
//                 ) : (
//                   <AiOutlineEyeInvisible
//                     className="absolute right-2 top-2 cursor-pointer"
//                     size={25}
//                     onClick={() => setVisible(true)}
//                   />
//                 )}
//               </div>
//             </div>
//             <div className={`flex items-center justify-between`}>
//               <div className={`flex items-center`}>
//                 <input
//                   type="checkbox"
//                   name="remember-me"
//                   id="remember-me"
//                   className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
//                 />
//                 <label
//                   htmlFor="remember-me"
//                   className="ml-2 block text-sm text-gray-900"
//                 >
//                   Remember me
//                 </label>
//               </div>
//               <div className="text-sm">
//                 <a
//                   href=".forgot-password"
//                   className="font-medium text-blue-600 hover:text-blue-500"
//                 >
//                   Forgot your password?
//                 </a>
//               </div>
//             </div>

//             {/* <div
//               className="text-center cursor-pointer border-[1px] border-green-400 rounded-md p-1 font-semibold hover:bg-green-600 hover:text-white hover:font-normal"
//               onClick={() => {
//                 setEmail("test@gmail.com");
//                 setPassword("Test@123");
//               }}
//             >
//               Guest Login
//             </div> */}

//             <div>
//               <button
//                 type="submit"
//                 className="group relative w-full h-[40px] flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
//               >
//                 Submit
//               </button>
//             </div>
//             <div className={`flex items-center w-full`}>
//               <h4>Not have any account?</h4>
//               <Link to="/signup" className="text-blue-600 pl-2">
//                 Sign Up
//               </Link>
//             </div>

//             <GoogleLogin
//               clientId={clientId}
//               buttonText="Login with Google"
//               onSuccess={onSuccess}
//               onFailure={onFailure}
//               cookiePolicy={"single_host_origin"}
//             />
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;

// // backend code => optional
// // const { OAuth2Client } = require('google-auth-library');
// // const client = new OAuth2Client(CLIENT_ID);

// // async function verify(token) {
// //     const ticket = await client.verifyIdToken({
// //         idToken: token,
// //         audience: CLIENT_ID,  // Specify the CLIENT_ID of the app that accesses the backend
// //     });
// //     const payload = ticket.getPayload();
// //     const userid = payload['sub'];
// //     // Do something with the user ID
// // }

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

import { React, useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { getUserData, login } from "../redux/features/authSlice";
import { useDispatch } from "react-redux";
import { GoogleLogin } from "react-google-login";

const clientId =
  "7986885452-ocn2p36u2tifmddiadte9bc1h5499s50.apps.googleusercontent.com";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [visible, setVisible] = useState(false);

  const onSuccess = async (response) => {
    const tokenId = response.tokenId; // Get the token
    console.log("Login Success: currentUser:", response.profileObj);

    // Send token to your backend for verification
    try {
      const res = await axios.post(
        `http://localhost:5000/api/v1/user/google-login`,
        { tokenId }
      );
      dispatch(login(res.data));
      toast.success(res.data.message);
      dispatch(getUserData());
      navigate("/");
    } catch (err) {
      toast.error(err.response.data.message);
    }
  };

  const onFailure = (response) => {
    console.error("Login Failed: res:", response);
    // toast.error("Google login failed.");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        `http://localhost:5000/api/v1/user/login`,
        { email, password },
        { withCredentials: true }
      );
      dispatch(login(res.data));
      toast.success(res.data.message);
      dispatch(getUserData());
      navigate("/");
    } catch (err) {
      toast.error(err.response.data.message);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8 px-6">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center md:text-3xl text-2xl font-extrabold text-gray-900">
          Login to your account
        </h2>
      </div>
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email address
              </label>
              <div className="mt-1">
                <input
                  type="email"
                  name="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm text-sm md:text-[14px]"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <div className="mt-1 relative">
                <input
                  type={visible ? "text" : "password"}
                  name="password"
                  autoComplete="current-password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm text-sm md:text-[14px]"
                />
                {visible ? (
                  <AiOutlineEye
                    className="absolute right-2 top-2 cursor-pointer"
                    size={25}
                    onClick={() => setVisible(false)}
                  />
                ) : (
                  <AiOutlineEyeInvisible
                    className="absolute right-2 top-2 cursor-pointer"
                    size={25}
                    onClick={() => setVisible(true)}
                  />
                )}
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  name="remember-me"
                  id="remember-me"
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label
                  htmlFor="remember-me"
                  className="ml-2 block text-sm text-gray-900"
                >
                  Remember me
                </label>
              </div>
              <div className="text-sm">
                <Link
                  to="/forgot-password"
                  className="font-medium text-blue-600 hover:text-blue-500"
                >
                  Forgot your password?
                </Link>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="group relative w-full h-[40px] flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
              >
                Submit
              </button>
            </div>
            <div className="flex items-center w-full md:text-[14px] text-[12px]">
              <h4>Not have any account?</h4>
              <Link to="/signup" className="text-blue-600 pl-2">
                Sign Up
              </Link>
            </div>

            <GoogleLogin
              clientId={clientId}
              buttonText="Login with Google"
              onSuccess={onSuccess}
              onFailure={onFailure}
              cookiePolicy={"single_host_origin"}
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
