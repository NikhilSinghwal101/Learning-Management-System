import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import axios from "axios";

const initialState = {
  lectures: [],
};

// function to get all the lectures
// export const getCourseLecture = createAsyncThunk(
//   "/course/lecture/get",
//   async (courseId) => {
//     try {
//       const res = await axios.get(
//         `http://localhost:5000/api/v1/course/${courseId}`
//       );

//     //   console.log("lecture get res: ", res);

//       toast.success("Lectures fetched successfully");

//       const response = await res;
//       return response.data;
//     } catch (error) {
//       toast.error(error?.response?.data?.message);
//     }
//   }
// );

export const getCourseLecture = createAsyncThunk(
  "course/lecture/get", // Action type
  async (courseId, { rejectWithValue }) => {
    try {
      const res = await axios.get(
        `http://localhost:5000/api/v1/course/${courseId}/lectures`
      );

      toast.success("Lectures fetched successfully");
      return res?.data?.lectures; // Assuming the API response contains lectures array
    } catch (error) {
      toast.error(error?.response?.data?.message || "Failed to fetch lectures");
      return rejectWithValue(error?.response?.data?.message || "Unknown error");
    }
  }
);

// function to add new lecture to the course
// export const addCourseLecture = createAsyncThunk(
//   "/course/lecture/add",
//   async (data) => {
//     const formData = new FormData();
//     formData.append("lecture", data.lecture);
//     formData.append("title", data.title);
//     formData.append("description", data.description);

//     // console.log(data);

//     try {
//       const res = await axios.post(`http://localhost:5000/api/v1/course/add-lecture/${data.id}`, formData , {
//         headers: { "Content-Type": "multipart/form-data" }, // For file uploads
//       });

//       toast.success("Lecture added successfully");

//       console.log("res", res);

//       const response = await res;

//       return response.data;
//     } catch (error) {
//       toast.error(error?.response?.data?.message);
//     }
//   }
// );

export const addCourseLecture = createAsyncThunk(
  "/course/lecture/add",
  async (data, { rejectWithValue }) => {
    try {
      const formData = new FormData();
      formData.append("lecture", data.lecture); // Ensure this is a File
      formData.append("title", data.title);
      formData.append("description", data.description);

      // console.log("Uploading lecture:", data);

      //   for (let pair of formData.entries()) {
      //     console.log(pair[0], pair[1]); // Logs key-value pairs
      //   }

      // console.log(`http://localhost:5000/api/v1/course/add-lecture/${data.id}`)

      const res = await axios.post(
        `http://localhost:5000/api/v1/course/${data.id}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Accept: "application/json",
          },
        }
      );

      console.log("API Response:", res.data);

      toast.success("Lecture added successfully");

      return res.data; // Return correct data structure
    } catch (error) {
      console.error("Lecture Upload Error:", error?.response?.data?.message);
      toast.error(error?.response?.data?.message || "Failed to add lecture");
      return rejectWithValue(error?.response?.data?.message);
    }
  }
);

// function to delete the lecture from the course
// export const deleteCourseLecture = createAsyncThunk(
//   "/course/lecture/delete",
//   async (data) => {
//     console.log(data);
//     try {
//       const res = await axios.delete(
//         `http://localhost:5000/api/v1/course/?courseId=${data.courseId}&lectureId=${data.lectureId}`
//       );

//       toast.success("Lecture deleted successfully");

//       const response = await res;
//       return response.data;
//     } catch (error) {
//       toast.error(error?.response?.data?.message);
//     }
//   }
// );

export const deleteCourseLecture = createAsyncThunk(
  "/course/lecture/delete",
  async (data, { rejectWithValue }) => {
    try {
      // Make DELETE request to remove the lecture
    //   const res = await axios.delete(
    //     `http://localhost:5000/api/v1/course/remove-lecture`,
    //     {
    //       params: {
    //         courseId,
    //         lectureId,
    //       },
    //     }
    //   );   // OR
      const res = await axios.delete(
        `http://localhost:5000/api/v1/course/remove-lecture?courseId=${data.courseId}&lectureId=${data.lectureId}`
      );

      toast.success("Lecture deleted successfully");

      return res.data; // Returning the data from the response
    } catch (error) {
      // Handling errors
      const errorMessage =
        error?.response?.data?.message || "Something went wrong!";
      toast.error(errorMessage);
      return rejectWithValue(errorMessage); // Using rejectWithValue to pass error message to the action
    }
  }
);

const lectureSlice = createSlice({
  name: "lecture",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCourseLecture.fulfilled, (state, action) => {
        state.lectures = action?.payload?.lectures;
      })
      .addCase(addCourseLecture.fulfilled, (state, action) => {
        state.lectures = action?.payload?.course?.lectures;
      });
  },
});

export const {} = lectureSlice.actions;
export default lectureSlice.reducer;
