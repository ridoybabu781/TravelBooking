import { model, Schema } from "mongoose";
import type { IDestination } from "./destination.interface.js";

const destinationSchema = new Schema<IDestination>({
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
  location: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export const Destination = model("Destination", destinationSchema);
