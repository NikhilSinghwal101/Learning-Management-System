import { Router } from "express";
import { getQuiz } from "../controllers/quiz.controller.js";

const router = Router();

router.get("/", getQuiz);

export default router;
