import type { Request } from "express";
import type { IUser } from "./user.interface.js";
export declare const UserService: {
    SSignup: (req: Request) => Promise<{
        success: boolean;
        message: string;
        user: import("mongoose").Document<unknown, {}, IUser, {}, import("mongoose").DefaultSchemaOptions> & IUser & Required<{
            _id: unknown;
        }> & {
            __v: number;
        };
    }>;
    SLogin: (req: Request) => Promise<{
        success: boolean;
        message: string;
        user: IUser & Required<{
            _id: unknown;
        }> & {
            __v: number;
        };
        token: string;
    }>;
};
//# sourceMappingURL=user.service.d.ts.map