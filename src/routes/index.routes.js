import { Router } from "express";
import productRouter from "./product.routes.js";
import authRouter from "./auth.routes.js";
import userRouter from "./user.routes.js";
import mailRouter from "./mail.routes.js";

const router = Router();

router.get("/", (req, res) => {
    res.send("Welcome to the E-commerce API");
    });
router.use("/auth", authRouter);
router.use("/api/products", productRouter);
router.use("/api/users", userRouter);
router.use("api/mail", mailRouter);

export default router;