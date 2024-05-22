import {z} from "zod";


export const registerDTOSchema = z.object({
    name: z.string(),
    email: z.string().email(),
    password: z.string().min(8),
})

export type RegisterDTO = z.infer<typeof registerDTOSchema>;