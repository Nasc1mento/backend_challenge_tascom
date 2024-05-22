import mongoose from "mongoose";

import { IDatabaseConnection } from "./database.connection.interface";
import { env } from "../env";

export class MongoConnection implements IDatabaseConnection {
    private getUri(): string {
        return env.APP_DATABASE_URI;
    }

    async connect() {
        const uri = this.getUri();

        try {
            await mongoose.connect(uri);
        } catch(error: any) {
            console.error(error);
        }
    }
}