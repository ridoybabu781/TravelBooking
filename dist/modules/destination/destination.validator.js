import z from "zod";
export const DestinationSchema = z.object({
    body: z.object({
        name: z.string().min(1),
        description: z.string().min(1),
        image: z.string().min(1),
        location: z.string().min(1),
        createdAt: z.date().optional(),
    }),
});
//# sourceMappingURL=destination.validator.js.map