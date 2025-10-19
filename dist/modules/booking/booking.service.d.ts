import type { Request } from "express";
export declare const BookingService: {
    addBooking: (req: Request) => Promise<{
        success: boolean;
        message: string;
        booking: import("mongoose").Document<unknown, {}, import("./booking.interface.js").IBooking, {}, import("mongoose").DefaultSchemaOptions> & import("./booking.interface.js").IBooking & {
            _id: import("mongoose").Types.ObjectId;
        } & {
            __v: number;
        };
    }>;
};
//# sourceMappingURL=booking.service.d.ts.map