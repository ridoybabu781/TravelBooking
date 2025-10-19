import type { Types } from "mongoose";

export interface IBooking {
  user: Types.ObjectId;
  trip: Types.ObjectId;
  nidNumber: String;
  bookingDate: Date;
  status: "pending" | "confirmed" | "cancelled";
}
