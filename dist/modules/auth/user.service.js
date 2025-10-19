import { User } from "./user.model.js";
import createHttpError from "http-errors";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { dotenv } from "../../config/dotenv.js";
const SSignup = async (req) => {
    const hashedPass = await bcrypt.hash(req.body.password, 10);
    const user = await User.create({ ...req.body, password: hashedPass });
    if (!user) {
        throw createHttpError(400, "User creation failed");
    }
    return {
        success: true,
        message: "User created successfully",
        user,
    };
};
const SLogin = async (req) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
        throw createHttpError(404, "user not found");
    }
    const isPassValid = bcrypt.compare(password, user?.password);
    if (!isPassValid) {
        throw createHttpError(400, "Invalid password");
    }
    const token = jwt.sign({ id: user._id, role: user.role }, dotenv.jwt_secret, { expiresIn: "1d" });
    const userData = user.toObject();
    delete userData.password;
    return {
        success: true,
        message: "Loggedin successfully",
        user: userData,
        token,
    };
};
export const UserService = {
    SSignup,
    SLogin,
};
//# sourceMappingURL=user.service.js.map