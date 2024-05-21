import {z} from "zod";


const createTaskDTO = z.object({
    title: z.string().min(3).max(128),
    status: z.enum(["ongoing", "completed"]).default("ongoing"),
    priority: z.number().min(1).max(10),
    description: z.string().min(3).max(255).optional(),
})

export type CreateTaskDTO = z.infer<typeof createTaskDTO>;