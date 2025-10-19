import type { Request } from "express";
export declare const TripService: {
    createTrip: (req: Request) => Promise<{
        success: boolean;
        message: string;
        trip: import("mongoose").Document<unknown, {}, import("./trip.interface.js").ITrip, {}, import("mongoose").DefaultSchemaOptions> & import("./trip.interface.js").ITrip & {
            _id: import("mongoose").Types.ObjectId;
        } & {
            __v: number;
        };
    }>;
    getTrips: (req: Request) => Promise<{
        success: boolean;
        message: string;
        trips: (import("mongoose").Document<unknown, {}, import("./trip.interface.js").ITrip, {}, import("mongoose").DefaultSchemaOptions> & import("./trip.interface.js").ITrip & {
            _id: import("mongoose").Types.ObjectId;
        } & {
            __v: number;
        })[];
    }>;
    getTrip: (req: Request) => Promise<{
        success: boolean;
        message: string;
        trip: import("mongoose").Document<unknown, {}, import("./trip.interface.js").ITrip, {}, import("mongoose").DefaultSchemaOptions> & import("./trip.interface.js").ITrip & {
            _id: import("mongoose").Types.ObjectId;
        } & {
            __v: number;
        };
    }>;
    updateTrip: (req: Request) => Promise<{
        success: boolean;
        message: string;
        trip: import("mongoose").Document<unknown, {}, import("./trip.interface.js").ITrip, {}, import("mongoose").DefaultSchemaOptions> & import("./trip.interface.js").ITrip & {
            _id: import("mongoose").Types.ObjectId;
        } & {
            __v: number;
        };
    }>;
    deleteTrip: (req: Request) => Promise<{
        success: boolean;
        message: string;
        trip: import("mongoose").Document<unknown, {}, import("./trip.interface.js").ITrip, {}, import("mongoose").DefaultSchemaOptions> & import("./trip.interface.js").ITrip & {
            _id: import("mongoose").Types.ObjectId;
        } & {
            __v: number;
        };
    }>;
};
//# sourceMappingURL=trip.service.d.ts.map