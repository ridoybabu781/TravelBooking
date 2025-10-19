import createHttpError from "http-errors";
import jwt from "jsonwebtoken";
import { dotenv } from "../config/dotenv.js";
import { User } from "../modules/auth/user.model.js";
export const isUser = async (req, res, next) => {
    try {
        const token = req.cookies.token;
        if (!token) {
            throw createHttpError(401, "Login first");
        }
        const decoded = jwt.verify(token, dotenv.jwt_secret);
        const user = await User.findById(decoded.id);
        req.user = user;
    }
    catch (error) {
        next(error);
    }
};
//# sourceMappingURL=user.middleware.js.map