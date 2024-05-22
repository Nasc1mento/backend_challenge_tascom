import {z} from 'zod';

export const createTagDTO = z.object({
    name: z.string().min(3).max(128),
    color: z.string().optional(),
})

export type CreateTagDTO = z.infer<typeof createTagDTO>