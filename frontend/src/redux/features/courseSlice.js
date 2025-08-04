// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// // import { toast } from "react-hot-toast";
// import { toast } from 'react-toastify';
// // import axiosInstance from "../Helper/axiosInstance";
// import axios from 'axios';
// import { courseCurriculumInitialFormData, courseLandingInitialFormData } from "../../config";

// const initialState = {
//   coursesData: [],
//   courseLandingFormData : courseLandingInitialFormData,
//   courseCurriculumFormData : courseCurriculumInitialFormData,
//   mediaUploadProgress : false,
//   mediaUploadProgressPercentage : 0,
//   instructorCoursesList : [],
//   currentEditedCourseId : null,
// };


// //----------------------------------------------------
// // // sangam

// export async function mediaUploadService(formData, onProgressCallback) {
//   const { data } = await axios.post("http://localhost:5000/api/v1/media/upload", formData, {
//     onUploadProgress: (progressEvent) => {
//       const percentCompleted = Math.round(
//         (progressEvent.loaded * 100) / progressEvent.total
//       );
//       onProgressCallback(percentCompleted);
//     },
//   });
//   return data;
// }


// export async function mediaDeleteService(id) {
//   const { data } = await axios.delete(`http://localhost:5000/api/v1/media/delete/${id}`);
//   return data;
// }


// export async function mediaBulkUploadService(formData, onProgressCallback) {
//   const { data } = await axios.post("http://localhost:5000/api/v1/media/bulk-upload", formData, {
//     onUploadProgress: (progressEvent) => {
//       const percentCompleted = Math.round(
//         (progressEvent.loaded * 100) / progressEvent.total
//       );
//       onProgressCallback(percentCompleted);
//     },
//   });
//   return data;
// }

// //----------------------------------------------------

// // function to get all courses
// export const getAllCourses = createAsyncThunk("/course/get", async () => {
//   try {
//     const res = await axios.get("http://localhost:5000/api/v1/course");

//     toast.promise(res, {
//       loading: "Loading courses data...",
//       success: "Courses loaded successfully",
//       error: "Failed to get courses",
//     });

//     const response = await res;

//     return response.data.courses;
//   } catch (error) {
//     toast.error(error?.response?.data?.message);
//   }
// });

// // function to create a new course
// export const createNewCourse = createAsyncThunk(
//   "/get/courses",
//   async (data) => {
//     try {
//       // creating the form data from user data
//       let formData = new FormData();
//       formData.append("title", data?.title);
//       formData.append("description", data?.description);
//       formData.append("category", data?.category);
//       // formData.append("lessons", data?.lessons);
//       formData.append("price", data?.price);
//       formData.append("level", data?.level);
//       formData.append("createdBy", data?.createdBy);
//       formData.append("thumbnail", data?.thumbnail);
//       // formData.append("courseCoverImg", data?.courseCoverImg);

//       const res = await axios.post("http://localhost:5000/api/v1/course", formData);

//       toast.promise(res, {
//         loading: "Creating the course...",
//         success: "Course created successfully",
//         error: "Failed to create course",
//       });

//       const response = await res;
//       return response.data;
//     } catch (error) {
//       toast.error(error?.response?.data?.message);
//     }
//   }
// );

// // function to delete the course
// export const deleteCourse = createAsyncThunk("/course/delete-course", async (id) => {
//   try {
//     // console.log(id);
//     const res = await axios.delete(`http://localhost:5000/api/v1/course/${id}`);

//     // console.log(res);

//     toast.promise(res, {
//       loading: "Deleting the course...",
//       success: "Courses deleted successfully",
//       error: "Failed to delete course",
//     });

//     const response = await res;

//     return response.data;
//   } catch (error) {
//     toast.error(error?.response?.data?.message);
//   }
// });

// // function to update the course details
// export const updateCourse = createAsyncThunk("/course/update-course", async (data) => {
//   try {
//     // creating the form data from user data
//     const formData = new FormData();
//     formData.append("title", data.title);
//     formData.append("category", data.category);
//     formData.append("createdBy", data.createdBy);
//     formData.append("description", data.description);
//     // backend is not allowing change of thumbnail
//     // if (data.thumbnail) {
//     //   formData.append("thumbnail", data.thumbnail);
//     // }

//     const res = await axios.put(`http://localhost:5000/api/v1/course/${data.id}`, {
//       title: data.title,
//       category: data.category,
//       createdBy: data.createdBy,
//       description: data.description,
//     });

//     toast.promise(res, {
//       loading: "Updating the course...",
//       success: "Course updated successfully",
//       error: "Failed to update course",
//     });

//     const response = await res;
//     return response.data;
//   } catch (error) {
//     console.log(error);
//     toast.error(error?.response?.data?.message);
//   }
// });

// const courseSlice = createSlice({
//   name: "course",
//   initialState,
//   reducers: {},
//   extraReducers: (builder) => {
//     builder.addCase(getAllCourses.fulfilled, (state, action) => {
//       if (action.payload) {
//         state.coursesData = [...action.payload];
//       }
//     });
//   },
// });

// export const {} = courseSlice.actions;
// export default courseSlice.reducer;


//---------------------------------------------------------------------


import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";

const API_BASE_URL = "http://localhost:5000/api/v1/course"; // Update with your API URL

// // sangam

export async function mediaUploadService(formData, onProgressCallback) {
  const { data } = await axios.post("http://localhost:5000/api/v1/media/upload", formData, {
    onUploadProgress: (progressEvent) => {
      const percentCompleted = Math.round(
        (progressEvent.loaded * 100) / progressEvent.total
      );
      onProgressCallback(percentCompleted);
    },
  });
  return data;
}


export async function mediaDeleteService(id) {
  const { data } = await axios.delete(`http://localhost:5000/api/v1/media/delete/${id}`);
  return data;
}


export async function mediaBulkUploadService(formData, onProgressCallback) {
  const { data } = await axios.post("http://localhost:5000/api/v1/media/bulk-upload", formData, {
    onUploadProgress: (progressEvent) => {
      const percentCompleted = Math.round(
        (progressEvent.loaded * 100) / progressEvent.total
      );
      onProgressCallback(percentCompleted);
    },
  });
  return data;
}

// 1️⃣ Create Course
export const createCourse = createAsyncThunk(
  "courses/createCourse",
  async (courseData, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${API_BASE_URL}/create`, courseData, {
        headers: { "Content-Type": "multipart/form-data" }, // For file uploads
      });
      // toast.success("Course created successfully!");
      return response.data;
    } catch (error) {
      // toast.error(error.response?.data?.message || "Failed to create course");
      return rejectWithValue(error.response?.data);
    }
  }
);

// 2️⃣ Fetch All Courses
export const getAllCourses = createAsyncThunk(
  "courses/fetchCourses",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(API_BASE_URL);
      return response.data;
    } catch (error) {
      toast.error("Failed to fetch courses");
      return rejectWithValue(error.response?.data);
    }
  }
);

// 3️⃣ Fetch Single Course by ID
export const getCourseById = createAsyncThunk(
  "courses/fetchCourseById",
  async (courseId, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${API_BASE_URL}/${courseId}`);
      // console.log("getCourseByID: ", response.data);
      return response.data;
    } catch (error) {
      toast.error("Failed to fetch course details");
      return rejectWithValue(error.response?.data);
    }
  }
);

// 4️⃣ Update Course
export const updateCourse = createAsyncThunk(
  "courses/updateCourse",
  async ({ courseId, courseData }, { rejectWithValue }) => {
    try {
  
      const response = await axios.put(`${API_BASE_URL}/${courseId}`, courseData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      toast.success("Course updated successfully!");
      // console.log("res", response?.data);
      return response.data;
    } catch (error) {
      toast.error("Failed to update course");
      return rejectWithValue(error.response?.data);
    }
  }
);

// 5️⃣ Delete Course
export const deleteCourse = createAsyncThunk(
  "courses/deleteCourse",
  async (courseId, { rejectWithValue }) => {
    try {
      await axios.delete(`${API_BASE_URL}/${courseId}`);
      toast.success("Course deleted successfully!");
      return courseId;
    } catch (error) {
      toast.error("Failed to delete course");
      return rejectWithValue(error.response?.data);
    }
  }
);

const courseSlice = createSlice({
  name: "courses",
  initialState: {
    courses: [],
    course: null,
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createCourse.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createCourse.fulfilled, (state, action) => {
        state.isLoading = false;
        state.courses.push(action.payload);
      })
      .addCase(createCourse.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(getAllCourses.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllCourses.fulfilled, (state, action) => {
        state.isLoading = false;
        state.courses = action.payload;
      })
      .addCase(getAllCourses.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(getCourseById.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getCourseById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.course = action.payload;
      })
      .addCase(getCourseById.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(updateCourse.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateCourse.fulfilled, (state, action) => {
        state.isLoading = false;
        state.course = action.payload;
      })
      .addCase(updateCourse.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(deleteCourse.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteCourse.fulfilled, (state, action) => {
        state.isLoading = false;
        state.courses = state.courses.filter(course => course._id !== action.payload);
      })
      .addCase(deleteCourse.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  }
});

export default courseSlice.reducer;

