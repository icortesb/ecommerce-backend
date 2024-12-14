import { Router } from "express";
import ProductController from "../dao/mongo/controllers/product.controller.js";

const productRouter = Router();
const productController = new ProductController();

productRouter.get("/allProducts", productController.getProducts);
productRouter.get("/:id", productController.getProductById);
productRouter.post("/", productController.createProduct);
productRouter.put("/:id", productController.updateProduct);
productRouter.delete("/:id", productController.deleteProduct);

export default productRouter;