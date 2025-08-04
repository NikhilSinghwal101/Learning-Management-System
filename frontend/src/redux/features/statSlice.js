// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import { toast } from "react-toastify";
// import axios from "axios";

// const initialState = {
//   allUsersCount: 0,
//   subscribedUsersCount: 0,
// };

// // function to get the stats data from backend
// export const getStatsData = createAsyncThunk("getstat", async (_, thunkAPI) => {
//   try {
//     const response = await toast.promise(
//       axios.get("http://localhost:5000/api/v1/admin/stats/users"),
//       {
//         pending: "Getting the stats...",
//         success: (res) => res?.data?.message || "Stats loaded successfully",
//         error: "Failed to load stats",
//       }
//     );

//     return response.data;
//   } catch (error) {
//     toast.error(error?.response?.data?.message || "Something went wrong");
//     return thunkAPI.rejectWithValue(error?.response?.data);
//   }
// });

// const statSlice = createSlice({
//   name: "stat",
//   initialState,
//   reducers: {},
//   extraReducers: (builder) => {
//     builder.addCase(getStatsData.fulfilled, (state, action) => {
//       state.allUsersCount = action?.payload?.allUsersCount;
//       state.subscribedUsersCount = action?.payload?.subscribedUsersCount;
//     });
//   },
// });

// export const {} = statSlice.actions;
// export default statSlice.reducer;


//----------------------------------------------------------
// Life-time access to courses not subscription based -> 1 year access

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import axios from "axios";

const initialState = {
  allUsersCount: 0,
  purchasedUsersCount: 0,
  loading: false,
  error: null,
};

// Async thunk to get user stats from backend
export const getStatsData = createAsyncThunk("stat/getStats", async (_, thunkAPI) => {
  try {
    const response = await toast.promise(
      axios.get("http://localhost:5000/api/v1/admin/stats/users"),
      {
        pending: "Getting the stats...",
        success: (res) => res?.data?.message || "Stats loaded successfully",
        error: "Failed to load stats",
      }
    );
    return response.data;
  } catch (error) {
    toast.error(error?.response?.data?.message || "Something went wrong");
    return thunkAPI.rejectWithValue(error?.response?.data);
  }
});

const statSlice = createSlice({
  name: "stat",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getStatsData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getStatsData.fulfilled, (state, action) => {
        state.loading = false;
        state.allUsersCount = action?.payload?.allUsersCount;
        state.purchasedUsersCount = action?.payload?.purchasedUsersCount;
      })
      .addCase(getStatsData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Failed to fetch stats";
      });
  },
});

export default statSlice.reducer;



