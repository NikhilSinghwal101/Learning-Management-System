import { model, Schema } from 'mongoose';

const paymentSchema = new Schema(
  { 
    //  user and course is necessary for life-time access to courses ( But they are not required for subscription based )
      user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    course: {
      type: Schema.Types.ObjectId,
      ref: "Course", 
      required: true,
    },
    razorpay_payment_id: {
      type: String,
      required: true,
    },
    // razorpay_subscription_id: {
    //   type: String,
    //   required: true,
    // },
    razorpay_order_id: {
      type: String,
      required: true,
    },
    razorpay_signature: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Payment = model('Payment', paymentSchema);

export default Payment;
