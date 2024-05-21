import mongoose from "mongoose";
import {z} from "zod";
import { TagDTOSchema } from "../tag/tag.dto";

const taskDTOSchema = z.object({
    _id: z.custom<mongoose.Types.ObjectId>(),
    title: z.string().min(3).max(128),
    status: z.enum(["ongoing", "completed"]).default("ongoing"),
    priority: z.number().min(1).max(10),
    description: z.string().min(3).max(255).optional(),
    tags: z.array(TagDTOSchema),
});

export type TaskDTO = z.infer<typeof taskDTOSchema>;