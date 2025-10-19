import { model, Schema } from "mongoose";
import type { IActivity } from "./activity.interface.js";

const ActivitySchema = new Schema<IActivity>({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  createdAt: { type: Date, default: Date.now },
});

export const Activity = model("Activity", ActivitySchema);
