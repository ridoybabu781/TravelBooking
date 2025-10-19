import { createRequire as _createRequire } from "module";
const __require = _createRequire(import.meta.url);
const express = __require("express");
import cookieParser from "cookie-parser";
import cors from "cors";
import { dotenv } from "./config/dotenv.js";
import { handleError } from "./middlewares/handleError.js";
import { UserRouter } from "./modules/auth/user.routes.js";
import { ActivityRouter } from "./modules/activity/activity.routes.js";
import { DestinationRouter } from "./modules/destination/destination.routes.js";
import { TripRouter } from "./modules/trip/trip.routes.js";
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
    origin: dotenv.origin,
    credentials: true,
}));
app.use(cookieParser());
app.use("/api/auth", UserRouter);
app.use("/api/activity", ActivityRouter);
app.use("/api/destination", DestinationRouter);
app.use("/api/trip", TripRouter);
//global error
app.use(handleError);
export default app;
//# sourceMappingURL=app.js.map