import express from "express";
import cors from "cors";
import userRoutes from "./routes/user.routes.js";
import quizRoutes from "./routes/quiz.routes.js";
import blogRoutes from "./routes/blog.routes.js";
import courseRoutes from "./routes/course.routes.js";
import paymentRoutes from "./routes/payment.routes.js";
import miscRoutes from "./routes/miscellaneous.routes.js";
import cookieParser from "cookie-parser";
import morgan from "morgan";
import errorMiddleware from "./middlewares/error.middleware.js";
const app = express();

app.get("/", (_req, res) => {
  res.send("Hello");
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use(morgan("dev")); // show proper routes with request type and status in console
app.use(cookieParser());

app.use("/api/v1/user", userRoutes);
app.use("/api/v1/quiz", quizRoutes);
app.use("/api/v1/blog", blogRoutes);
app.use("/api/v1/course", courseRoutes);
app.use('/api/v1/payments', paymentRoutes);
app.use('/api/v1', miscRoutes);

// app.all('*', (_req, res) => {
//     res.status(404).send('OOPS!!! 404 Page Not Found');
// });

app.use(errorMiddleware); // backend console does not crashed => custom error handling middleware

export default app;
