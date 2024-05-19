import "dotenv/config";
import {z} from "zod"

const envSchema = z.object({
    APP_PORT:z.string(),
    APP_DATABASE_URI: z.string(),
});

export const env = envSchema.parse(process.env);
