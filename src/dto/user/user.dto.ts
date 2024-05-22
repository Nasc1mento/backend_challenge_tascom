import mongoose from 'mongoose';
import { z } from 'zod';


export const userDTOSchema = z.object({
    _id: z.string(),
    name: z.string(),
    email: z.string().email(),
    password: z.string(),
})


export type UserDTO = z.infer<typeof userDTOSchema>;