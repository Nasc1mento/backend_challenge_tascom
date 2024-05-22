import { Router } from "express";
import { AuthController } from "../controllers/auth.controller";
import { Request, Response } from "express";


export class AuthRoutes {
    public routes: Router;
    public controller: AuthController;

    constructor(routes: Router) {
        this.routes = routes;
        this.controller = new AuthController();
    }
    
    public setRoutes(): void {
        this.routes.post("/register", (req: Request, res: Response) => {
            this.controller.register(req, res);
        });
        
        this.routes.post("/login", (req: Request, res: Response) => {
            this.controller.login(req, res);
        });
    }
}