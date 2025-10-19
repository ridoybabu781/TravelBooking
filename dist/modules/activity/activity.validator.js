import z from "zod";
export const ActivitySchema = z.object({
    body: z.object({
        name: z.string().min(1, "Name is required"),
        description: z.string().min(1, "Description is required"),
        image: z.string().min(1, "image is required"),
        createdAt: z.date().optional(),
    }),
});
//# sourceMappingURL=activity.validator.js.map