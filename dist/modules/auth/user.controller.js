import { UserService } from "./user.service.js";
import createHttpError from "http-errors";
export const createUser = async (req, res, next) => {
    try {
        const result = await UserService.SSignup(req);
        res.status(201).json(result);
    }
    catch (error) {
        next(error);
    }
};
export const loginUser = async (req, res, next) => {
    try {
        const result = await UserService.SLogin(req);
        if (!result) {
            throw createHttpError(400, "Something went wrong in login");
        }
        res
            .status(201)
            .cookie("token", result.token, {
            httpOnly: true,
            sameSite: "none",
            secure: false,
        })
            .json(result);
    }
    catch (error) {
        next(error);
    }
};
//# sourceMappingURL=user.controller.js.map