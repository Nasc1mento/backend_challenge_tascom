
import mongoose from 'mongoose';
import {z} from 'zod';

export const TagDTOSchema = z.object({
    _id: z.custom<mongoose.Types.ObjectId>(),
    name: z.string().min(3).max(128),
    color: z.string().optional(),
})

export type TagDTO = z.infer<typeof TagDTOSchema>