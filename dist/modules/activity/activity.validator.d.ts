import z from "zod";
export declare const ActivitySchema: z.ZodObject<{
    body: z.ZodObject<{
        name: z.ZodString;
        description: z.ZodString;
        image: z.ZodString;
        createdAt: z.ZodOptional<z.ZodDate>;
    }, z.z.core.$strip>;
}, z.z.core.$strip>;
//# sourceMappingURL=activity.validator.d.ts.map