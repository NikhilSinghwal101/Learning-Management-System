import app from "./app.js";
import dbConnect from "./configs/dbConn.js";
import dotenv from "dotenv";
import cloudinary from "cloudinary";
import Razorpay from "razorpay";
dotenv.config();

// Cloudinary configuration
cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Razorpay configuration
export const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_SECRET,
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, async () => {
  await dbConnect();
  console.log(`Server is listening on PORT: ${PORT}`);
});
