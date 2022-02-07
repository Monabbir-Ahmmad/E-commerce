import express from "express";
import {
  authUser,
  getUserProfile,
  registerUser,
  updateUserProfile,
} from "../controllers/userController.js";
import { protect } from "../middleware/authMiddleware.js";

const userRouter = express.Router();

userRouter.route("/login").post(authUser);

userRouter.route("/").post(registerUser);

userRouter
  .route("/profile")
  .get(protect, getUserProfile)
  .patch(protect, updateUserProfile);

export default userRouter;
