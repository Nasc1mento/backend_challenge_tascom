import {Router, Request, Response} from "express"; 
import { TagController } from "../controllers/tag.controller";

export class TagRoutes {
    
    private routes: Router;
    private controller: TagController;

    constructor(routes: Router) {
        this.routes = routes;
        this.controller = new TagController();
    }

    setRoutes(): void {

        this.routes.get("/tags", (req: Request, res: Response) => {
            this.controller.findAll(req, res);
        });

        this.routes.get("/tags/:id", (req: Request, res: Response) => {
            this.controller.findById(req, res);
        });

        this.routes.post("/tags", (req: Request, res: Response) => {
            this.controller.create(req, res);
        });

        this.routes.put("/tags/:id", (req: Request, res: Response) => {
            this.controller.update(req, res);
        });

        this.routes.delete("/tags/:id", (req: Request, res: Response) => {
            this.controller.deleteById(req, res);
        });
    }

}