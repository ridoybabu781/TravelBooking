import { Router } from "express";
import { isUser } from "../../middlewares/user.middleware.js";
import { checkRole } from "../../middlewares/role.middleware.js";
import {
  createDestination,
  deleteDestination,
  getDestination,
  getDestinations,
  updateDestination,
} from "./destination.controller.js";
import { validator } from "../../middlewares/validator.js";
import { DestinationSchema } from "./destination.validator.js";
const router = Router();

router.post(
  "/addDestination",
  isUser,
  checkRole("admin"),
  validator(DestinationSchema),
  createDestination
);
router.get("/getDestinations", getDestinations);
router.get("/getDestination/:id", getDestination);
router.put(
  "/updateDestination/:id",
  isUser,
  checkRole("admin"),
  validator(DestinationSchema),
  updateDestination
);
router.delete(
  "/deleteDestination/:id",
  isUser,
  checkRole("admin"),
  deleteDestination
);

export const DestinationRouter = router;
