import {z} from 'zod';

export const tagDTOSchema = z.object({
    id: z.string(),
    name: z.string().min(3).max(128),
    color: z.string().optional(),
    user: z.string(),
})

export type TagDTO = z.infer<typeof tagDTOSchema>