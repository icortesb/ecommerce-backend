import { Router } from "express";
import { productRouter } from "./product.routes.js";

const router = Router();

router.use("/api/products", productRouter);

export { router };