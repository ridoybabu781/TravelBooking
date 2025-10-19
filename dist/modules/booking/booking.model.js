import { model, Schema } from "mongoose";
const bookingSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
    },
    trip: {
        type: Schema.Types.ObjectId,
        ref: "Trip",
    },
    nidNumber: {
        type: String,
        required: true,
    },
    bookingDate: {
        type: Date,
        default: Date.now(),
    },
    status: {
        type: String,
        enum: ["pending", "confirmed", "cancelled"],
        default: "pending",
    },
});
export const Booking = model("Booking", bookingSchema);
//# sourceMappingURL=booking.model.js.map