// import React, { useEffect } from "react";
// import { BiRupee } from "react-icons/bi";
// import { useDispatch, useSelector } from "react-redux";
// import {
//   getRazorPayId,
//   purchaseCourseBundle,
//   verifyUserPayment,
// } from "../../redux/features/razorpaySlice";
// // import { toast } from "react-toastify";
// import { useNavigate, useParams } from "react-router-dom";

// const Checkout = () => {
//   const { courseId } = useParams();
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const userData = useSelector((state) => state.auth?.data?.user);
//   const razorPayKey = useSelector((state) => state?.razorpay?.key);
//   const subscription_id = useSelector(
//     (state) => state?.razorpay?.subscription_id
//   );
//   const { isPaymentVerified } = useSelector((state) => state?.razorpay);

//   console.log("userDataID: ", userData?._id);
//   console.log("razorpay key: ", razorPayKey);
//   console.log("subscription id: ", subscription_id);
//   console.log("isPaymentVerified: ", isPaymentVerified);

//   // for storing the payment details after successfull transaction
//   const paymentDetails = {
//     razorpay_payment_id: "",
//     razorpay_subscription_id: "",
//     razorpay_signature: "",
//   };

//   const loadRazorpayScript = () => {
//     return new Promise((resolve) => {
//       const script = document.createElement("script");
//       script.src = "https://checkout.razorpay.com/v1/checkout.js";
//       script.onload = () => {
//         resolve(true);
//       };
//       script.onerror = () => {
//         resolve(false);
//       };
//       document.body.appendChild(script);
//     });
//   };

//   const handleSubscription = async (event) => {
//     event.preventDefault();
//     // navigate("/checkout-success");  // =====================================> I have put this as custom

//     await loadRazorpayScript();

//     // checking for empty payment credential
//     if (!razorPayKey || !subscription_id) {
//       return;
//     }

//     const options = {
//       key: razorPayKey,
//       subscription_id: subscription_id,
//       name: "EduAll Pvt. Ltd.",
//       description: "Monthly Subscription",
//       handler: async function (response) {
//         paymentDetails.razorpay_payment_id = response.razorpay_payment_id;
//         paymentDetails.razorpay_subscription_id =
//           response.razorpay_subscription_id;
//         paymentDetails.razorpay_signature = response.razorpay_signature;

//         // displaying the success message
//         // toast.success("Payment Successfull");

//         // verifying the payment
//         const res = await dispatch(
//           verifyUserPayment({
//             paymentDetails: {
//               razorpay_payment_id: response.razorpay_payment_id,
//               razorpay_subscription_id: response.razorpay_subscription_id,
//               razorpay_signature: response.razorpay_signature,
//             },
//             userId: userData?._id,
//             courseId
//           })
//         );
//         console.log(res);

//         // redirecting the user according to the verification status
//         // isPaymentVerified === true
//         //   ? navigate("/checkout-success")
//         //   : navigate("/checkout-fail");

//         if (verifyUserPayment.fulfilled.match(res)) {
//           navigate("/checkout-success");
//           // toast.success("Payment Successfull");
//         } else {
//           navigate("/checkout-fail");
//           // toast.error("Payment Fail");
//         }
//       },
//       prefill: {
//         name: userData.fullName,
//         email: userData.email,
//       },
//       theme: {
//         color: "#F37254",
//       },
//     };
//     const paymentObject = new window.Razorpay(options);
//     paymentObject.open();
//   };

//   // useEffect(() => {
//   //   (async () => {
//   //     await dispatch(getRazorPayId());
//   //     await dispatch(purchaseCourseBundle(userData?._id));
//   //   })();
//   // }, []);

//   useEffect(() => {
//     if (userData?._id) {
//       dispatch(getRazorPayId());
//       dispatch(purchaseCourseBundle(userData._id));
//     }
//   }, [userData?._id]);

//   useEffect(() => {

//   }, [userData])

//   return (
//     <div>
//       {/* checkout page container */}
//       <form
//         onSubmit={handleSubscription}
//         className="min-h-[90vh] flex items-center justify-center text-gray-800"
//       >
//         {/* checkout card */}
//         <div className="w-80 h-[26rem] flex flex-col justify-center shadow-[0_0_10px_black] rounded-lg relative">
//           <h1 className="bg-green-500 absolute top-0 w-full text-center py-4 text-2xl font-bold rounded-tl-lg rounded-tr-lg">
//             Subscription Bundle
//           </h1>

//           <div className="px-4 space-y-5 text-center">
//             <p className="text-[17px]">
//               This purchase will allow you to access all the available courses
//               of our platform for{" "}
//               <span className="text-green-500 font-bold">1 Year Duration</span>
//               . <br />
//               All the existing and new launched courses will be available to you
//               in this subscription bundle
//             </p>

//             <p className="flex items-center justify-center gap-1 text-2xl font-bold text-green-500">
//               <BiRupee /> <span>499</span>only
//             </p>

//             <div className="text-gray-500">
//               <p>100% refund at cancellation</p>
//               <p>* Terms & Condition Applied</p>
//             </div>
//           </div>

//           <button
//             type="submit"
//             className="bg-green-500 hover:bg-green-600 transition-all ease-in-out duration-300 absolute bottom-0 w-full text-center py-2 text-xl font-bold rounded-bl-lg rounded-br-lg"
//           >
//             Buy Now
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default Checkout;


//--------------------------------------------------------------------
// Life-time access to course ( Not Subscription based ) Above code is subscription based -> 1 year access

import React, { useEffect, useState } from "react";
import { BiRupee } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import {
  getRazorPayId,
  createCourseOrder,
  verifyUserPayment,
} from "../../redux/features/razorpaySlice";
import { useNavigate, useParams } from "react-router-dom";

const Checkout = () => {
  const { courseId } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const userData = useSelector((state) => state.auth?.data?.user);
  const razorPayKey = useSelector((state) => state.razorpay?.key);
  const [orderData, setOrderData] = useState(null); // order.id and amount

  useEffect(() => {
    const initPayment = async () => {
      if (userData?._id && courseId) {
        await dispatch(getRazorPayId());
        const orderRes = await dispatch(
          createCourseOrder({ userId: userData._id, courseId })
        );

        if (createCourseOrder.fulfilled.match(orderRes)) {
          setOrderData({
            id: orderRes.payload?.order?.id,
            amount: orderRes.payload?.order?.amount,
          });
        }
      }
    };

    initPayment();
  }, [userData?._id, courseId, dispatch]);

  const loadRazorpayScript = () => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  const handlePayment = async (e) => {
    e.preventDefault();
    const scriptLoaded = await loadRazorpayScript();

    if (!scriptLoaded || !razorPayKey || !orderData?.id) return;

    const options = {
      key: razorPayKey,
      amount: orderData?.amount,
      currency: "INR",
      name: "EduAll Pvt. Ltd.",
      description: "Course Purchase",
      order_id: orderData?.id,
      handler: async function (response) {
        const verifyRes = await dispatch(
          verifyUserPayment({
            paymentDetails: {
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_order_id: response.razorpay_order_id,
              razorpay_signature: response.razorpay_signature,
            },
            userId: userData._id,
            courseId,
          })
        );

        if (verifyUserPayment.fulfilled.match(verifyRes)) {
          navigate("/checkout-success");
        } else {
          navigate("/checkout-fail");
        }
      },
      prefill: {
        name: userData?.fullName,
        email: userData?.email,
      },
      theme: {
        color: "#F37254",
      },
    };

    const razor = new window.Razorpay(options);
    razor.open();
  };

  return (
    <div className="min-h-[90vh] flex items-center justify-center text-gray-800">
      <form
        onSubmit={handlePayment}
        className="w-80 h-[26rem] flex flex-col justify-center shadow-[0_0_10px_black] rounded-lg relative"
      >
        <h1 className="bg-green-500 absolute top-0 w-full text-center py-4 text-2xl font-bold rounded-tl-lg rounded-tr-lg">
          Buy Course
        </h1>

        <div className="px-4 space-y-5 text-center">
          <p className="text-[17px]">
            Get 1 year access to this course. Learn at your pace with all
            resources and updates.
          </p>

          <p className="flex items-center justify-center gap-1 text-2xl font-bold text-green-500">
            <BiRupee /> <span>{orderData?.amount / 100 || 499}</span> only
          </p>

          <div className="text-gray-500">
            <p>One-time payment only</p>
            <p>* No auto-renewal</p>
          </div>
        </div>

        <button
          type="submit"
          disabled={!orderData}
          className="bg-green-500 hover:bg-green-600 transition-all ease-in-out duration-300 absolute bottom-0 w-full text-center py-2 text-xl font-bold rounded-bl-lg rounded-br-lg"
        >
          Buy Now
        </button>
      </form>
    </div>
  );
};

export default Checkout;



// //---------------------------------------------------------------------------------------------------------------

// import React, { useEffect, useState } from "react";
// import { BiRupee } from "react-icons/bi";
// import { useDispatch, useSelector } from "react-redux";
// import { verifyUserPayment } from "../../redux/features/razorpaySlice";
// import { toast } from "react-toastify";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";

// const Checkout = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const userData = useSelector((state) => state.auth?.data);
//   const { isPaymentVerified } = useSelector((state) => state?.razorpay);

//   const [razorPayKey, setRazorPayKey] = useState(null);
//   const [subscriptionId, setSubscriptionId] = useState(null);

//   const paymentDetails = {
//     razorpay_payment_id: "",
//     razorpay_subscription_id: "",
//     razorpay_signature: "",
//   };

//   console.log("user data: ", userData?._id);

//   useEffect(() => {
//     const fetchRazorpayKeyAndSubscription = async () => {
//       try {
//         // Get Razorpay Key
//         const keyRes = await axios.get(
//           "http://localhost:5000/api/v1/payments/razorpay-key"
//         );
//         const key = keyRes?.data?.key;
//         setRazorPayKey(key);

//         // Ensure user data is available
//         if (!userData?._id) {
//           toast.error("User ID is missing");
//           return;
//         }

//         // Purchase bundle and get subscription ID
//         const subRes = await axios.post(
//           `http://localhost:5000/api/v1/payments/subscribe/${userData?._id}`
//         );
//         setSubscriptionId(subRes?.data?.subscription_id);
//       } catch (error) {
//         toast.error(
//           error?.response?.data?.message || "Failed to initialize payment"
//         );
//       }
//     };

//     fetchRazorpayKeyAndSubscription();
//   }, [userData]);

//   const handleSubscription = async (event) => {
//     event.preventDefault();

//     if (!razorPayKey || !subscriptionId) {
//       toast.error("Missing payment info");
//       return;
//     }

//     const options = {
//       key: razorPayKey,
//       subscription_id: subscriptionId,
//       name: "EduAll Pvt. Ltd.",
//       description: "Monthly Subscription",
//       handler: async function (response) {
//         paymentDetails.razorpay_payment_id = response.razorpay_payment_id;
//         paymentDetails.razorpay_subscription_id =
//           response.razorpay_subscription_id;
//         paymentDetails.razorpay_signature = response.razorpay_signature;

//         toast.success("Payment Successful");

//         const res = await dispatch(verifyUserPayment(paymentDetails));

//         isPaymentVerified
//           ? navigate("/checkout-success")
//           : navigate("/checkout-fail");
//       },
//       prefill: {
//         name: userData?.fullName || "",
//         email: userData?.email || "",
//       },
//       theme: {
//         color: "#F37254",
//       },
//     };

//     const paymentObject = new window.Razorpay(options);
//     paymentObject.open();
//   };

//   return (
//     <div>
//       <form
//         onSubmit={handleSubscription}
//         className="min-h-[90vh] flex items-center justify-center text-gray-800"
//       >
//         <div className="w-80 h-[26rem] flex flex-col justify-center shadow-[0_0_10px_black] rounded-lg relative">
//           <h1 className="bg-green-500 absolute top-0 w-full text-center py-4 text-2xl font-bold rounded-tl-lg rounded-tr-lg">
//             Subscription Bundle
//           </h1>

//           <div className="px-4 space-y-5 text-center">
//             <p className="text-[17px]">
//               This purchase will allow you to access all the available courses
//               for <span className="text-green-500 font-bold">1 Year</span>.
//             </p>
//             <p className="flex items-center justify-center gap-1 text-2xl font-bold text-green-500">
//               <BiRupee /> <span>499</span> only
//             </p>
//             <div className="text-gray-500">
//               <p>100% refund at cancellation</p>
//               <p>* Terms & Condition Applied</p>
//             </div>
//           </div>

//           <button
//             type="submit"
//             className="bg-green-500 hover:bg-green-600 transition-all ease-in-out duration-300 absolute bottom-0 w-full text-center py-2 text-xl font-bold rounded-bl-lg rounded-br-lg"
//           >
//             Buy Now
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default Checkout;

//---------------------------------------------------------------------------------------------------------

// import React, { useEffect, useState } from "react";
// import { BiRupee } from "react-icons/bi";
// import { useSelector } from "react-redux";
// import { toast } from "react-toastify";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";

// // 👇 Local function to verify payment
// const verifyUserPayment = async (paymentDetail) => {
//   try {
//     const res = await axios.post(
//       `http://localhost:5000/api/v1/payments/verify/${userData?._id}`,
//       {
//         razorpay_payment_id: paymentDetail.razorpay_payment_id,
//         razorpay_subscription_id: paymentDetail.razorpay_subscription_id,
//         razorpay_signature: paymentDetail.razorpay_signature,
//       }
//     );
//     return res?.data;
//   } catch (error) {
//     toast.error(
//       error?.response?.data?.message || "Payment verification failed"
//     );
//     return null;
//   }
// };

// const loadRazorpayScript = () => {
//   return new Promise((resolve) => {
//     const script = document.createElement("script");
//     script.src = "https://checkout.razorpay.com/v1/checkout.js";
//     script.onload = () => {
//       resolve(true);
//     };
//     script.onerror = () => {
//       resolve(false);
//     };
//     document.body.appendChild(script);
//   });
// };

// const Checkout = () => {
//   const navigate = useNavigate();
//   const userData = useSelector((state) => state.auth?.data?.user);

//   const [razorPayKey, setRazorPayKey] = useState(null);
//   const [subscriptionId, setSubscriptionId] = useState(null);

//   const paymentDetails = {
//     razorpay_payment_id: "",
//     razorpay_subscription_id: "",
//     razorpay_signature: "",
//   };

//   console.log("userDataID: ", userData?._id);
//   console.log("razorpay key: ", razorPayKey);
//   console.log("subscription id: ", subscriptionId);

//   useEffect(() => {
//     const fetchRazorpayKeyAndSubscription = async () => {
//       if (!userData?._id || razorPayKey || subscriptionId) return;

//       try {
//         // Fetch Razorpay Key
//         const keyRes = await axios.get(
//           "http://localhost:5000/api/v1/payments/razorpay-key"
//         );
//         const key = keyRes?.data?.key;
//         setRazorPayKey(key);

//         // Fetch subscription ID
//         const subRes = await axios.post(
//           `http://localhost:5000/api/v1/payments/subscribe/${userData._id}`
//         );
//         setSubscriptionId(subRes?.data?.subscription_id);
//       } catch (error) {
//         toast.error(
//           error?.response?.data?.message || "Failed to initialize payment"
//         );
//       }
//     };

//     fetchRazorpayKeyAndSubscription();
//   }, [userData, razorPayKey, subscriptionId]);

//   const handleSubscription = async (event) => {
//     event.preventDefault();

//     // await loadRazorpayScript();

//     // if (!razorPayKey || !subscriptionId) {
//     //   toast.error("Missing payment info");
//     //   return;
//     // }

//     const options = {
//       key: razorPayKey,
//       subscription_id: subscriptionId,
//       name: "EduAll Pvt. Ltd.",
//       description: "Monthly Subscription",
//       handler: async function (response) {
//         paymentDetails.razorpay_payment_id = response.razorpay_payment_id;
//         paymentDetails.razorpay_subscription_id =
//           response.razorpay_subscription_id;
//         paymentDetails.razorpay_signature = response.razorpay_signature;

//         toast.success("Payment Successful");

//         const result = await verifyUserPayment(paymentDetails);

//         console.log("result: ", result);

//         navigate("/checkout-success");

//         // if (result?.success) {
//         //   navigate("/checkout-success");
//         // }
//         //  else {
//         //   navigate("/checkout-fail");
//         // }
//       },
//       prefill: {
//         name: userData?.fullName || "",
//         email: userData?.email || "",
//       },
//       theme: {
//         color: "#F37254",
//       },
//     };

//     const paymentObject = new window.Razorpay(options);
//     paymentObject.open();
//   };

//   // useEffect(() => {
//   //   loadRazorpayScript();
//   // }, [])

//   return (
//     <div>
//       <form
//         onSubmit={handleSubscription}
//         className="min-h-[90vh] flex items-center justify-center text-gray-800"
//       >
//         <div className="w-80 h-[26rem] flex flex-col justify-center shadow-[0_0_10px_black] rounded-lg relative">
//           <h1 className="bg-green-500 absolute top-0 w-full text-center py-4 text-2xl font-bold rounded-tl-lg rounded-tr-lg">
//             Subscription Bundle
//           </h1>

//           <div className="px-4 space-y-5 text-center">
//             <p className="text-[17px]">
//               This purchase will allow you to access all the available courses
//               for <span className="text-green-500 font-bold">1 Year</span>.
//             </p>
//             <p className="flex items-center justify-center gap-1 text-2xl font-bold text-green-500">
//               <BiRupee /> <span>499</span> only
//             </p>
//             <div className="text-gray-500">
//               <p>100% refund at cancellation</p>
//               <p>* Terms & Condition Applied</p>
//             </div>
//           </div>

//           <button
//             type="submit"
//             className="bg-green-500 hover:bg-green-600 transition-all ease-in-out duration-300 absolute bottom-0 w-full text-center py-2 text-xl font-bold rounded-bl-lg rounded-br-lg"
//           >
//             Buy Now
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default Checkout;
