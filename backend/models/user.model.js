import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: [true, "Name is required"],
      lowercase: true,
      trim: true,
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      select: false,
    },
    avatar: {
      public_id: {
        type: String,
      },
      secure_url: {
        type: String,
      },
    },
    role: {
      type: String,
      enum: ["USER", "ADMIN", "INSTRUCTOR"],
      default: "USER",
    },
    //  purchasedCourses array is only for life-time access courses ( It is not based on subscription )
    purchasedCourses: [
      {
        course: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Course",
        },
        payment: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Payment",
        },
        purchasedAt: {
          type: Date,
          default: Date.now,
        },
        expireAt: {
          type: Date,
          required: true,
        },
      },
    ],
    // It is only for subscription based ( It is not based on life-time access )
    // subscription: {
    //   id: {
    //     type: String,
    //   },
    //   status: {
    //     type: String,
    //   },
    // },
    forgotPasswordToken: String,
    forgotPasswordExpiry: Date,
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);

export default User;
