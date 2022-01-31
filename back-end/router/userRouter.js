import express from "express";
import { authUser, getUserProfile } from "../controllers/userController.js";
import { protectProfile } from "../middleware/authMiddleware.js";

const userRouter = express.Router();

userRouter.route("/login").post(authUser);
userRouter.route("/profile").get(protectProfile, getUserProfile);

export default userRouter;
