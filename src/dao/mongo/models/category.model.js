import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        enum: ["Electronics, Clothing, Shoes, Books, Movies, Music, Home, Garden, Tools, Grocery, Beauty, Health, Toys, Kids, Baby, Food, Household, Pets, Handmade, Sports, Outdoors, Automotive, Industrial"]
    }
});

const Category = mongoose.model("Category", categorySchema);

export default Category;
