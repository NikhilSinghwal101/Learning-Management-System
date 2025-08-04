// import React, { useEffect, useState } from "react";
// import { toast } from "react-toastify";
// import { AiOutlineArrowLeft } from "react-icons/ai";
// import { useDispatch } from "react-redux";
// import { useLocation, useNavigate } from "react-router-dom";
// import { addCourseLecture } from "../../redux/features/lectureSlice";

// const AddLecture = () => {
//   const courseDetails = useLocation().state;
//   // console.log("courseDetails: ", courseDetails);

//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const [userInput, setUserInput] = useState({
//     id: courseDetails?._id,
//     lecture: undefined,
//     title: "",
//     description: "",
//     videoSrc: "",
//   });

//   // function to handle the input box change
//   const handleInputChange = (event) => {
//     const { name, value } = event.target;
//     setUserInput({ ...userInput, [name]: value });
//   };

//   // function to get video and its link from the input
//   const getVideo = (event) => {
//     const video = event.target.files[0];
//     const source = window.URL.createObjectURL(video);
//     setUserInput({ ...userInput, videoSrc: source, lecture: video });
//   };

//   // function to handle the form submit
//   const handleFormSubmit = async (event) => {
//     event.preventDefault();

//     // checking for the empty fields
//     if (!userInput.lecture || !userInput.title || !userInput.description) {
//       toast.error("All fields are mandatory");
//       return;
//     }

//     // console.log("userInput: ", userInput);

//     const res = await dispatch(addCourseLecture(userInput));
//     // if (res?.payload?.success) {
//       setUserInput({
//         id: courseDetails?._id,
//         lecture: undefined,
//         title: "",
//         description: "",
//         videoSrc: "",
//       });
//     // }.

//     // navigate('/display-lectures');

//   };

//   // redirecting the user if no user details
//   useEffect(() => {
//     if (!courseDetails) {
//       navigate(-1);
//     }
//   }, []);

//   return (
//     <div>
//       <div className=" text-gray-800 flex flex-col items-center justify-center gap-10 mx-16 min-h-[90vh]">
//         <div className="flex flex-col gap-5 p-2 shadow-[0_0_10px_black] w-96 rounded-lg">
//           <header className="flex items-center justify-center relative">
//             <button
//               onClick={() => navigate(-1)}
//               className="absolute left-2 text-xl text-gray-800"
//             >
//               <AiOutlineArrowLeft />
//             </button>
//             <h1 className="text-xl text-yellow-500 font-semibold">
//               Add your new lecture
//             </h1>
//           </header>
//           <form onSubmit={handleFormSubmit} className="flex flex-col gap-3">
//             <input
//               type="text"
//               name="title"
//               value={userInput.title}
//               onChange={handleInputChange}
//               placeholder="Enter the title for lecture"
//               className="bg-transparent px-3 py-1 border"
//             />

//             <textarea
//               name="description"
//               value={userInput.description}
//               onChange={handleInputChange}
//               placeholder="Enter the description for lecture"
//               className="resize-none overflow-auto h-24 bg-transparent px-3 py-1 border"
//             />
//             {userInput.videoSrc ? (
//               <video
//                 src={userInput.videoSrc}
//                 muted
//                 controls
//                 controlsList="nodownload nofullscreen"
//                 disablePictureInPicture
//                 className="object-fill rounded-tl-lg rounded-tr-lg w-full"
//               ></video>
//             ) : (
//               <div className="h-48 border flex items-center justify-center cursor-pointer">
//                 <label
//                   htmlFor="lecture"
//                   className="font-semibold text-xl cursor-pointer"
//                 >
//                   Choose your video
//                 </label>
//                 <input
//                   type="file"
//                   name="lecture"
//                   id="lecture"
//                   onChange={getVideo}
//                   accept="video/mp4,video/x-m4v,video/*"
//                   className="hidden"
//                 />
//               </div>
//             )}

//             <button className="bg-green-600 hover:bg-green-500 rounded-md text-white hover:text-gray-100 py-1 font-semibold text-lg cursor-pointer">
//               Add Lecture
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AddLecture;




//-------------------------------------------------------------


import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

const AddLecture = () => {
  const courseDetails = useLocation().state;
  const navigate = useNavigate();

  const [userInput, setUserInput] = useState({
    id: courseDetails?._id,
    lecture: null,
    title: "",
    description: "",
    videoSrc: "",
  });

  // Function to handle input box change
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserInput((prev) => ({ ...prev, [name]: value }));
  };

  // Function to get video and its link from the input
  const getVideo = (event) => {
    const video = event.target.files[0];
    if (video) {
      const source = URL.createObjectURL(video);
      setUserInput((prev) => ({ ...prev, videoSrc: source, lecture: video }));
    }
  };

  // Function to handle the form submission
  // const handleFormSubmit = async (event) => {
  //   event.preventDefault();

  //   if (!userInput.lecture || !userInput.title || !userInput.description) {
  //     toast.error("All fields are mandatory");
  //     return;
  //   }

  //   // Create FormData
  //   const formData = new FormData();
  //   formData.append("lecture", userInput.lecture);
  //   formData.append("title", userInput.title);
  //   formData.append("description", userInput.description);

  //   try {
  //     const res = await axios.post(
  //       `http://localhost:5000/api/v1/course/${userInput.id}`,
  //       formData,
  //       {
  //         headers: {
  //           "Content-Type": "multipart/form-data",
  //           Accept: "application/json",
  //         },
  //       }
  //     );

  //     if (res.data.success) {
  //       toast.success("Lecture added successfully");
  //       setUserInput({
  //         id: courseDetails?._id,
  //         lecture: null,
  //         title: "",
  //         description: "",
  //         videoSrc: "",
  //       });
  //     }
  //   } catch (error) {
  //     toast.error(error?.response?.data?.message || "Failed to add lecture");
  //   }  
  // };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
  
    if (!userInput.lecture || !userInput.title || !userInput.description) {
      toast.error("All fields are mandatory");
      return;
    }
  
    const formData = new FormData();
    formData.append("lecture", userInput.lecture);
    formData.append("title", userInput.title);
    formData.append("description", userInput.description);
  
    // Using toast.promise to show pending, success, and error states
    await toast.promise(
      axios.post(
        `http://localhost:5000/api/v1/course/${userInput.id}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Accept: "application/json",
          },
        }
      ),
      {
        pending: "Uploading lecture...",
        success: "Lecture added successfully! 🎉",
        error: "Failed to add lecture. Try again!",
      }
    ).then((res) => {
      if (res.data.success) {
        setUserInput({
          id: courseDetails?._id,
          lecture: null,
          title: "",
          description: "",
          videoSrc: "",
        });
      }
      navigate(-1);
    }).catch((error) => {
      toast.error(error?.response?.data?.message || "Failed to add lecture");
    });
  };
  

  // Redirecting the user if no course details are found
  useEffect(() => {
    if (!courseDetails) {
      navigate(-1);
    }
  }, [courseDetails, navigate]);

  return (
    <div>
      <div className="text-gray-800 flex flex-col items-center justify-center gap-10 min-h-[90vh] mx-92">
        <div className="flex flex-col gap-5 p-2 shadow-[0_0_10px_black] md:w-96 w-[330px] rounded-lg">
          <header className="flex items-center justify-center relative">
            <button
              onClick={() => navigate(-1)}
              className="absolute left-2 text-xl text-gray-800"
            >
              <AiOutlineArrowLeft />
            </button>
            <h1 className="text-xl text-yellow-500 font-semibold">
              Add your new lecture
            </h1>
          </header>
          <form onSubmit={handleFormSubmit} className="flex flex-col gap-3">
            <input
              type="text"
              name="title"
              value={userInput.title}
              onChange={handleInputChange}
              placeholder="Enter the title for lecture"
              className="bg-transparent px-3 py-1 border"
            />

            <textarea
              name="description"
              value={userInput.description}
              onChange={handleInputChange}
              placeholder="Enter the description for lecture"
              className="resize-none overflow-auto h-24 bg-transparent px-3 py-1 border"
            />

            {userInput.videoSrc ? (
              <video
                src={userInput.videoSrc}
                muted
                controls
                controlsList="nodownload nofullscreen"
                disablePictureInPicture
                className="object-fill rounded-tl-lg rounded-tr-lg w-full"
              ></video>
            ) : (
              <div className="h-48 border flex items-center justify-center cursor-pointer">
                <label
                  htmlFor="lecture"
                  className="font-semibold text-xl cursor-pointer"
                >
                  Choose your video
                </label>
                <input
                  type="file"
                  name="lecture"
                  id="lecture"
                  onChange={getVideo}
                  accept="video/mp4,video/x-m4v,video/*"
                  className="hidden"
                />
              </div>
            )}

            <button
              type="submit"
              className="bg-green-600 hover:bg-green-500 rounded-md text-white hover:text-gray-100 py-1 font-semibold text-lg cursor-pointer"
            >
              Add Lecture
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddLecture;



