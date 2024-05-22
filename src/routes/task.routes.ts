import {Router, Request, Response} from "express";
import { TaskController } from "../controllers/task.controller";

export class TaskRoutes {
    
    private router: Router;
    private controller: TaskController;

    constructor (router: Router) {
        this.router = router;
        this.controller = new TaskController();
    }

    setRoutes(): void {

        this.router.get("/tasks", (req: Request, res: Response) => {
            this.controller.findAll(req, res);
        });

        this.router.get("/tasks/:id", (req: Request, res: Response) => {
            this.controller.findById(req, res);
        });
        
        this.router.get("/tasks/tags/:tagIds", (req: Request, res: Response) => {
            this.controller.getTasksByTags(req, res);
        });

        this.router.post("/tasks", (req: Request, res: Response) => {
            this.controller.create(req, res);
        });

        this.router.put("/tasks/:id", (req: Request, res: Response) => {
            this.controller.update(req, res);
        });

        this.router.post("/tasks/:taskId/tags/:tagId", (req: Request, res: Response) => {
            this.controller.addTagsToTask(req, res);
        });

        this.router.delete("/tasks/:id", (req: Request, res: Response) => {
            this.controller.delete(req, res);
        });

        this.router.delete("/tasks/:taskId/tags/:tagId", (req: Request, res: Response) => {
            this.controller.removeTagFromTask(req, res);
        });
        
        this.router.get("/tasks/:id/tags", (req: Request, res: Response) => {
            this.controller.getTagsFromTask(req, res);
        });
    }
}