// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import { toast } from "react-toastify";
// import axios from "axios";

// const initialState = {
//   key: "",
//   subscription_id: "",
//   isPaymentVerified: false,
//   allPayments: {},
//   finalMonths: {},
//   monthlySalesRecord: [],
//   loading: false,
//   error: null,
// };

// // function to get the api key
// export const getRazorPayId = createAsyncThunk("/razorPayId/get", async () => {
//   try {
//     const res = await axios.get(
//       "http://localhost:5000/api/v1/payments/razorpay-key"
//     );
//     return res?.data;
//   } catch (error) {
//     toast.error("Failed to load data");
//     throw error;
//   }
// });

// // function to purchase the course bundle
// export const purchaseCourseBundle = createAsyncThunk(
//   "/purchaseCourse",
//   async (id) => {
//     try {
//       const res = await axios.post(
//         `http://localhost:5000/api/v1/payments/subscribe/${id}`
//       );
//       return res?.data;
//     } catch (error) {
//       toast.error(error?.response?.data?.message);
//       throw error;
//     }
//   }
// );

// // function to verify the user payment
// // export const verifyUserPayment = createAsyncThunk(
// //   "/verifyPayment",
// //   async ({ paymentDetail, userId }) => {
// //     try {
// //       const res = await axios.post(
// //         `http://localhost:5000/api/v1/payments/verify/${userId}`,
// //         {
// //           razorpay_payment_id: paymentDetail.razorpay_payment_id,
// //           razorpay_subscription_id: paymentDetail.razorpay_subscription_id,
// //           razorpay_signature: paymentDetail.razorpay_signature,
// //         }
// //       );
// //       console.log("verifyPayment: ", res);
// //       return res?.data;
// //     } catch (error) {
// //       // console.log(error);
// //       toast.error(error?.response?.data?.message);
// //       throw error;
// //     }
// //   }
// // );

// export const verifyUserPayment = createAsyncThunk(
//   "/verifyPayment",
//   async ({ paymentDetails, userId, courseId }, { rejectWithValue }) => {
//     try {
//       const res = await axios.post(
//         `http://localhost:5000/api/v1/payments/verify/${userId}/${courseId}`,
//         {
//           razorpay_payment_id: paymentDetails.razorpay_payment_id,
//           razorpay_subscription_id: paymentDetails.razorpay_subscription_id,
//           razorpay_signature: paymentDetails.razorpay_signature,
//         }
//       );
//       // console.log("verifyPayment: ", res);
//       return res?.data;
//     } catch (error) {
//       // toast.error(error?.response?.data?.message || "Payment verification failed");
//       return rejectWithValue(error?.response?.data);
//     }
//   }
// );

// // function to get all the payment record
// export const getPaymentRecord = createAsyncThunk("paymentrecord", async (_, thunkAPI) => {
//   try {
//     const response = await toast.promise(
//       axios.get("http://localhost:5000/api/v1/payments?count=100"),
//       {
//         pending: "Getting the payments record...",
//         success: (res) => res?.data?.message || "Payment records retrieved",
//         error: "Failed to get payment records",
//       }
//     );

//     return response.data;
//   } catch (error) {
//     toast.error(error?.response?.data?.message || "Operation failed");
//     return thunkAPI.rejectWithValue(error?.response?.data);
//   }
// });

// // function to cancel the course bundle subscription
// // export const cancelCourseBundle = createAsyncThunk(
// //   "/cancelCourse",
// //   async () => {
// //     try {
// //       const res = await axios.post(
// //         "http://localhost:5000/api/v1/payments/unsubscribe"
// //       );
// //       toast.promise(res, {
// //         loading: "Unsubscribing the bundle...",
// //         success: "Bundle unsubscibed successfully",
// //         error: "Failed to unsubscibe the bundle",
// //       });
// //       console.log(res);
// //       const response = await res;
// //       return response.data;
// //     } catch (error) {
// //       toast.error(error?.response?.data?.message);
// //       // console.log(error);
// //       throw error;
// //     }
// //   }
// // );

// export const cancelCourseBundle = createAsyncThunk(
//   "/cancelCourse",
//   async (_, thunkAPI) => {
//     try {
//       const response = await toast.promise(
//         axios.post("http://localhost:5000/api/v1/payments/unsubscribe"),
//         {
//           pending: "Unsubscribing the bundle...",
//           success: "Bundle unsubscribed successfully",
//           error: "Failed to unsubscribe the bundle",
//         }
//       );

//       return response.data;
//     } catch (error) {
//       toast.error(error?.response?.data?.message || "Operation failed");
//       return thunkAPI.rejectWithValue(error?.response?.data);
//     }
//   }
// );

// const razorpaySlice = createSlice({
//   name: "razorpay",
//   initialState,
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       // .addCase(getRazorPayId.rejected, () => {
//       //   toast.error("Failed to get razor pay id");
//       // })
//       // .addCase(getRazorPayId.fulfilled, (state, action) => {
//       //   state.key = action?.payload?.key;
//       // })

//       .addCase(getRazorPayId.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//       })
//       .addCase(getRazorPayId.fulfilled, (state, action) => {
//         state.key = action.payload.key;
//         state.loading = false;
//       })
//       .addCase(getRazorPayId.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.error.message;
//       })

//       .addCase(purchaseCourseBundle.fulfilled, (state, action) => {
//         state.subscription_id = action?.payload?.subscription_id;
//       })
//       .addCase(verifyUserPayment.fulfilled, (state, action) => {
//         toast.success(action?.payload?.message);
//         state.isPaymentVerified = action?.payload?.success;
//       })
//       .addCase(verifyUserPayment.rejected, (state, action) => {
//         toast.error(action?.payload?.message);
//         state.isPaymentVerified = action?.payload?.success;
//       })
//       .addCase(getPaymentRecord.fulfilled, (state, action) => {
//         state.allPayments = action?.payload?.allPayments;
//         state.finalMonths = action?.payload?.finalMonths;
//         state.monthlySalesRecord = action?.payload?.monthlySalesRecord;
//       });
//   },
// });

// export const {} = razorpaySlice.actions;
// export default razorpaySlice.reducer;

//--------------------------------------------------------------

//  Life-time access to courses ( Not subscription based ) -> 1 year access

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import axios from "axios";

const initialState = {
  key: "",
  order_id: "",
  isPaymentVerified: false,
  // allPayments: {}, // For subscription based
  allPayments: [], // For life-time access based
  finalMonths: {},
  monthlySalesRecord: [],
  loading: false,
  error: null,
};

// Get Razorpay API Key
export const getRazorPayId = createAsyncThunk("/razorPayId/get", async () => {
  try {
    const res = await axios.get(
      "http://localhost:5000/api/v1/payments/razorpay-key"
    );
    return res?.data;
  } catch (error) {
    toast.error("Failed to load Razorpay key");
    throw error;
  }
});

// Create Razorpay Order for a specific course
export const createCourseOrder = createAsyncThunk(
  "razorpay/createCourseOrder",
  async ({ userId, courseId }, { rejectWithValue }) => {
    try {
      const res = await axios.post(
        `http://localhost:5000/api/v1/payments/order/${userId}/${courseId}`
      );
      return res.data; // Expecting { order: {...} }
    } catch (error) {
      toast.error(error?.response?.data?.message || "Failed to create order");
      return rejectWithValue(error?.response?.data);
    }
  }
);

// Verify Razorpay Payment for course
export const verifyUserPayment = createAsyncThunk(
  "/verifyPayment",
  async ({ paymentDetails, userId, courseId }, { rejectWithValue }) => {
    try {
      const res = await axios.post(
        `http://localhost:5000/api/v1/payments/verify/${userId}/${courseId}`,
        {
          razorpay_payment_id: paymentDetails.razorpay_payment_id,
          razorpay_order_id: paymentDetails.razorpay_order_id,
          razorpay_signature: paymentDetails.razorpay_signature,
        }
      );
      return res?.data;
    } catch (error) {
      return rejectWithValue(error?.response?.data);
    }
  }
);

// Admin: Get all payment records
export const getPaymentRecord = createAsyncThunk(
  "paymentrecord",
  async (_, thunkAPI) => {
    try {
      const response = await toast.promise(
        axios.get("http://localhost:5000/api/v1/payments"),
        {
          pending: "Getting the payments record...",
          success: (res) => res?.data?.message || "Payment records retrieved",
          error: "Failed to get payment records",
        }
      );
      return response.data;
    } catch (error) {
      console.error("Payment fetch error:", error?.response?.data || error.message);
      toast.error(error?.response?.data?.message || "Operation failed");
      return thunkAPI.rejectWithValue(error?.response?.data);
    }
  }
);

const razorpaySlice = createSlice({
  name: "razorpay",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getRazorPayId.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getRazorPayId.fulfilled, (state, action) => {
        state.key = action.payload.key;
        state.loading = false;
      })
      .addCase(getRazorPayId.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })

      .addCase(createCourseOrder.pending, (state) => {
        state.loading = true;
      })
      .addCase(createCourseOrder.fulfilled, (state, action) => {
        state.loading = false;
        state.order_id = action.payload.order?.id || "";
      })
      .addCase(createCourseOrder.rejected, (state, action) => {
        state.loading = false;
        state.error =
          action.payload?.message || "Failed to create course order";
      })

      .addCase(verifyUserPayment.fulfilled, (state, action) => {
        toast.success(action?.payload?.message);
        state.isPaymentVerified = action?.payload?.success;
      })
      .addCase(verifyUserPayment.rejected, (state, action) => {
        toast.error(action?.payload?.message || "Payment verification failed");
        state.isPaymentVerified = false;
      })
      .addCase(getPaymentRecord.fulfilled, (state, action) => {
        state.allPayments = action?.payload?.allPayments;
        state.finalMonths = action?.payload?.finalMonths;
        state.monthlySalesRecord = action?.payload?.monthlySalesRecord;
      });
  },
});

export default razorpaySlice.reducer;
