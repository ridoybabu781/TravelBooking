import z from "zod";
export declare const UserSchema: z.ZodObject<{
    body: z.ZodObject<{
        name: z.ZodString;
        email: z.ZodEmail;
        password: z.ZodString;
        role: z.ZodDefault<z.ZodEnum<{
            user: "user";
            admin: "admin";
        }>>;
    }, z.z.core.$strip>;
}, z.z.core.$strip>;
export declare const LoginSchema: z.ZodObject<{
    body: z.ZodObject<{
        email: z.ZodEmail;
        password: z.ZodString;
    }, z.z.core.$strip>;
}, z.z.core.$strip>;
//# sourceMappingURL=user.validator.d.ts.map