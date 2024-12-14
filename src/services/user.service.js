import User from "../dao/mongo/models/user.model.js";
import {
    isEmpty,
    hashPassword,
    validateEmail,
    validatePassword,
} from "../utils/utils.js";

class UserService {
    constructor(userDao) {
        this.userDao = userDao;
    }

    async createUser(user) {
        try {
            if (!user) {
                throw new Error("User is required");
            }

            switch (true) {
                case isEmpty(user.name):
                    throw new Error("Name is required");
                case isEmpty(user.email):
                    throw new Error("Email is required");
                case !validateEmail(user.email):
                    throw new Error("Invalid email");
                case isEmpty(user.password):
                    throw new Error("Password is required");
                case !validatePassword(user.password):
                    throw new Error("Password must have at least 8 characters");
            }

            user.password = await hashPassword(user.password);
            return await User.create(user);
        } catch (error) {
            console.error("An error ocurred while creating a user:", error);
            throw error;
        }
    }

    async getUsers() {
        try {
            return await User.find();
        } catch (error) {
            console.error("An error ocurred while getting users:", error);
            throw error;
        }
    }

    async getUserById(id) {
        try {
            return await User.findById(id);
        } catch (error) {
            console.error(
                "An error ocurred while getting a user by id:",
                error
            );
            throw error;
        }
    }

    async getUserByEmail(email) {
        try {
            return await User.findOne({email});
        } catch (error) {
            console.error(
                "An error ocurred while getting a user by email:",
                error
            );
            throw error;
        }
    }

    async getUserByUsername(username) {
        try {
            return await User.findOne({username});
        } catch (error) {
            console.error(
                "An error ocurred while getting a user by username:",
                error
            );
            throw error;
        }
    }

    async updateUser(id, user) {
        try {
            if (!user) {
                throw new Error("User is required");
            }

            switch (true) {
                case isEmpty(user.username):
                    throw new Error("Username is required");
                case isEmpty(user.name):
                    throw new Error("Name is required");
                case isEmpty(user.email):
                    throw new Error("Email is required");
                case isEmpty(user.password):
                    throw new Error("Password is required");
                case !validateEmail(user.email):
                    throw new Error("Invalid email");
                case !validatePassword(user.password):
                    throw new Error("Password must have at least 8 characters");
            }

            user.password = await hashPassword(user.password);
            return await User.findByIdAndUpdate(id, user, {new: true});
        } catch (error) {
            console.error("An error ocurred while updating a user:", error);
            throw error;
        }
    }

    async deleteUser(id) {
        try {
            return await User.findByIdAndDelete(id);
        } catch (error) {
            console.error("An error ocurred while deleting a user:", error);
            throw error;
        }
    }
}

export default UserService;
