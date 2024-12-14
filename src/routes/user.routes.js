import { Router } from "express";
import UserController from "../dao/mongo/controllers/user.controller.js";
import checkRole from "../middleware/checkRole.js";

const userRouter = Router();

const userController = new UserController();

userRouter.delete("/:id", checkRole(['superadmin']), userController.deleteUser);


export default userRouter;