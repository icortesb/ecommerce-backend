import { Router } from "express";
import UserController from "../dao/mongo/controllers/user.controller.js";
import rotateIdSession from "../middleware/rotateIdSession.js";

const authRouter = Router();

const userController = new UserController();

authRouter.post("/register", userController.registerUser);
authRouter.post("/login", rotateIdSession, userController.loginUser);
authRouter.post("/logout", userController.logoutUser);

export default authRouter;