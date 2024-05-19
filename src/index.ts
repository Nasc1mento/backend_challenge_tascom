import express, {Express} from "express";
import { env } from "./env";
import { Routes } from "./routes";
import { IDatabaseConnection } from "./databases/database.connection.interface";
import { MongoConnection } from "./databases/mongo.database.connection";

class Server {
    private app: Express;
    private database: IDatabaseConnection;

    constructor() {
        this.app = express();
        this.database = new MongoConnection();
    }

    init(): void {
        this.configDatabase();
        this.configMiddleware();
        this.configRoutes();

        this.app.listen(env.APP_PORT, () => {
            console.log("Running");
        });
    }

    private configMiddleware(): void {
        this.app.use(express.json());
    }

    private configDatabase(): void {
        this.database.connect();
    }

    private configRoutes(): void {
        this.app.use("/api", new Routes().init());
    }
}

new Server().init();


