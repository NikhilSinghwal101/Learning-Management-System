import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";

// const initialState = {
//   isAuthenticated: localStorage.getItem("isAuthenticated") || false,
//   // data: JSON.parse(localStorage.getItem("data")) || {},
//   data: {},
//   role: localStorage.getItem("role") || "",
//   // users: JSON.parse(localStorage.getItem("user")) || [],
//   isLoading: false,
// };

const initialState = {
  isAuthenticated: localStorage.getItem("isAuthenticated") === "true",
  data: JSON.parse(localStorage.getItem("data")) || {},
  role: localStorage.getItem("role") || "",
  isLoading: false,
};

// console.log("token", document.cookie);

// localStorage.removeItem("data");

// registerUser and login methods written in the Signup.jsx and Login.jsx components respectively.

// export const getUserData = createAsyncThunk("/user/details", async () => {
//   try {
//     const res = await axios.get(`http://localhost:5000/api/v1/user/me`, {
//       withCredentials: true,
//     }); // withCredentials is necessary
//     toast.success(res?.data?.message);
//     return res?.data;
//   } catch (err) {
//     toast.error(err.message);
//     // console.log(err);
//   }
// });

export const getUserData = createAsyncThunk(
  "/user/details",
  async (_, { rejectWithValue }) => {
    try {
      const res = await axios.get(`http://localhost:5000/api/v1/user/me`, {
        withCredentials: true,
      });
      // toast.success(res?.data?.message);
      return res?.data;
    } catch (err) {
      toast.error(err?.response?.data?.message || "Failed to fetch user data");
      return rejectWithValue(err?.response?.data);
    }
  }
);

export const forgetPassword = createAsyncThunk(
  "auth/forgetPassword",
  async (email) => {
    try {
      let res = await axios.post(
        "http://localhost:5000/api/v1/user/forgot-password",
        { email }
      );

      await toast.promise(res, {
        loading: "Loading...",
        success: (data) => {
          return data?.data?.message;
        },
        error: "Failed to send verification email",
      });

      // getting response resolved here
      // res = await res;
      return res.data;
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  }
);

export const changePassword = createAsyncThunk(
  "/auth/changePassword",
  async (userPassword) => {
    try {
      let res = await axios.post(
        "http://localhost:5000/api/v1/user/change-password",
        userPassword
      );

      await toast.promise(res, {
        loading: "Loading...",
        success: (data) => {
          return data?.data?.message;
        },
        error: "Failed to change password",
      });

      // getting response resolved here
      // res = await res;
      return res.data;
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  }
);

export const updateProfile = createAsyncThunk(
  "/user/update-profile",
  async (data, { rejectWithValue }) => {
    try {
      const toastId = toast.loading("Updating...");

      const res = await axios.put(
        `http://localhost:5000/api/v1/user/update-profile/${data[0]}`,
        data[1]
      );

      toast.update(toastId, {
        render: res?.data?.message || "Profile updated successfully",
        type: "success",
        isLoading: false,
        autoClose: 3000,
        closeOnClick: true,
      });

      return res.data;
    } catch (error) {
      toast.dismiss(); // optional: dismiss all loading toasts
      toast.error(error?.response?.data?.message || "Failed to update profile");
      return rejectWithValue(error?.response?.data);
    }
  }
);

export const resetPassword = createAsyncThunk("/user/reset", async (data) => {
  try {
    let res = await axios.post(
      `http://localhost:5000/api/v1/user/reset-password/${data.resetToken}`,
      {
        password: data.password,
      }
    );

    toast.promise(res, {
      loading: "Resetting...",
      success: (data) => {
        return data?.data?.message;
      },
      error: "Failed to reset password",
    });
    // getting response resolved here
    // res = await res;
    return res.data;
  } catch (error) {
    toast.error(error?.response?.data?.message);
  }
});

export const logoutUser = createAsyncThunk("/user/logout", async () => {
  try {
    const res = await axios.post(
      `http://localhost:5000/api/v1/user/logout`,
      {},
      { withCredentials: true }
    ); // {} is necessary
    toast.success(res?.data?.message);
    return res?.data;
  } catch (err) {
    toast.error(err.message);
    // console.log(err);
  }
});

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    // login: (state, action) => {
    //   // localStorage.setItem("user", JSON.stringify(action?.payload));
    //   localStorage.setItem("data", JSON.stringify(action?.payload?.user));
    //   // if(action?.payload?.guestLogin) {
    //   //     state.isAuthenticated = false;
    //   //     localStorage.setItem("isAuthenticated", false);
    //   // } else {
    //   //     state.isAuthenticated = true;
    //   //     localStorage.setItem("isAuthenticated", true);
    //   // }
    //   state.isAuthenticated = true;
    //   localStorage.setItem("isAuthenticated", true);
    //   // state.users = action.payload;
    //   state.data = action?.payload;
    // },

    login: (state, action) => {
      const user = action?.payload?.user;
      state.data = user;
      state.isAuthenticated = true;
      state.role = user?.role || "";

      localStorage.setItem("isAuthenticated", true);
      localStorage.setItem("data", JSON.stringify(user));
      localStorage.setItem("role", user?.role || "");
    },

    // logout: (state) => {
    //   localStorage.removeItem("isAuthenticated");
    //   localStorage.removeItem("data");
    //   // localStorage.removeItem("user");
    //   state.isAuthenticated = false;
    //   // state.users = [];
    //   state.data = {};
    // },

    logout: (state) => {
      localStorage.removeItem("isAuthenticated");
      localStorage.removeItem("data");
      localStorage.removeItem("role");

      state.isAuthenticated = false;
      state.data = {};
      state.role = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUserData.pending, (state) => {
        // state.isAuthenticated = false;
        state.isLoading = true;
      })
      .addCase(getUserData.fulfilled, (state, action) => {
        state.isAuthenticated = true;
        localStorage.setItem("isAuthenticated", true);
        localStorage.setItem("data", JSON.stringify(action?.payload?.user));
        state.data = action.payload;
        state.role = action.payload?.user?.role;
        state.isLoading = false;
      })
      .addCase(getUserData.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(logoutUser.pending, (state) => {
        state.isAuthenticated = false;
      })
      .addCase(logoutUser.fulfilled, (state) => {
        localStorage.removeItem("isAuthenticated");
        localStorage.removeItem("data");
        // localStorage.removeItem("user");
        state.isAuthenticated = false;
        // state.users = [];
        state.data = {};
      });
    // .addCase(logoutUser.rejected, (state) => {
    //     state.isAuthenticated = true;
    // })
  },
});

export const { login, signup, logout } = authSlice.actions;
export default authSlice.reducer;
