import Product from "../dao/mongo/models/product.model.js";
import { isEmpty } from "../utils/utils.js";

class ProductService {
    constructor(productDao) {
        this.productDao = productDao;        
    }

    async createProduct(product) {
        try {
            if (!product) {
                throw new Error("Product is required");
            }

            switch (true) {
                case isEmpty(product.name):
                    throw new Error("Name is required");
                case isEmpty(product.description):
                    throw new Error("Description is required");
                case isEmpty(product.price):
                    throw new Error("Price is required");
                case isEmpty(product.stock):
                    throw new Error("Stock is required");
                case isEmpty(product.image):
                    throw new Error("Image is required");
            }

            return await Product.create(product);
        } catch (error) {
            console.error("An error ocurred while creating a product:", error);
            throw error;
        }
    }

    async getProducts() {
        try {
            return await Product.find();
        } catch (error) {
            console.error("An error ocurred while getting products:", error);
            throw error;
        }
    }

    async getProductById(id) {
        try {
            return await Product.findById(id).populate("category");
        } catch (error) {
            console.error(
                "An error ocurred while getting a product by id:",
                error
            );
            throw error;
        }
    }

    async updateProduct(id, product) {
        try {
            if (!product) {
                throw new Error("Product is required");
            }

          switch (true) {
                case isEmpty(product.name):
                    throw new Error("Name is required");
                case isEmpty(product.description):
                    throw new Error("Description is required");
                case isEmpty(product.price):
                    throw new Error("Price is required");
                case isEmpty(product.stock):
                    throw new Error("Stock is required");
                case isEmpty(product.image):
                    throw new Error("Image is required");
            }

            return await Product.findByIdAndUpdate(id, product, { new: true });
        } catch (error) {
            console.error("An error ocurred while updating a product:", error);
            throw error;
        }
    }

    async deleteProduct(id) {
        try {
            return await Product.findByIdAndDelete(id);
        } catch (error) {
            console.error("An error ocurred while deleting a product:", error);
            throw error;
        }
    }
}

export default ProductService;