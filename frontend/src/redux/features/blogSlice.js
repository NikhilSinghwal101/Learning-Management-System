import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";

const initialState = {
  isLoading: false,
  blogs: [],
  singleBlog: [],
  prevBlog: null,
  nextBlog: null,
  // comments: [],
  like: [],
  dislike: [],
};

// export const createBlog = createAsyncThunk("/blog/create", async (blogData) => {
//   // console.log("blogData: ", blogData.title)

//   const formData = new FormData();
//   formData.append("title", blogData.title);
//   formData.append("desc", blogData.desc);
//   formData.append("tag", blogData.tag);
//   formData.append("coverImg", blogData.blogCoverImg);

//   formData.append("post", blogData.post);
//   formData.append("like", blogData.like);
//   formData.append("dislike", blogData.dislike);
//   formData.append("reply", blogData.reply);

//   // console.log("formData: ", formData);

//   try {
//     const res = await axios.post(
//       `http://localhost:5000/api/v1/blog/create`,
//       formData,
//       {
//         withCredentials: true,
//       }
//     );
//     toast.success(res?.data?.message);
//     // alert(res?.data?.message);
//     return res?.data;
//   } catch (error) {
//     toast.error(error?.message);
//     // alert(error.message);
//   }
// });

// export const createBlog = createAsyncThunk(
//   "blog/create",
//   async (formData, { rejectWithValue }) => {
//     try {
//       const response = await axios.post(
//         "http://localhost:5000/api/v1/blog/create",
//         formData,
//         {
//           headers: {
//             "Content-Type": "multipart/form-data",
//           },
//         }
//       );
//       return response.data;
//     } catch (err) {
//       return rejectWithValue(err.response.data);
//     }
//   }
// );

export const createBlog = createAsyncThunk(
  "blog/create",
  async (formData, { rejectWithValue }) => {
    let toastId;

    try {
      toastId = toast.loading("Blog is creating...");

      const response = await axios.post(
        "http://localhost:5000/api/v1/blog/create",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          }
        }
      );

      toast.update(toastId, {
        render: "Blog created successfully!",
        type: "success",
        isLoading: false,
        autoClose: 3000,
      });

      return response.data;
    } catch (err) {
      toast.update(toastId, {
        render: err.response?.data?.message || "Blog creation failed!",
        type: "error",
        isLoading: false,
        autoClose: 3000,
      });
      return rejectWithValue(err.response?.data || err.message);
    }
  }
);


// export const getBlogsData = createAsyncThunk("/blog/getData", async () => {
//   try {
//     const res = await axios.get(`http://localhost:5000/api/v1/blog/getData`, {
//       withCredentials: true,
//     });
//     toast.success(res?.data?.message);
//     return res?.data;
//   } catch (error) {
//     toast.error(error?.message);
//     // alert(error.message);
//   }
// });

export const getBlogsData = createAsyncThunk(
  "/blog/getData",
  async (_, { rejectWithValue }) => {
    try {
      const res = await axios.get("http://localhost:5000/api/v1/blog/getData", {
        withCredentials: true,
      });

      return res.data;
    } catch (error) {
      // Pass error message to the component
      const errorMessage = error?.response?.data?.message || error.message;
      return rejectWithValue(errorMessage);
    }
  }
);

export const getSingleBlogData = createAsyncThunk(
  "/blog/getSingleData",
  async (id) => {
    try {
      const res = await axios.get(
        `http://localhost:5000/api/v1/blog/getSingleBlogData/${id}`,
        { withCredentials: true }
      );
      toast.success(res?.data?.message);
      return res?.data;
    } catch (error) {
      toast.error(error?.message);
    }
  }
);


export const fetchPrevBlog = createAsyncThunk(
  "blog/fetchPrevBlog",
  async (currentBlogId, { rejectWithValue }) => {
    try {
      const response = await axios.get(`http://localhost:5000/api/v1/blog/${currentBlogId}/prev`);
      return response.data; 
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);


export const fetchNextBlog = createAsyncThunk(
  "blog/fetchNextBlog",
  async (currentBlogId, { rejectWithValue }) => {
    try {
      const response = await axios.get(`http://localhost:5000/api/v1/blog/${currentBlogId}/next`);
      return response.data; 
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);


export const postComment = createAsyncThunk(
  "/blog/post/comment",
  async ({ id, commentData }) => {
    try {
      const res = await axios.post(
        `http://localhost:5000/api/v1/blog/postComment/${id}`,
        commentData,
        { withCredentials: true }
      );
      toast.success(res?.data?.message);
      return res?.data;
    } catch (err) {
      toast.error(err.response.data.message);
    }
  }
);

// export const getComment = createAsyncThunk('/blog/get/comment', async (id) => {
//     try{
//         const res = await axios.get(`http://localhost:5000/api/v1/blog/getComment/${id}`, { withCredentials: true });
//         toast.success(res?.data?.message);
//         return res?.data;
//     } catch(err) {
//         toast.error(err.response.data.message);
//     }
// })

export const likeComment = createAsyncThunk(
  "/blog/comment/like",
  async (id) => {
    try {
      const res = await axios.post(
        `http://localhost:5000/api/v1/blog/like/${id}`,
        {},
        { withCredentials: true }
      );
      return res?.data;
    } catch (err) {
      toast.error(err.response.data.message);
    }
  }
);

export const dislikeComment = createAsyncThunk(
  "/blog/comment/dislike",
  async (id) => {
    try {
      const res = await axios.post(
        `http://localhost:5000/api/v1/blog/dislike/${id}`,
        {},
        { withCredentials: true }
      );
      return res?.data;
    } catch (err) {
      toast.error(err.response.data.message);
    }
  }
);

const blogSlice = createSlice({
  name: "blog",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createBlog.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createBlog.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(createBlog.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(getBlogsData.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getBlogsData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.blogs = action?.payload?.blogs;
      })
      .addCase(getBlogsData.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(getSingleBlogData.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getSingleBlogData.fulfilled, (state, action) => {
        state.singleBlog = action.payload?.singleBlogData; // singleBlogData comes from blog.controller.js
        state.isLoading = false;
      })
      .addCase(getSingleBlogData.rejected, (state) => {
        state.isLoading = false;
      })
       .addCase(fetchPrevBlog.fulfilled, (state, action) => {
        state.prevBlog = action.payload;
      })
      .addCase(fetchNextBlog.fulfilled, (state, action) => {
        state.nextBlog = action.payload;
      })
      .addCase(postComment.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(postComment.fulfilled, (state, action) => {
        state.isLoading = false;
        state.singleBlog = action.payload?.singleBlogData;
      })
      .addCase(postComment.rejected, (state) => {
        state.isLoading = false;
      })
      // .addCase(getComment.pending, (state) => {
      //     state.isLoading = true;
      // })
      // .addCase(getComment.fulfilled, (state, action) => {
      //     state.isLoading = false;
      //     state.comments = action.payload?.comments;
      // })
      // .addCase(getComment.rejected, (state) => {
      //     state.isLoading = false;
      // })
      .addCase(likeComment.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(likeComment.fulfilled, (state, action) => {
        state.isLoading = false;
        state.like = action.payload?.post;
      })
      .addCase(likeComment.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(dislikeComment.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(dislikeComment.fulfilled, (state, action) => {
        state.isLoading = false;
        state.dislike = action.payload?.post;
      })
      .addCase(dislikeComment.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export const {} = blogSlice.actions;
export default blogSlice.reducer;
