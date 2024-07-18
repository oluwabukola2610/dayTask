import { z } from "zod";

export const schema = z.object({
  name: z
    .string()
    .min(2, "title must be at least 2 characters")
    .max(50, "title must be less than 50 characters"),
  category: z
    .string()
    .min(2, "category must be at least 2 characters")
    .max(50, "category must be less than 50 characters"),
  description: z
    .string()
    .min(10, "Description must be at least 10 characters")
    .max(200, "Description must be less than 200 characters"),
  startDate: z.date(),
});
