import type { Request } from "express";
export declare const ActivityService: {
    createActivity: (req: Request) => Promise<{
        success: boolean;
        message: string;
        activity: import("mongoose").Document<unknown, {}, import("./activity.interface.js").IActivity, {}, import("mongoose").DefaultSchemaOptions> & import("./activity.interface.js").IActivity & {
            _id: import("mongoose").Types.ObjectId;
        } & {
            __v: number;
        };
    }>;
    getActivities: (req: Request) => Promise<{
        success: boolean;
        message: string;
        activities: (import("mongoose").Document<unknown, {}, import("./activity.interface.js").IActivity, {}, import("mongoose").DefaultSchemaOptions> & import("./activity.interface.js").IActivity & {
            _id: import("mongoose").Types.ObjectId;
        } & {
            __v: number;
        })[];
    }>;
    getActivity: (req: Request) => Promise<{
        success: boolean;
        message: string;
        activity: import("mongoose").Document<unknown, {}, import("./activity.interface.js").IActivity, {}, import("mongoose").DefaultSchemaOptions> & import("./activity.interface.js").IActivity & {
            _id: import("mongoose").Types.ObjectId;
        } & {
            __v: number;
        };
    }>;
    updateActivity: (req: Request) => Promise<{
        success: boolean;
        message: string;
        activity: import("mongoose").Document<unknown, {}, import("./activity.interface.js").IActivity, {}, import("mongoose").DefaultSchemaOptions> & import("./activity.interface.js").IActivity & {
            _id: import("mongoose").Types.ObjectId;
        } & {
            __v: number;
        };
    }>;
    deleteActivity: (req: Request) => Promise<{
        success: boolean;
        message: string;
        activity: import("mongoose").Document<unknown, {}, import("./activity.interface.js").IActivity, {}, import("mongoose").DefaultSchemaOptions> & import("./activity.interface.js").IActivity & {
            _id: import("mongoose").Types.ObjectId;
        } & {
            __v: number;
        };
    }>;
};
//# sourceMappingURL=activity.service.d.ts.map