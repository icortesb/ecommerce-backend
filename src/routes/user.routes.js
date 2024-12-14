import { Router } from "express";
import UserController from "../dao/mongo/controllers/user.controller.js";

const userRouter = Router();

const userController = new UserController();

userRouter.delete("/:id", userController.deleteUser);


export default userRouter;