import express, {Express} from "express";
import { env } from "./env";
import { Routes } from "./routes";

class Server {
    private app: Express;



    constructor() {
        this.app = express();
    }

    init(): void {
        this.configMiddleware();
        this.configRoutes();

        this.app.listen(env.port, () => {
            console.log("Running");
        });
    }

    private configMiddleware(): void {
        this.app.use(express.json());
    }

    private configRoutes(): void {
        this.app.use("/api", new Routes().init());
    }
}

new Server().init();


