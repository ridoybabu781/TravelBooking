import { model, Schema } from "mongoose";
import type { ITrip } from "./trip.interface.js";

const tripSchema = new Schema<ITrip>({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  duration: {
    type: String,
    required: true,
  },
  destination: {
    type: Schema.Types.ObjectId,
    ref: "Destination",
  },
  activities: [
    {
      type: Schema.Types.ObjectId,
      ref: "Activity",
    },
  ],
  startDate: {
    type: Date,
    required: true,
  },

  endDate: {
    type: Date,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  createdAt: { type: Date, default: Date.now },
});

export const Trip = model("Trip", tripSchema);
