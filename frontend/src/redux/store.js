import { configureStore } from '@reduxjs/toolkit';
import authSliceReducer from './features/authSlice';
import blogSliceReducer from './features/blogSlice';
import courseSliceReducer from './features/courseSlice';
import lectureSliceReducer from './features/lectureSlice';
import razorpaySliceReducer from './features/razorpaySlice';
import statSliceReducer from './features/statSlice';

const store = configureStore({
    reducer: {
        auth: authSliceReducer,
        blogs: blogSliceReducer,
        courses: courseSliceReducer,
        lecture: lectureSliceReducer,
        razorpay: razorpaySliceReducer,
        stat: statSliceReducer,
    }
})

export default store;