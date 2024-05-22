import "dotenv/config";
import {z} from "zod"

const envSchema = z.object({
    APP_PORT:z.string(),
    APP_DATABASE_URI: z.string(),
    APP_JWT_SECRET: z.string(),
    APP_JWT_EXPIRES_IN: z.string(),
    APP_BCRYPT_SALT_ROUNDS: z.string().transform(n => parseInt(n)),
});

export const env = envSchema.parse(process.env);
