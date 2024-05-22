import {Router, Request, Response, Next} from "express"; 
import { TagController } from "../controllers/tag.controller";
import { verifyToken } from "../middleware/auth.middleware";

export class TagRoutes {
    
    private routes: Router;
    private controller: TagController;

    constructor(routes: Router) {
        this.routes = routes;
        this.controller = new TagController();
    }

    setRoutes(): void {

        this.routes.get("/tags", verifyToken, (req: Request, res: Response) => {
            this.controller.findAll(req, res);
        });

        this.routes.get("/tags/:id", verifyToken, (req: Request, res: Response) => {
            this.controller.findById(req, res);
        });

        this.routes.post("/tags", verifyToken, (req: Request, res: Response) => {
            this.controller.create(req, res);
        });

        this.routes.put("/tags/:id", verifyToken, (req: Request, res: Response) => {
            this.controller.update(req, res);
        });

        this.routes.delete("/tags/:id", verifyToken, (req: Request, res: Response) => {
            this.controller.deleteById(req, res);
        });
    }

}