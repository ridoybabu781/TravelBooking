import type { Request } from "express";
export declare const DestinationService: {
    createDestination: (req: Request) => Promise<{
        success: boolean;
        message: string;
        destination: import("mongoose").Document<unknown, {}, import("./destination.interface.js").IDestination, {}, import("mongoose").DefaultSchemaOptions> & import("./destination.interface.js").IDestination & {
            _id: import("mongoose").Types.ObjectId;
        } & {
            __v: number;
        };
    }>;
    getDestinations: (req: Request) => Promise<{
        success: boolean;
        message: string;
        destinations: (import("mongoose").Document<unknown, {}, import("./destination.interface.js").IDestination, {}, import("mongoose").DefaultSchemaOptions> & import("./destination.interface.js").IDestination & {
            _id: import("mongoose").Types.ObjectId;
        } & {
            __v: number;
        })[];
    }>;
    getDestination: (req: Request) => Promise<{
        success: boolean;
        message: string;
        destination: import("mongoose").Document<unknown, {}, import("./destination.interface.js").IDestination, {}, import("mongoose").DefaultSchemaOptions> & import("./destination.interface.js").IDestination & {
            _id: import("mongoose").Types.ObjectId;
        } & {
            __v: number;
        };
    }>;
    updateDestination: (req: Request) => Promise<{
        success: boolean;
        message: string;
        destination: import("mongoose").Document<unknown, {}, import("./destination.interface.js").IDestination, {}, import("mongoose").DefaultSchemaOptions> & import("./destination.interface.js").IDestination & {
            _id: import("mongoose").Types.ObjectId;
        } & {
            __v: number;
        };
    }>;
    deleteDestination: (req: Request) => Promise<{
        success: boolean;
        message: string;
        destination: import("mongoose").Document<unknown, {}, import("./destination.interface.js").IDestination, {}, import("mongoose").DefaultSchemaOptions> & import("./destination.interface.js").IDestination & {
            _id: import("mongoose").Types.ObjectId;
        } & {
            __v: number;
        };
    }>;
};
//# sourceMappingURL=destination.service.d.ts.map