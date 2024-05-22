import {z} from "zod";

export const updateTagDTOSchema = z.object({
    name: z.string().min(3).max(128).optional(),
    color: z.string().optional(),
})

export type UpdateTagDto = z.infer<typeof updateTagDTOSchema>;