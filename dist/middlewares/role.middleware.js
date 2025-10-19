import createHttpError from "http-errors";
export const checkRole = (...role) => {
    return (req, res, next) => {
        try {
            const user = req.user;
            if (!role.includes(user.role)) {
                throw createHttpError(401, "Unauthorized user");
            }
            next();
        }
        catch (error) {
            next(error);
        }
    };
};
//# sourceMappingURL=role.middleware.js.map