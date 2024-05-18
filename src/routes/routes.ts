import {Router, Request, Response} from "express";
import { TagRoutes } from "./tag.routes";
import { TaskRoutes } from "./task.routes";

export class Routes {
    private routes: Router;

    constructor () {
        this.routes = new Router();
    }

    init(): void {
        this.setRoutes();
        return this.routes;
    }

    private setRoutes(): void {
        new TagRoutes(this.routes).setRoutes();
        new TaskRoutes(this.routes).setRoutes();
    }
}