import { User } from "../models/userSchema.js";
import { catchAsyncErrors } from "./catchAsyncError.js";
import ErrorHandler from "./error.js";
import jwt from "jsonwebtoken";

export const isAuthenticated = catchAsyncErrors(async (req, res, next) => {
  const { token } = req.cookies;
  if (!token) {
    return next(new ErrorHandler("User Not Authorized", 401));
  }
  const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);

  req.user = await User.findById(decoded.id);

  next();
});

// export const isAuthenticated = catchAsyncErrors(async (req, res, next) => {
  
//   const { token } = req.cookies;

//   console.log(token);

//   if (!token) {
//     return next(new ErrorHandler("User Not Authorized", 401));
//   }

//   jwt.verify(token, process.env.JWT_SECRET_KEY, async (err, decoded) => {

//     if (err) {
//       return next(new ErrorHandler("Invalid Token", 401));
//     }

//     try {
//       const user = await User.findById(decoded.id);

//       if (!user) {
//         return next(new ErrorHandler("User Not Found", 404));
//       }

//       req.user = user;
//       next();
//     } catch (error) {
//       return next(new ErrorHandler("Error finding user", 500));
//     }
//   });
  
// });


