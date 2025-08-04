import { Router } from 'express';
import {
  getRazorpayApiKey,
  // buySubscription,
  // verifySubscription,
  // cancelSubscription,
  allPayments,
  createCourseOrder,
  verifyCoursePayment,
} from '../controllers/payment.controller.js';
import {
//   authorizeRoles,
//   authorizeSubscribers,
  isLoggedIn,
} from '../middlewares/auth.middleware.js';

const router = Router();

// router.route('/subscribe').post(isLoggedIn, buySubscription);
// router.route('/verify').post(isLoggedIn, verifySubscription);
// router
//   .route('/unsubscribe')
//   .post(isLoggedIn, cancelSubscription);
// router.route('/razorpay-key').get(isLoggedIn, getRazorpayApiKey);
// router.route('/').get(isLoggedIn, allPayments);

//-----------------------------------------------------------------------------------
// subscription based

// router.route('/subscribe/:id').post(buySubscription);
// router.route('/verify/:userId/:courseId').post(verifySubscription);
// router
//   .route('/unsubscribe/:id')
//   .post(cancelSubscription);
// router.route('/razorpay-key').get(getRazorpayApiKey);
// router.route('/').get(allPayments);

//-----------------------------------------------------------------------------------
// Without subscription based means life-time access

router.post("/order/:userId/:courseId", createCourseOrder);
router.post("/verify/:userId/:courseId", verifyCoursePayment);
router.get("/razorpay-key", getRazorpayApiKey);
router.get("/", allPayments);
// router.get("/", isLoggedIn, authorizeRoles("ADMIN"), allPayments);


export default router;
