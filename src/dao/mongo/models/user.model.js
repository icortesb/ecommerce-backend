import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    role: {
        type: String,
        default: "user",
        enum: ["user", "admin", "superadmin"]
    },
    lastConnection: {
        type: Date,
        default: Date.now
    }
},
{
    timestamps: true,
    versionKey: false,
    strict: false,
}
);

const User = mongoose.model("User", userSchema);

export default User;