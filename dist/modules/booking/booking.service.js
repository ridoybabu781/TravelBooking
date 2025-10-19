import { Booking } from "./booking.model.js";
import createHttpError from "http-errors";
const addBooking = async (req) => {
    const tripId = req.params.id;
    const booking = await Booking.create({
        ...req.body,
        user: req.user._id,
        trip: tripId,
    });
    if (!booking) {
        throw createHttpError(400, "Failed to book the trip");
    }
    return {
        success: true,
        message: "Trip added successfully",
        booking,
    };
};
const getMyBookings = async (req) => {
    const userId = req.user._id;
    const bookings = await Booking.find({ user: userId });
    if (!bookings || bookings.length === 0) {
        throw createHttpError(404, "No Bookings Available");
    }
    return {
        success: true,
        message: "Booking fetched successfully",
    };
};
export const BookingService = {
    addBooking,
};
//# sourceMappingURL=booking.service.js.map