// import { FiUpload } from "react-icons/fi";
// import React, { useRef, useState } from "react";
// import RichTextEditor from "../../components/RichTextEditor";
// import { toast } from "react-toastify";

// // {
// //     "coverImg": "https://www.asiapacific.edu/uploads/blogs/1657627995.jpg",
// //     "duration": "25h 06m",
// //     "title": "Introduction to Python Programming",
// //     "lessons": 20,
// //     "level": "Beginner",
// //     "rating": 4.7,
// //     "userImg": "",
// //     "userName": "Wade",
// //     "price": "$499",
// //     "category": "Programming"
// // }

// export default function CreateCourse() {
//   const hiddenFileInput = useRef(null);
//   const selectLevel = useRef(null);
//   const selectCategory = useRef(null);
//   const [fileName, setFileName] = useState("");
//   // const [courseCoverImg, setCourseCoverImg] = useState("");

//   const [isLevelMarginBottom, setIsLevelMarginBottom] = useState(false);
//   const [isCategoryMarginBottom, setIsCategoryMarginBottom] = useState(false);

//   //   const [videoSrc, setVideoSrc] = useState(null);
//   //   const [videoFile, setVideoFile] = useState(null);

//   const [input, setInput] = useState(""); // RichTextEditor

//   const [userInput, setUserInput] = useState({
//     title: "",
//     description: "",
//     category: "",
//     price: "",
//     level: "",
//     createdBy: "",
//     thumbnail: null,
//     previewImage: "",
//   });

//   const handleUserInput = (event) => {
//     const { name, value } = event.target;
//     setUserInput({
//       ...userInput,
//       [name]: value,
//     });
//   };

//   const handleFormSubmit = async (event) => {
//     event.preventDefault();

//     if (userInput) {
//       console.log(userInput);
//       // if (
//       //   !userInput.title ||
//       //   !userInput.createdBy ||
//       //   !userInput.description
//       // ) {
//       //   toast.error("All fields are mandatory");
//       //   return;
//       // }
//     }
// }

// const uploadFile = () => {
//   hiddenFileInput.current?.click();
// };

// const marginBottomOnLevelSelect = () => {
//   if (selectLevel.current) {
//     if (isLevelMarginBottom) {
//       selectLevel.current.style.marginBottom = "0px";
//     } else {
//       selectLevel.current.style.marginBottom = "80px";
//     }
//     setIsLevelMarginBottom(!isLevelMarginBottom);
//   }
// };

// const marginBottomOnCategorySelect = () => {
//   if (selectCategory.current) {
//     if (isCategoryMarginBottom) {
//       selectCategory.current.style.marginBottom = "0px";
//     } else {
//       selectCategory.current.style.marginBottom = "60px";
//     }
//     setIsCategoryMarginBottom(!isCategoryMarginBottom);
//   }
// };

// const handleChange = (event) => {
//   const file = event.target.files?.[0];

//   if (file) {
//     const reader = new FileReader();
//     console.log(reader);
//     setFileName(file.name);

//     reader.onload = (e) => {
//       const content = e.target?.result;
//       // console.log(content);
//       // setCourseCoverImg(content);
//       setUserInput({
//         ...userInput,
//         previewImage: content
//       });
//     };

//     reader.readAsDataURL(file);
//   }
// };

// //   const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
// //     const file = e.target?.files?.[0];
// //     if (file) {
// //         const src = URL.createObjectURL(file); // Create a temporary URL for the video file
// //         setVideoFile(file);
// //         setVideoSrc(src);
// //     }
// //   }
// //   const handleRemoveVideo = () => {
// //     if (videoFile) {
// //         URL.revokeObjectURL(videoSrc!); // Clean up the object URL
// //         setVideoSrc(null);
// //         setVideoFile(null);
// //     }
// // };

// return (
//   <>
//     <form className="md:mx-52 p-8 md:mt-16 lg:mt-16 sm:mt-16 mt-8 md:mb-16 lg:mb-16 sm:mb-16 mb-8 mx-8 border-[1px] border-slate-200 rounded-sm" onSubmit={handleFormSubmit}>
//       <div className="overflow-hidden md:mb-[20px] sm:mb-[16px] lg:mb-[20px] mb-[16px]">
//         <label
//           htmlFor="title"
//           className="md:text-3xl lg:text-3xl sm:text-2xl text-xl text-gray-800 block md:mb-2 lg:mb-2 sm:mb-2 mb-[4px]"
//         >
//           Title
//         </label>
//         <input
//           required
//           type="text"
//           id="title"
//           name="title"
//           value={userInput.title}
//           onChange={handleUserInput}
//           placeholder="Enter the title..."
//           className="border-[1px] border-gray-500 p-2 w-[100%] rounded-sm text-md focus:outline-none lg:text-base md:text-base sm:text-base text-sm"
//         />
//       </div>

//       <div className="md:mb-[20px] sm:mb-[16px] lg:mb-[20px] mb-[16px]">
//         <label
//           htmlFor="description"
//           className="md:text-3xl lg:text-3xl sm:text-2xl text-xl text-gray-800 block md:mb-2 lg:mb-2 sm:mb-2 mb-[4px]"
//         >
//           Description
//         </label>
//         <RichTextEditor
//           input={input}
//           setInput={setInput}
//           value={userInput.description}
//           onChange={handleUserInput}
//         />
//         {/* <h3>Preview:</h3>
//           <div dangerouslySetInnerHTML={{ __html: input }} />{" "} */}
//       </div>

//       <div className="overflow-hidden md:mb-[20px] sm:mb-[16px] lg:mb-[20px] mb-[16px]">
//         <label
//           htmlFor="category"
//           className="md:text-3xl lg:text-3xl sm:text-2xl text-xl text-gray-800 block md:mb-2 lg:mb-2 sm:mb-2 mb-[4px]"
//         >
//           Category
//         </label>
//         <select
//           ref={selectCategory}
//           name="category"
//           id="category"
//           typeof="text"
//           className="border-[1px] border-gray-500 p-2 w-[100%] rounded-sm text-md focus:outline-none lg:text-base md:text-base sm:text-base text-sm"
//           onClick={marginBottomOnCategorySelect}
//         >
//           <option value="web-development">Web Development</option>
//           <option value="programming">Programming</option>
//         </select>
//       </div>
//       {/* <div className="overflow-hidden md:mb-[20px] sm:mb-[16px] lg:mb-[20px] mb-[16px]">
//           <label
//             htmlFor="lessons"
//             className="md:text-3xl lg:text-3xl sm:text-2xl text-xl text-gray-800 block md:mb-2 lg:mb-2 sm:mb-2 mb-[4px]"
//           >
//             Lessons
//           </label>
//           <input
//             required
//             type="text"
//             id="lessons"
//             name="lessons"
//             placeholder="Enter the lessons.."
//             className="border-[1px] border-gray-500 p-2 w-[100%] rounded-sm text-md focus:outline-none lg:text-base md:text-base sm:text-base text-sm"
//           />
//         </div> */}
//       <div className="overflow-hidden md:mb-[20px] sm:mb-[16px] lg:mb-[20px] mb-[4px]">
//         <label
//           htmlFor="price"
//           className="md:text-3xl lg:text-3xl sm:text-2xl text-xl text-gray-800 block md:mb-2 lg:mb-2 sm:mb-2 mb-[4px]"
//         >
//           Price
//         </label>
//         <input
//           type="text"
//           id="price"
//           name="price"
//           value={userInput.price}
//           onChange={handleUserInput}
//           placeholder="Enter the price..."
//           className="border-[1px] border-gray-500 p-2 w-[100%] rounded-sm focus:outline-none lg:text-base md:text-base sm:text-base text-sm"
//         />
//       </div>
//       <div className="overflow-hidden md:mb-[40px] sm:mb-[16px] lg:mb-[20px] mb-[16px]">
//         <label
//           htmlFor="level"
//           className="md:text-3xl lg:text-3xl sm:text-2xl text-xl text-gray-800 block md:mb-2 lg:mb-2 sm:mb-2 mb-[4px]"
//         >
//           Level
//         </label>
//         <select
//           ref={selectLevel}
//           name="level"
//           id="level"
//           typeof="text"
//           className="border-[1px] border-gray-500 p-2 w-[100%] rounded-sm text-md focus:outline-none lg:text-base md:text-base sm:text-base text-sm"
//           onClick={marginBottomOnLevelSelect}
//         >
//           <option value="beginner">Beginner</option>
//           <option value="intermediate">Intermediate</option>
//           <option value="advance">Advance</option>
//         </select>
//       </div>

//       <div className="overflow-hidden md:mb-[20px] sm:mb-[16px] lg:mb-[20px] mb-[4px]">
//         <label
//           htmlFor="createdBy"
//           className="md:text-3xl lg:text-3xl sm:text-2xl text-xl text-gray-800 block md:mb-2 lg:mb-2 sm:mb-2 mb-[4px]"
//         >
//           Instructor Name
//         </label>
//         <input
//           type="name"
//           id="createdBy"
//           name="createdBy"
//           value={userInput.createdBy}
//           onChange={handleUserInput}
//           placeholder="Enter the instructor name..."
//           className="border-[1px] border-gray-500 p-2 w-[100%] rounded-sm focus:outline-none lg:text-base md:text-base sm:text-base text-sm"
//         />
//       </div>

//       <div className="overflow-hidden md:mt-8 lg:mt-8 sm:mt-8 mt-[24px]">
//         <input
//           required
//           type="file"
//           className="hidden"
//           id="fileId"
//           // name="courseCoverImg"
//           name="thumbnail"
//           ref={hiddenFileInput}
//           // value={userInput.thumbnail}
//           onChange={handleChange}
//         />
//         <button
//           className="border-[1px] border-gray-700 px-4 py-2 rounded-sm cursor-pointer md:text-base lg:text-base ms:text-base text-sm flex justify-between items-center gap-2"
//           onClick={uploadFile}
//         >
//           Upload cover image <FiUpload className="text-xl text-blue-800" />
//         </button>
//         {/* <label htmlFor="fileId" className="border-[1px] border-gray-700 px-4 py-2 rounded-md cursor-pointer">Upload an image</label> */}
//         {userInput?.previewImage && (
//           <div className="border-[1px] border-dotted border-black p-1 mt-2">
//             <img
//               // src={courseCoverImg}
//               src={userInput.previewImage}
//               alt="preview image"
//               className="h-[200px] md:w-[200px] lg:w-[200px] sm:w-[200px] w-full"
//             />
//             {/* <p className="text-blue-800">{fileName}</p> */}
//           </div>
//         )}
//       </div>
//       <button
//         className="border-none px-4 py-2 bg-green-500 text-white rounded-md hover:bg-gradient-to-r from-purple-500 to-pink-500 md:mt-8 lg:mt-8 sm:mt-8 mt-4 shadow-md"
//         type="submit"
//       >
//         Create a course
//       </button>
//     </form>
//     {/* <div>
//         <label htmlFor="video">Course Video</label>
//         <input
//                 type="file"
//                 accept="video/*"
//                 onChange={handleFileChange}
//             />
//             {
//                 videoSrc && (
//                     <div>
//                     <video width="600" controls>
//                     <source src={videoSrc} />
//                     </video>
//                      <button onClick={handleRemoveVideo} className="border-none px-4 py-2 bg-green-500 text-white m-4">Remove Video</button>
//                      </div>
//                 )
//             }
//       </div> */}
//   </>
// );
// }

//----------------------------------------------------------------------------------------------

import { FiUpload } from "react-icons/fi";
import React, { useEffect, useRef, useState } from "react";
import RichTextEditor from "../../components/RichTextEditor";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { updateCourse, getCourseById } from "../../redux/features/courseSlice";
import { useNavigate, useParams } from "react-router-dom";

export default function CreateCourse() {
  const navigate = useNavigate();
  const { id } = useParams();
  const dispatch = useDispatch();
  const hiddenFileInput = useRef(null);
  const [fileName, setFileName] = useState("");
  const [input, setInput] = useState("");
  const courseData = useSelector((state) => state?.courses?.course?.course);
  // console.log("courseData: ", courseData);

  const [userInput, setUserInput] = useState({
    title: "",
    description: "",
    category: "",
    price: "",
    level: "",
    createdBy: "",
    thumbnail: null,
    previewImage: "",
  });

  const handleUserInput = (event) => {
    const { name, value } = event.target;
    setUserInput({
      ...userInput,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    // Ensure all fields are filled
    if (
      !userInput.title ||
      !input.trim() ||
      !userInput.category ||
      !userInput.price ||
      !userInput.level ||
      !userInput.createdBy
      // !userInput.thumbnail
    ) {
      toast.error("All fields are mandatory");
      return;
    }

    // Update the state with the description from RichTextEditor
    setUserInput((prev) => ({ ...prev, description: input }));

    console.log(userInput);

    const formData = new FormData();
    formData.append("title", userInput.title);
    formData.append("description", input);
    formData.append("category", userInput.category);
    formData.append("price", userInput.price);
    formData.append("level", userInput.level);
    formData.append("createdBy", userInput.createdBy);
    formData.append("thumbnail", userInput.thumbnail);

    dispatch(updateCourse({ courseId: id, formData }));

    navigate("/admin-dashboard");

    // setUserInput((prev) => ({
    //   ...prev,
    //   title: "",
    //   category: "",
    //   price: "",
    //   level: "",
    //   createdBy: "",
    //   thumbnail: null,
    //   previewImage: "",
    // }));
  };

  const uploadFile = () => {
    hiddenFileInput.current?.click();
  };

  const handleChange = (event) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      setFileName(file.name);
      reader.onload = (e) => {
        setUserInput({
          ...userInput,
          previewImage: e.target?.result,
          thumbnail: file,
        });
      };
      reader.readAsDataURL(file);
    }
  };

  useEffect(() => {
    if (id) {
      dispatch(getCourseById(id));
    }
  }, [id, dispatch]);

  useEffect(() => {
    if (courseData) {
      setUserInput({
        title: courseData?.title || "",
        description: courseData?.description || "",
        category: courseData?.category || "",
        price: courseData?.price || "",
        level: courseData?.level || "",
        createdBy: courseData?.createdBy || "",
        thumbnail: null,
        previewImage: courseData?.thumbnail?.secure_url || "",
      });
      setInput(courseData?.description || "");
    }
  }, [courseData]);

  return (
    <form
      className="md:mx-52 p-8 mt-8 mb-8 border border-gray-200 rounded-sm"
      onSubmit={handleFormSubmit}
    >
      <div className="mb-4">
        <label htmlFor="title" className="text-xl text-gray-800 block mb-2">
          Title
        </label>
        <input
          required
          type="text"
          id="title"
          name="title"
          value={userInput.title}
          onChange={handleUserInput}
          placeholder="Enter the title..."
          className="border border-gray-500 p-2 w-full rounded-sm focus:outline-none"
        />
      </div>

      <div className="mb-4">
        <label
          htmlFor="description"
          className="text-xl text-gray-800 block mb-2"
        >
          Description
        </label>
        <RichTextEditor input={input} setInput={setInput} />
      </div>

      <div className="mb-4">
        <label htmlFor="category" className="text-xl text-gray-800 block mb-2">
          Category
        </label>
        <select
          name="category"
          id="category"
          value={userInput.category}
          onChange={handleUserInput}
          className="border border-gray-500 p-2 w-full rounded-sm focus:outline-none"
        >
          <option value="">Select Category</option>
          <option value="Web Development">Web Development</option>
          <option value="Programming">Programming</option>
        </select>
      </div>

      <div className="mb-4">
        <label htmlFor="price" className="text-xl text-gray-800 block mb-2">
          Price
        </label>
        <input
          type="text"
          id="price"
          name="price"
          value={userInput.price}
          onChange={handleUserInput}
          placeholder="Enter the price..."
          className="border border-gray-500 p-2 w-full rounded-sm focus:outline-none"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="level" className="text-xl text-gray-800 block mb-2">
          Level
        </label>
        <select
          name="level"
          id="level"
          value={userInput.level}
          onChange={handleUserInput}
          className="border border-gray-500 p-2 w-full rounded-sm focus:outline-none"
        >
          <option value="">Select Level</option>
          <option value="Beginner">Beginner</option>
          <option value="Intermediate">Intermediate</option>
          <option value="Advanced">Advanced</option>
        </select>
      </div>

      <div className="mb-4">
        <label htmlFor="createdBy" className="text-xl text-gray-800 block mb-2">
          Instructor Name
        </label>
        <input
          type="text"
          id="createdBy"
          name="createdBy"
          value={userInput.createdBy}
          onChange={handleUserInput}
          placeholder="Enter the instructor name..."
          className="border border-gray-500 p-2 w-full rounded-sm focus:outline-none"
        />
      </div>

      <div className="mb-4">
        <input
          type="file"
          className="hidden"
          ref={hiddenFileInput}
          onChange={handleChange}
        />
        <button
          type="button"
          className="border border-gray-700 px-4 py-2 rounded-sm flex items-center gap-2"
          onClick={uploadFile}
        >
          Upload cover image <FiUpload className="text-xl text-blue-800" />
        </button>
        {userInput.previewImage && (
          <div className="border border-dotted border-black p-2 mt-2">
            <img
              src={userInput.previewImage}
              alt="preview"
              className="h-40 w-full object-cover"
            />
            {/* <p className="text-blue-800 mt-1">{fileName}</p> */}
          </div>
        )}
      </div>

      <button
        type="submit"
        className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-gradient-to-r from-purple-500 to-pink-500 mt-4 shadow-md"
      >
        Update a course
      </button>
    </form>
  );
}
