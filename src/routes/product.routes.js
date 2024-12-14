import { Router } from "express";
import ProductController from "../dao/mongo/controllers/product.controller.js";
import checkRole from "../middleware/checkRole.js";

const productRouter = Router();
const productController = new ProductController();

productRouter.get("/allProducts", productController.getProducts);
productRouter.get("/:id", productController.getProductById);
productRouter.post("/", checkRole(['admin', 'superadmin']), productController.createProduct);
productRouter.put("/:id", checkRole(['admin', 'superadmin']), productController.updateProduct);
productRouter.delete("/:id", checkRole(['admin', 'superadmin']), productController.deleteProduct);

export default productRouter;