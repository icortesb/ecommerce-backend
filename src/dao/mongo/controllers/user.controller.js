import UserService from "../../../services/user.service.js";
import { comparePasswords } from "../../../utils/utils.js";

class UserController {
    constructor() {
        this.userService = new UserService();        
    }

    registerUser = async (req, res) => {
        try {
            const user = req.body;
            const newUser = await this.userService.createUser(user);
            res.status(201).json(newUser);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    };

    loginUser = async (req, res) => {
        const { username, password } = req.body;
        try {
            const userFound = await this.userService.getUserByUsername(username);
            if (!userFound) {
                throw new Error("User not found");
            }

            const validPassword = await comparePasswords(password, userFound.password);

            if (!validPassword) {
                throw new Error("Invalid password");
            }

            req.session.user = userFound._id;
            res.status(200).json({ message: "User logged in" });
        }
        catch (error) {
            res.status(400).json({ message: error.message });
        }
    }

    logoutUser = (req, res) => {
        req.session.destroy();
        res.status(200).json({ message: "User logged out" });
    }

    deleteUser = async (req, res) => {
        try {
            const { id } = req.params;
            await this.userService.deleteUser(id);
            res.status(200).json({ message: "User deleted" });
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }
}

export default UserController;