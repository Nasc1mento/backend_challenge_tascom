import {z} from "zod";

const updateTagDTO = z.object({
    name: z.string().min(3).max(128).optional(),
    color: z.string().optional(),
})

export type UpdateTagDto = z.infer<typeof updateTagDTO>;