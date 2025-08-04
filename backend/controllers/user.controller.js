import express from "express";
import crypto from "crypto";
import cloudinary from "cloudinary";
import fs from "fs/promises";
import bcrypt from "bcryptjs";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";
import User from "../models/user.model.js";
import AppError from "../utils/appError.js";
import sendEmail from "../utils/sendEmail.js";
import asyncHandler from "../middlewares/asyncHandler.middleware.js";
const router = express.Router();

dotenv.config();

// create user
export const registerUser = asyncHandler(async (req, res) => {
  const { fullName, email, password } = req.body;

  // console.log("req.body => ", req.body);

  // try {
  if (!fullName || !email || !password) {
    res.status(400).json({
      message: "All fields are required!",
    });
  }

  const userExists = await User.findOne({ email }).select("+password");

  if (userExists) {
    res.status(409).json({
      message: "Email already exists!",
    });
  }

  // console.log(userExists)

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await User.create({
    fullName,
    email,
    password: hashedPassword,
    avatar: {
      public_id: email,
      secure_url:
        "https://res.cloudinary.com/du9jzqlpt/image/upload/v1674647316/avatar_drzgxv.jpg",
    },
  });

  // console.log("user => ", user);

  if (!user) {
    res.status(400).json({
      message: "User creation failed, please try again later!",
    });
  }

  // console.log("req => ", req);

  // console.log("req.file => ", req.file)

  // if(req.file) {
  //   try {
  //   const result = await cloudinary.v2.uploader.upload(req.file.path, {
  //     folder: 'lms',
  //     width: 250,
  //     height: 250,
  //     gravity: 'faces',
  //     crop: 'fill'
  //   })

  //   console.log("result => ", result);

  //   if(result) {
  //     user.avatar.public_id = result.public_id;
  //     user.avatar.secure_url = result.secure_url;

  //     fs.rm(`uploads/${req.file.filename}`);
  //   }
  // } catch(err) {
  //   // console.log(err);
  //     res.status(400).json({
  //       message: "File not uploaded, please try again"
  //     })
  //   }
  // }

  await user.save();

  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
    expiresIn: "1d",
  });

  user.password = undefined;

  res.cookie("token", token, {
    maxAge: 1 * 24 * 60 * 60 * 1000,
    secure: false,
    httpOnly: true,
  });

  res.status(201).json({
    success: true,
    message: "User created successfully!",
    user,
  });
  // } catch (err) {
  //   res.status(500).json({
  //     error: err.message,
  //   });
  // }
});

export const loginUser = asyncHandler(async (req, res, next) => {
  // In asyncHandler middleware we don't have to put try and catch as catch is included in the definition of asyncHandler OR we have done proper error handling in their definition using catch
  const { email, password } = req.body;
  // console.log("login: ", req.body)

  //  try {
  if (!email || !password) {
    res.status(400).json({
      message: "All fields are required!",
    });
  }

  // const guestLogin = {
  //   email: "test@gmail.com",
  //   password: "Test@123",
  // };

  // if (password == guestLogin.password && email == guestLogin.email) {
  //   return res.status(200).json({
  //     // write return is necessary
  //     success: true,
  //     message: "Guest logged in successfully",
  //     guestLogin,
  //   });
  // }

  const user = await User.findOne({ email }).select("+password");
  // console.log("user: ", user)

  const comparePassword = await bcrypt.compare(password, user.password);
  // console.log(comparePassword);

  if (!user || !comparePassword) {
    // res.status(401).json({
    //   message: "Email or password does not match or user does not exist !",
    // });
    return next(
      new AppError(
        "Email or password does not match or user does not exist!",
        401
      )
    );
  }

  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
    expiresIn: "1d",
  });

  user.password = undefined;

  // console.log("token: ", token)

  res.cookie("token", token, {
    maxAge: 1 * 24 * 60 * 60 * 1000,
    httpOnly: true,
    secure: false,
  }); // 1 day maxAge

  res.status(200).json({
    success: true,
    message: "User logged in successfully!",
    user,
    // token
  });
  //  } catch(err) {
  //   res.status(500).json({
  //     error: err.message,
  //   });
  //  }
});

export const googleLogin = asyncHandler(async (req, res) => {
  const { tokenId } = req.body;

  try {
    // Verify token with Google
    const response = await axios.get(
      `https://oauth2.googleapis.com/tokeninfo?id_token=${tokenId}`
    );
    const { email, name } = response.data;

    // Here, you can create or find the user in your database
    // For demonstration, we're assuming user creation
    const user = { email, name }; // Replace with your user creation logic

    // Generate JWT token
    const accessToken = jwt.sign(user, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    // Optionally, send the token as a cookie
    res.cookie("token", accessToken, { httpOnly: true });
    res.status(200).json({ message: "Login successful", user, accessToken });
  } catch (error) {
    console.error("Google Login Error: ", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

// get all users
// export const getAllUserDetails = async (_req, res) => {
//     try{
//         const users = await User.find();
//         res.status(200).json({
//             message: "All users fetched successfully",
//             users
//         })
//     } catch(err) {
//         res.status(500).json({
//             error: err.message,
//         });
//     }
// };

// get single user details
export const getUserDetails = asyncHandler(async (req, res) => {
  // const { id } = req.params;
  // console.log("id: ",id)

  // try {
  // const user = await User.findOne({ _id: id });
  // console.log("user: ", user)

  // console.log("id: ", req.user.id);
  const user = await User.findById(req.user.id);
  // .select("-password")
  // .populate("purchasedCourses.course");

  const courseInfo = await User.findById(req.user.id).select("purchasedCourses").populate("purchasedCourses.course");

  res.status(200).json({
    success: true,
    message: "User details fetched successfully!",
    user,
    courseInfo,
  });
  // } catch (err) {
  //   res.status(500).json({
  //     error: err.message,
  //   });
  // }
});

// logout user
export const logoutUser = asyncHandler(async (req, res) => {
  // const { id } = req.params;

  // try {
  // const user = await User.findByIdAndDelete({ _id: id });

  // console.log("req.cookies.token: ", req.cookies.token);

  // if (req.cookies.token === undefined) {
  //   return res.status(200).json({
  //     // write return is necessary
  //     success: true,
  //     message: "Guest logged out successfully !",
  //   });
  // }

  res.cookie("token", null, {
    maxAge: 0,
    secure: false,
    httpOnly: true,
  });

  res.status(200).json({
    success: true,
    message: "User logged out successfully!",
  });
  // } catch (err) {
  //   res.status(500).json({
  //     error: err.message,
  //   });
  // }
});

// update user
// router.put("/update-user/:id", async (req, res) => {
//   const { id } = req.params;

//   try {
//     const user = await User.findByIdAndUpdate(id, req.body, { new: true });
//     res.status(200).json({
//       message: "User updated successfully!",
//       user,
//     });
//   } catch (err) {
//     res.status(500).json({
//       error: err.message,
//     });
//   }
// });

export const forgotPassword = asyncHandler(async (req, res, next) => {
  // Extracting email from request body
  const { email } = req.body;

  // If no email send email required message
  if (!email) {
    return next(new AppError("Email is required", 400));
  }

  // Finding the user via email
  const user = await User.findOne({ email });

  // If no email found send the message email not found
  if (!user) {
    return next(new AppError("Email not registered", 400));
  }

  // Generating the reset token via the method we have in user model
  // const resetToken = await user.generatePasswordResetToken();
  const resetToken = crypto.randomBytes(20).toString("hex");

  // Again using crypto module to hash the generated resetToken with sha256 algorithm and storing it in database
  user.forgotPasswordToken = crypto
    .createHash("sha256")
    .update(resetToken)
    .digest("hex");

  // Adding forgot password expiry to 15 minutes
  user.forgotPasswordExpiry = Date.now() + 15 * 60 * 1000;

  // Saving the forgotPassword* to DB
  await user.save();

  // constructing a url to send the correct data
  /**HERE
   * req.protocol will send if http or https
   * req.get('host') will get the hostname
   * the rest is the route that we will create to verify if token is correct or not
   */
  // const resetPasswordUrl = `${req.protocol}://${req.get(
  //   "host"
  // )}/api/v1/user/reset/${resetToken}`;
  const resetPasswordUrl = `${process.env.FRONTEND_URL}/reset-password/${resetToken}`;

  // We here need to send an email to the user with the token
  const subject = "Reset Password";
  const message = `You can reset your password by clicking <a href=${resetPasswordUrl} target="_blank">Reset your password</a>\nIf the above link does not work for some reason then copy paste this link in new tab ${resetPasswordUrl}.\n If you have not requested this, kindly ignore.`;

  try {
    await sendEmail(email, subject, message);

    // If email sent successfully send the success response
    res.status(200).json({
      success: true,
      message: `Reset password token has been sent to ${email} successfully`,
    });
  } catch (error) {
    // If some error happened we need to clear the forgotPassword* fields in our DB
    user.forgotPasswordToken = undefined;
    user.forgotPasswordExpiry = undefined;

    await user.save();

    return next(
      new AppError(
        error.message || "Something went wrong, please try again.",
        500
      )
    );
  }
});

export const resetPassword = asyncHandler(async (req, res, next) => {
  // Extracting resetToken from req.params object
  const { resetToken } = req.params;

  // Extracting password from req.body object
  const { password } = req.body;

  // We are again hashing the resetToken using sha256 since we have stored our resetToken in DB using the same algorithm
  const forgotPasswordToken = crypto
    .createHash("sha256")
    .update(resetToken)
    .digest("hex");

  // Check if password is not there then send response saying password is required
  if (!password) {
    return next(new AppError("Password is required", 400));
  }

  console.log(forgotPasswordToken);

  // Checking if token matches in DB and if it is still valid(Not expired)
  const user = await User.findOne({
    forgotPasswordToken,
    forgotPasswordExpiry: { $gt: Date.now() }, // $gt will help us check for greater than value, with this we can check if token is valid or expired
  });

  // If not found or expired send the response
  if (!user) {
    return next(
      new AppError("Token is invalid or expired, please try again", 400)
    );
  }

  // Update the password if token is valid and not expired
  user.password = password;

  // making forgotPassword* valus undefined in the DB
  user.forgotPasswordExpiry = undefined;
  user.forgotPasswordToken = undefined;

  // Saving the updated user values
  await user.save();

  // Sending the response when everything goes good
  res.status(200).json({
    success: true,
    message: "Password changed successfully",
  });
});

export const changePassword = asyncHandler(async (req, res, next) => {
  // Destructuring the necessary data from the req object
  const { oldPassword, newPassword } = req.body;
  const { id } = req.user; // because of the middleware isLoggedIn

  // console.log("old, new, id: ", oldPassword, newPassword, id);

  // Check if the values are there or not
  if (!oldPassword || !newPassword) {
    return next(
      new AppError("Old password and new password are required", 400)
    );
  }

  // Finding the user by ID and selecting the password
  const user = await User.findById(id).select("+password");

  // console.log("user: ", user);

  // If no user then throw an error message
  if (!user) {
    return next(new AppError("Invalid user id or user does not exist", 400));
  }

  // Check if the old password is correct
  const isPasswordValid = await bcrypt.compare(oldPassword, user.password);

  // If the old password is not valid then throw an error message
  if (!isPasswordValid) {
    return next(new AppError("Invalid old password", 400));
  }

  // Setting the new password
  user.password = newPassword;

  // Save the data in DB
  await user.save();

  // Setting the password undefined so that it won't get sent in the response
  user.password = undefined;

  res.status(200).json({
    success: true,
    message: "Password changed successfully",
  });
});

export const updateUser = asyncHandler(async (req, res, next) => {
  // Destructuring the necessary data from the req object
  const { fullName } = req.body;
  const { id } = req.params; // OR req.user.id then route will be router.put("/update", isLoggedIn, upload.single("avatar"), updateUser);

  const user = await User.findById(id);

  if (!user) {
    return next(new AppError("Invalid user id or user does not exist"));
  }

  if (fullName) {
    user.fullName = fullName;
  }

  // Run only if user sends a file
  if (req.file) {
    // Deletes the old image uploaded by the user
    await cloudinary.v2.uploader.destroy(user.avatar.public_id);

    try {
      const result = await cloudinary.v2.uploader.upload(req.file.path, {
        folder: "lms", // Save files in a folder named lms
        width: 250,
        height: 250,
        gravity: "faces", // This option tells cloudinary to center the image around detected faces (if any) after cropping or resizing the original image
        crop: "fill",
      });

      // If success
      if (result) {
        // Set the public_id and secure_url in DB
        user.avatar.public_id = result.public_id;
        user.avatar.secure_url = result.secure_url;

        // After successful upload remove the file from local storage
        fs.rm(`uploads/${req.file.filename}`);
      }
    } catch (error) {
      return next(
        new AppError(error || "File not uploaded, please try again", 400)
      );
    }
  }

  // Save the user object
  await user.save();

  res.status(200).json({
    success: true,
    message: "User details updated successfully",
  });
});
