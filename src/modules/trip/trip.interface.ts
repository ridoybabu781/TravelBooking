import type { Types } from "mongoose";

export interface ITrip {
  title: String;
  description: String;
  price: Number;
  duration: String;
  destination: Types.ObjectId;
  activities: Types.ObjectId[];
  startDate: Date;
  endDate: Date;
  image: String;
  createdAt: Date;
}
