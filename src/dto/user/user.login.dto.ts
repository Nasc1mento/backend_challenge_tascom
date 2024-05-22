import {z} from "zod";


export const loginDTOSchema = z.object({
    email: z.string().email(),
    password: z.string().min(8),
})

export type LoginDTO = z.infer<typeof loginDTOSchema>;