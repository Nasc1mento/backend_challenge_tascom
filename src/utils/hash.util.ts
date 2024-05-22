import bcrypt from "bcrypt"
import { env } from "../env";

export const hash = async (password: string): Promise<string> => {
    const salt = await bcrypt.genSalt(env.APP_BCRYPT_SALT_ROUNDS);
    return await bcrypt.hash(password, salt);
}

export const compare = async (password: string, hash: string): Promise<boolean> => {
    return await bcrypt.compare(password, hash);
} 