import mongoose from "mongoose";
import {z} from "zod";

export const taskDTOSchema = z.object({
    _id: z.custom<mongoose.Types.ObjectId>(),
    title: z.string().min(3).max(128),
    status: z.enum(["ongoing", "completed"]).default("ongoing"),
    priority: z.number().min(1).max(10),
    description: z.string().min(3).max(255).optional(),
    user: z.string(),
    tags: (z.array(z.string())),
});

export type TaskDTO = z.infer<typeof taskDTOSchema>;