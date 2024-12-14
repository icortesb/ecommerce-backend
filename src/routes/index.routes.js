import { Router } from "express";
import { productRouter } from "./product.routes.js";
import { authRouter } from "./auth.routes.js";

const router = Router();

router.use("/api/products", productRouter);
router.use("/auth", authRouter);

export { router };