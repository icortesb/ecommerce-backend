import {Router} from "express";
import UserController from "../dao/mongo/controllers/user.controller.js";
import checkRole from "../middleware/checkRole.js";
import User from "../dao/mongo/models/user.model.js";

const userRouter = Router();

const userController = new UserController();

userRouter.get("/test", async (req, res) => {
    try {
        const user = await User.findById("675ce2654960cc2e313b05e3");
        res.status(200).send(`User: ${user}`);
    } catch (err) {
        res.status(500).send(`Error: ${err}`);
    }
});

userRouter.delete("/:id", checkRole(["superadmin"]), userController.deleteUser);

export default userRouter;
