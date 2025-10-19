import z from "zod";

export const TripSchema = z.object({
  body: z.object({
    title: z.string().min(1),
    description: z.string().min(1),
    price: z.string,
    duration: z.string().min(1),
    destination: z.string(),
    activities: z.string(),
    startDate: z.date(),
    endDate: z.date(),
    image: z.string().min(1),
    createdAt: z.date().optional(),
  }),
});
