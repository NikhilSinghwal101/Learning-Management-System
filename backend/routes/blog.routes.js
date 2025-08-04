import express from "express";
import upload from "../middlewares/multer.middleware.js";
import {
  createBlog,
  dislikeComment,
  getBlogsData,
  getNextBlog,
  getPrevBlog,
  getSingleBlogData,
  likeComment,
  postComment,
//   getComment,
} from "../controllers/blog.controller.js";

const router = express.Router();

router.post("/create", upload.single("coverImg"), createBlog);
router.get("/getData", getBlogsData);
router.get("/getSingleBlogData/:id", getSingleBlogData);
router.get("/:id/prev", getPrevBlog);
router.get("/:id/next", getNextBlog);
router.post("/postComment/:id", postComment);
// router.get("/getComment/:id", getComment);
router.post("like/:id", likeComment);
router.post("dislike/:id", dislikeComment);


export default router;
