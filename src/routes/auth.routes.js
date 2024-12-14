import { Router } from "express";
import UserController from "../dao/mongo/controllers/user.controller.js";

const authRouter = Router();

const userController = new UserController();

authRouter.post("/register", userController.registerUser);
authRouter.post("/login", userController.loginUser);
authRouter.post("/logout", userController.logoutUser);

export { authRouter };