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
        const { user, password } = req.body;
        try {
            const userFound = await this.userService.getUserByEmail(user);
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
}

export default UserController;