import express from "express";
import upload from "../middlewares/multer.middleware.js";
import {
  createCourse,
  getAllCourses,
  getCourseById,
  updateCourseById,
  deleteCourseById,
  removeLectureFromCourse,
  addLectureToCourseById,
  getLecturesByCourseId,
} from "../controllers/course.controller.js";
import { isLoggedIn } from "../middlewares/auth.middleware.js";

const router = express.Router();


router.post("/create", upload.single('thumbnail'), createCourse);
router.get("/", getAllCourses);
router.get("/:id", getCourseById);
router.delete("/:id", deleteCourseById);
router.put("/:id", updateCourseById);

// router.delete("/:id/lectures/:lectureId", removeLectureFromCourse);  // Here /:id => /:courseId
router.delete("/", removeLectureFromCourse);
router.get("/:id/lectures", getLecturesByCourseId);
router.post("/:id", upload.single("lecture"), addLectureToCourseById);


export default router;
