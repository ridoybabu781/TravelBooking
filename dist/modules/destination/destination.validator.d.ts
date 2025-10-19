import z from "zod";
export declare const DestinationSchema: z.ZodObject<{
    body: z.ZodObject<{
        name: z.ZodString;
        description: z.ZodString;
        image: z.ZodString;
        location: z.ZodString;
        createdAt: z.ZodOptional<z.ZodDate>;
    }, z.z.core.$strip>;
}, z.z.core.$strip>;
//# sourceMappingURL=destination.validator.d.ts.map