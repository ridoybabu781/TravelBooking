import z from "zod";
export const UserSchema = z.object({
    body: z.object({
        name: z.string().min(1, "Name is required"),
        email: z.email().min(1, "Email is required"),
        password: z
            .string()
            .min(6, "Password length cannot be less than 6 character"),
        role: z.enum(["user", "admin"]).default("user"),
    }),
});
export const LoginSchema = z.object({
    body: z.object({
        email: z.email().min(1, "Email is required"),
        password: z.string().min(6),
    }),
});
//# sourceMappingURL=user.validator.js.map