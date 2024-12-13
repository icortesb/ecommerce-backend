import mongoose from "mongoose";

class Database {
    static #instance;

    constructor() {
        this.connect();
    }

    async connect() {
        try {
            await mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@ecommerce.lbwne.mongodb.net/ecommerce`);
            console.log("Conexión exitosa a la base de datos");
        } catch (error) {
            console.error("Error al conectar a la base de datos:", error);
        }
    }

    static getInstance() {
        if (!this.#instance) {
            this.#instance = new Database();
        }
        return this.#instance;
    }
}

export default Database;