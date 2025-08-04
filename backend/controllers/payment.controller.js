// import crypto from "crypto";

// import asyncHandler from "../middlewares/asyncHandler.middleware.js";
// import User from "../models/user.model.js";
// import AppError from "../utils/appError.js";
// import { razorpay } from "../server.js";
// import Payment from "../models/Payment.model.js";
// import Course from "../models/course.model.js";

// /**
//  * @ACTIVATE_SUBSCRIPTION
//  * @ROUTE @POST {{URL}}/api/v1/payments/subscribe
//  * @ACCESS Private (Logged in user only)
//  */

// export const buySubscription = asyncHandler(async (req, res, next) => {
//   const { id } = req.params;

//   // console.log("id: ", id);

//   // Find user
//   const user = await User.findById(id);
//   if (!user) {
//     return next(new AppError("Unauthorized, please login"));
//   }

//   // Restrict Admins
//   if (user.role === "ADMIN") {
//     return next(new AppError("Admin cannot purchase a subscription", 400));
//   }

//   let subscription;

//   try {
//     subscription = await razorpay.subscriptions.create({
//       plan_id: process.env.RAZORPAY_PLAN_ID,
//       customer_notify: 1,
//       total_count: 12,
//     });

//     if (!subscription || !subscription.id || !subscription.status) {
//       throw new Error("Invalid subscription response from Razorpay");
//     }

//     // Assign subscription details to user
//     user.subscription = {
//       id: subscription.id,
//       status: subscription.status,
//     };

//     // console.log("user in buySubscription: ", user);

//     await user.save();

//     return res.status(200).json({
//       success: true,
//       message: "Subscribed successfully",
//       subscription_id: subscription.id,
//     });
//   } catch (error) {
//     console.error("Subscription error:", error);

//     return res.status(500).json({
//       success: false,
//       message: error.message || "Failed to create subscription",
//     });
//   }
// });

// // export const buySubscription = asyncHandler(async (req, res, next) => {
// //   // Extracting ID from request obj
// //   // const { id } = req.user;
// //   const { id } = req.params;

// //   console.log("id: ", id);

// //   // Finding the user based on the ID
// //   const user = await User.findById(id);

// //   // console.log(user);

// //   if (!user) {
// //     return next(new AppError('Unauthorized, please login'));
// //   }

// //   // Checking the user role
// //   if (user.role === 'ADMIN') {
// //     return next(new AppError('Admin cannot purchase a subscription', 400));
// //   }

// //   // Creating a subscription using razorpay that we imported from the server
// //   const subscription = await razorpay.subscriptions.create({
// //     plan_id: process.env.RAZORPAY_PLAN_ID, // The unique plan ID
// //     customer_notify: 1, // 1 means razorpay will handle notifying the customer, 0 means we will not notify the customer
// //     total_count: 12, // 12 means it will charge every month for a 1-year sub.
// //   });

// //   console.log(subscription);

// //   // Adding the ID and the status to the user account
// //   user.subscription.id = subscription.id;
// //   user.subscription.status = subscription.status;

// //   // Saving the user object

// //   console.log(user);

// //   await user.save();

// //   res.status(200).json({
// //     success: true,
// //     message: 'subscribed successfully',
// //     subscription_id: subscription.id,
// //   });
// // });

// /**
//  * @VERIFY_SUBSCRIPTION
//  * @ROUTE @POST {{URL}}/api/v1/payments/verify
//  * @ACCESS Private (Logged in user only)
//  */
// export const verifySubscription = asyncHandler(async (req, res, next) => {
//   // const { id } = req.user;
//   const { userId, courseId } = req.params;
//   const { razorpay_payment_id, razorpay_subscription_id, razorpay_signature } =
//     req.body;

//   // Finding the user
//   const user = await User.findById(userId);
//   const course = await Course.findById(courseId);

//   if (!user) {
//     return next(new AppError("Unauthorized, please login"));
//   }

//   // Getting the subscription ID from the user object
//   const subscriptionId = user.subscription.id;

//   // Generating a signature with SHA256 for verification purposes
//   // Here the subscriptionId should be the one which we saved in the DB
//   // razorpay_payment_id is from the frontend and there should be a '|' character between this and subscriptionId
//   // At the end convert it to Hex value
//   const generatedSignature = crypto
//     .createHmac("sha256", process.env.RAZORPAY_SECRET)
//     .update(`${razorpay_payment_id}|${subscriptionId}`)
//     .digest("hex");

//   console.log("GS -> ", generatedSignature);
//   console.log("RzS -> ", razorpay_signature);

//   // Check if generated signature and signature received from the frontend is the same or not
//   if (generatedSignature !== razorpay_signature) {
//     return next(new AppError("Payment not verified, please try again.", 400));
//   }

//   // If they match create payment and store it in the DB
//   const payment = await Payment.create({
//     razorpay_payment_id,
//     razorpay_subscription_id,
//     razorpay_signature,
//   });

//   user.purchasedCourses.push({
//     course: course._id,
//     payment: payment._id,
//   });

//   // Update the user subscription status to active (This will be created before this)
//   user.subscription.status = "active";

//   // console.log(user.subscription.status);

//   // Save the user in the DB with any changes
//   await user.save();

//   res.status(200).json({
//     success: true,
//     message: "Payment verified successfully",
//   });
// });

// /**
//  * @CANCEL_SUBSCRIPTION
//  * @ROUTE @POST {{URL}}/api/v1/payments/unsubscribe
//  * @ACCESS Private (Logged in user only)
//  */
// export const cancelSubscription = asyncHandler(async (req, res, next) => {
//   const { id } = req.user;

//   console.log("Id -> ", id);

//   // Finding the user
//   const user = await User.findById(id);

//   if (!user) {
//     return next(new AppError("Unauthorized, please login"));
//   }

//   console.log("Before -> ", user);

//   // Checking the user role
//   if (user.role === "ADMIN") {
//     return next(
//       new AppError("Admin does not need to cannot cancel subscription", 400)
//     );
//   }

//   // Finding subscription ID from subscription
//   const subscriptionId = user.subscription.id;

//   console.log("SubId -> ", subscriptionId);

//   // Creating a subscription using razorpay that we imported from the server
//   try {
//     const subscription = await razorpay.subscriptions.cancel(
//       subscriptionId // subscription id
//     );

//     // Adding the subscription status to the user account
//     user.subscription.status = subscription.status;

//     console.log("Status -> ", user.subscription.status);

//     // Saving the user object
//     console.log(user);

//     await user.save();
//   } catch (error) {
//     // Returning error if any, and this error is from razorpay so we have statusCode and message built in
//     // return next(new AppError(error.error.description, error.statusCode));
//     return next(new AppError("User"));
//   }

//   // Finding the payment using the subscription ID
//   const payment = await Payment.findOne({
//     razorpay_subscription_id: subscriptionId,
//   });

//   console.log("Payment ->", payment);

//   // Getting the time from the date of successful payment (in milliseconds)
//   const timeSinceSubscribed = Date.now() - payment.createdAt;

//   // console.log(payment.createdAt);
//   // console.log(timeSinceSubscribed);

//   // refund period which in our case is 14 days
//   const refundPeriod = 14 * 24 * 60 * 60 * 1000;

//   // Check if refund period has expired or not
//   if (refundPeriod <= timeSinceSubscribed) {
//     return next(
//       new AppError(
//         "Refund period is over, so there will not be any refunds provided.",
//         400
//       )
//     );
//   }

//   // If refund period is valid then refund the full amount that the user has paid
//   await razorpay.payments.refund(payment.razorpay_payment_id, {
//     speed: "optimum", // This is required
//   });

//   user.subscription.id = undefined; // Remove the subscription ID from user DB
//   user.subscription.status = undefined; // Change the subscription Status in user DB

//   console.log("After ->", user);
//   await user.save();
//   await payment.remove();

//   // Send the response
//   res.status(200).json({
//     success: true,
//     message: "Subscription canceled successfully",
//     user,
//     payment,
//   });
// });

// /**
//  * @GET_RAZORPAY_ID
//  * @ROUTE @POST {{URL}}/api/v1/payments/razorpay-key
//  * @ACCESS Public
//  */
// export const getRazorpayApiKey = asyncHandler(async (_req, res, _next) => {
//   res.status(200).json({
//     success: true,
//     message: "Razorpay API key",
//     key: process.env.RAZORPAY_KEY_ID,
//   });
// });

// /**
//  * @GET_RAZORPAY_ID
//  * @ROUTE @GET {{URL}}/api/v1/payments
//  * @ACCESS Private (ADMIN only)
//  */
// export const allPayments = asyncHandler(async (req, res, _next) => {
//   const { count, skip } = req.query;

//   // Find all subscriptions from razorpay
//   const allPayments = await razorpay.subscriptions.all({
//     count: count ? count : 10, // If count is sent then use that else default to 10
//     skip: skip ? skip : 0, // // If skip is sent then use that else default to 0
//   });

//   const monthNames = [
//     "January",
//     "February",
//     "March",
//     "April",
//     "May",
//     "June",
//     "July",
//     "August",
//     "September",
//     "October",
//     "November",
//     "December",
//   ];

//   const finalMonths = {
//     January: 0,
//     February: 0,
//     March: 0,
//     April: 0,
//     May: 0,
//     June: 0,
//     July: 0,
//     August: 0,
//     September: 0,
//     October: 0,
//     November: 0,
//     December: 0,
//   };

//   const monthlyWisePayments = allPayments.items.map((payment) => {
//     // We are using payment.start_at which is in unix time, so we are converting it to Human readable format using Date()
//     const monthsInNumbers = new Date(payment.start_at * 1000);

//     return monthNames[monthsInNumbers.getMonth()];
//   });

//   monthlyWisePayments.map((month) => {
//     Object.keys(finalMonths).forEach((objMonth) => {
//       if (month === objMonth) {
//         finalMonths[month] += 1;
//       }
//     });
//   });

//   const monthlySalesRecord = [];

//   Object.keys(finalMonths).forEach((monthName) => {
//     monthlySalesRecord.push(finalMonths[monthName]);
//   });

//   res.status(200).json({
//     success: true,
//     message: "All payments",
//     allPayments,
//     finalMonths,
//     monthlySalesRecord,
//   });
// });

//-----------------------------------------------------------------------------------------------

// Life-time access to course not subscription based -> 1 year access

import crypto from "crypto";

import asyncHandler from "../middlewares/asyncHandler.middleware.js";
import User from "../models/user.model.js";
import AppError from "../utils/appError.js";
import { razorpay } from "../server.js";
import Payment from "../models/Payment.model.js";
import Course from "../models/course.model.js";

/**
 * @CREATE_COURSE_ORDER
 * @ROUTE @POST /api/v1/payments/order/:userId/:courseId
 * @ACCESS Private
 */
export const createCourseOrder = asyncHandler(async (req, res, next) => {
  const { userId, courseId } = req.params;

  const user = await User.findById(userId);
  const course = await Course.findById(courseId);

  if (!user) return next(new AppError("User not found", 404));
  if (!course) return next(new AppError("Course not found", 404));

  if (user.role === "ADMIN") {
    return next(new AppError("Admin cannot purchase a course", 403));
  }

  const alreadyPurchased = user.purchasedCourses.find(
    (c) => c.course.toString() === courseId
  );
  if (alreadyPurchased) {
    return next(new AppError("Course already purchased", 400));
  }

  try {
    // console.log("Creating Razorpay order for:", userId, courseId);
    // console.log("Price:", course.price);

    const receipt = `rcpt_${Date.now()}_${courseId.slice(-4)}`;
    if (receipt.length > 40) throw new Error("Generated receipt is too long");

    const order = await razorpay.orders.create({
      amount: course.price * 100,
      currency: "INR",
      receipt,
      notes: { userId, courseId },
    });

    // console.log("Order created:", order);

    res.status(200).json({
      success: true,
      message: "Order created successfully",
      order,
      key: process.env.RAZORPAY_KEY_ID,
    });
  } catch (error) {
    // console.error("Error creating order:", error);
    return next(new AppError(error.message || "Failed to create order", 500));
  }
});

/**
 * @VERIFY_COURSE_PAYMENT
 * @ROUTE @POST /api/v1/payments/verify/:userId/:courseId
 * @ACCESS Private
 */
export const verifyCoursePayment = asyncHandler(async (req, res, next) => {
  const { userId, courseId } = req.params;
  const { razorpay_payment_id, razorpay_order_id, razorpay_signature } =
    req.body;

  const user = await User.findById(userId);
  const course = await Course.findById(courseId);

  if (!user || !course) {
    return next(new AppError("Invalid user or course", 404));
  }

  const generatedSignature = crypto
    .createHmac("sha256", process.env.RAZORPAY_SECRET)
    .update(`${razorpay_order_id}|${razorpay_payment_id}`)
    .digest("hex");

  // console.log("GS: ", generatedSignature)
  // console.log("RS: ", razorpay_signature)

  if (generatedSignature !== razorpay_signature) {
    return next(new AppError("Payment verification failed", 400));
  }

  const payment = await Payment.create({
    user: userId,
    course: courseId,
    razorpay_order_id,
    razorpay_payment_id,
    razorpay_signature,
  });

  const expireAt = new Date();
  // expireAt.setDate(expireAt.getDate() + 365);
  expireAt.setFullYear(expireAt.getFullYear() + 1);

  user.purchasedCourses.push({
    course: course._id,
    payment: payment._id,
    expireAt,
  });

  await user.save();

    // Add userId to course's enrolledStudents array if not already present
  if (!course.enrolledStudents.includes(user._id)) {
    course.enrolledStudents.push(user._id);
    await course.save();
  }

  res.status(200).json({
    success: true,
    message: "Payment verified successfully and course access granted",
  });
});

/**
 * @GET_RAZORPAY_KEY
 * @ROUTE @GET /api/v1/payments/razorpay-key
 * @ACCESS Public
 */
export const getRazorpayApiKey = asyncHandler(async (_req, res) => {
  res.status(200).json({
    success: true,
    key: process.env.RAZORPAY_KEY_ID,
  });
});

/**
 * @GET_ALL_COURSE_PAYMENTS
 * @ROUTE @GET /api/v1/payments
 * @ACCESS Private (ADMIN only)
 */
export const allPayments = asyncHandler(async (req, res) => {
  // const payments = await Payment.find().populate("user").populate("course");
  // OR
  const payments = await Payment.find({}).populate("user course");

  const monthMap = Array(12).fill(0);
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  payments.forEach((payment) => {
    const monthIndex = new Date(payment.createdAt).getMonth();
    monthMap[monthIndex]++;
  });

  const finalMonths = monthMap.reduce((acc, val, i) => {
    acc[monthNames[i]] = val;
    return acc;
  }, {});

  res.status(200).json({
    success: true,
    message: "Payments fetched successfully",
    allPayments: payments,
    monthlySalesRecord: monthMap,
    finalMonths,
  });
});
