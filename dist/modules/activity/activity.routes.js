import { Router } from "express";
import { isUser } from "../../middlewares/user.middleware.js";
import { checkRole } from "../../middlewares/role.middleware.js";
import { createActivity, deleteActivity, getActivity, getActivities, updateActivity, } from "./activity.controller.js";
import { validator } from "../../middlewares/validator.js";
import { ActivitySchema } from "./activity.validator.js";
const router = Router();
router.post("/addActivity", isUser, checkRole("admin"), validator(ActivitySchema), createActivity);
router.get("/getActivitys", getActivities);
router.get("/getActivity/:id", getActivity);
router.put("/updateActivity/:id", isUser, checkRole("admin"), validator(ActivitySchema), updateActivity);
router.delete("/deleteActivity/:id", isUser, checkRole("admin"), deleteActivity);
export const ActivityRouter = router;
//# sourceMappingURL=activity.routes.js.map