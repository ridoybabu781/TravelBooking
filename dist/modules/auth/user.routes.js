import { Router } from "express";
import { createUser, loginUser } from "./user.controller.js";
import { validator } from "../../middlewares/validator.js";
import { LoginSchema, UserSchema } from "./user.validator.js";
const router = Router();
router.post("/signup", validator(UserSchema), createUser);
router.post("/login", validator(LoginSchema), loginUser);
export const UserRouter = router;
//# sourceMappingURL=user.routes.js.map