import {z} from "zod";

export const updateTaskDTOSchema = z.object({
    title: z.string().min(3).max(128).optional(),
    status: z.enum(["ongoing", "completed"]).optional(),
    priority: z.number().min(1).max(10).optional(),
    description: z.string().min(3).max(255).optional(),
})

export type UpdateTaskDTO = z.infer<typeof updateTaskDTOSchema>;