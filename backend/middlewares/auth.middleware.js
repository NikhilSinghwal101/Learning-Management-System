import jwt from 'jsonwebtoken';
import AppError from "../utils/appError.js";
import asyncHandler from "./asyncHandler.middleware.js";
// import { config } from 'dotenv';
// config();

export const isLoggedIn = asyncHandler(async (req, _res, next) => {
    // console.log("req.cookies", req.cookies);
    const { token } = req.cookies;
    console.log("token: ", token);

    if(!token) {
        return next(new AppError("Unauthorized, please login to continue", 401));
    }

    const decodedToken = jwt.verify(token, process.env.JWT_SECRET); 

    // console.log("decodedToken: ", decodedToken);

    if(!decodedToken) {
        return next(new AppError("Unauthorized, please login to continue", 401));
    }

    req.user = decodedToken;

    next();

});