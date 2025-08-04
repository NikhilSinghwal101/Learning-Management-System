import { Router } from "express";
import {
  changePassword,
  forgotPassword,
  getUserDetails,
  googleLogin,
  loginUser,
  logoutUser,
  registerUser,
  resetPassword,
  updateUser,
} from "../controllers/user.controller.js";
import { isLoggedIn } from "../middlewares/auth.middleware.js";
import upload from "../middlewares/multer.middleware.js";

const router = Router();

router.post("/register", upload.single("avatar"), registerUser);
router.post("/login", loginUser);
router.post('/google-login', googleLogin);
router.post("/logout", logoutUser);
router.get('/me', isLoggedIn, getUserDetails);
router.post("/forgot-password", forgotPassword);
router.post("/reset-password/:resetToken", resetPassword);
// router.post("/change-password", isLoggedIn, changePassword);
router.post("/change-password", changePassword);
// router.put("/update-profile/:id", isLoggedIn, upload.single("avatar"), updateUser);
router.put("/update-profile/:id", upload.single("avatar"), updateUser);
export default router;
