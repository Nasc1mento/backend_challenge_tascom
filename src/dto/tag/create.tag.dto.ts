import {z} from 'zod';

export const createTagDTOSchema = z.object({
    name: z.string().min(3).max(128),
    color: z.string().optional(),
})

export type CreateTagDTO = z.infer<typeof createTagDTOSchema>