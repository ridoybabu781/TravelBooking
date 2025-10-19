import z from "zod";
export declare const TripSchema: z.ZodObject<{
    body: z.ZodObject<{
        title: z.ZodString;
        description: z.ZodString;
        price: typeof z.string;
        duration: z.ZodString;
        destination: z.ZodString;
        activities: z.ZodString;
        startDate: z.ZodDate;
        endDate: z.ZodDate;
        image: z.ZodString;
        createdAt: z.ZodOptional<z.ZodDate>;
    }, z.z.core.$strip>;
}, z.z.core.$strip>;
//# sourceMappingURL=trip.validator.d.ts.map