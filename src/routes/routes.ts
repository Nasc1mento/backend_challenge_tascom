import {Router, Request, Response} from "express";
import { TagRoutes } from "./tag.routes";
import { TaskRoutes } from "./task.routes";
import { AuthRoutes } from "./auth.routes";

export class Routes {
    
    private routes: Router;

    constructor () {
        this.routes = new Router();
    }

    init(): void {

        this.routes.get("/", (req: Request, res: Response) => {
            res.send({
                message: "Welcome to the TODO API"
            });
        });

        this.setRoutes();
        return this.routes;
    }

    private setRoutes(): void {
        new AuthRoutes(this.routes).setRoutes();
        new TagRoutes(this.routes).setRoutes();
        new TaskRoutes(this.routes).setRoutes();
    }
}