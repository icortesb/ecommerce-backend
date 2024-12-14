import ProductService from "../../services/product.service.js";

class ProductManager {
    constructor() {
        this.productService = new ProductService();
    }

    async createProduct(req, res) {
        try {
            const product = req.body;
            const newProduct = await this.productService.createProduct(product);
            res.status(201).json(newProduct);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }

    async getProducts(req, res) {
        try {
            const products = await this.productService.getProducts();
            res.status(200).json(products);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }

    async getProductById(req, res) {
        try {
            const { id } = req.params;
            const product = await this.productService.getProductById(id);
            res.status(200).json(product);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }

    async updateProduct(req, res) {
        try {
            const { id } = req.params;
            const product = req.body;
            const updatedProduct = await this.productService.updateProduct(id, product);
            res.status(200).json(updatedProduct);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }

    async deleteProduct(req, res) {
        try {
            const { id } = req.params;
            await this.productService.deleteProduct(id);
            res.status(204).end();
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }
}