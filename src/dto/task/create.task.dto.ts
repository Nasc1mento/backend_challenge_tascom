import {z} from "zod";

export const createTaskDTOSchema = z.object({
    title: z.string().min(3).max(128),
    status: z.enum(["ongoing", "completed"]).default("ongoing"),
    priority: z.number().min(1).max(10),
    description: z.string().min(3).max(255).optional(),
    user:z.string(),
})

export type CreateTaskDTO = z.infer<typeof createTaskDTOSchema>;