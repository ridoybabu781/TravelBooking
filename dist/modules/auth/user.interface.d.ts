import type { Document } from "mongoose";
type Role = "user" | "admin";
export interface IUser extends Document {
    name: String;
    email: String;
    password: String;
    phone?: String;
    role: Role;
    createdAt: Date;
}
export {};
//# sourceMappingURL=user.interface.d.ts.map