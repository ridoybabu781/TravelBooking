import { Router } from "express";
import { isUser } from "../../middlewares/user.middleware.js";
import { checkRole } from "../../middlewares/role.middleware.js";
import { createTrip, deleteTrip, getTrip, getTrips, updateTrip, } from "./trip.controller.js";
import { validator } from "../../middlewares/validator.js";
import { TripSchema } from "./trip.validator.js";
const router = Router();
router.post("/addTrip", isUser, checkRole("admin"), validator(TripSchema), createTrip);
router.get("/getTrips", getTrips);
router.get("/getTrip/:id", getTrip);
router.put("/updateTrip/:id", isUser, checkRole("admin"), validator(TripSchema), updateTrip);
router.delete("/deleteTrip/:id", isUser, checkRole("admin"), deleteTrip);
export const TripRouter = router;
//# sourceMappingURL=trip.routes.js.map