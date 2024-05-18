import {Router, Request, Response} from "express";

export class TaskRoutes {
    
    private route: Router;

    constructor (route: Router) {
        this.route = route;
    }

    setRoutes(): void {
        

        this.route.get("/tasks", (req: Request, res: Response) => {
            res.send({message: "GET /tasks"});
        });

        this.route.post("/tasks", (req: Request, res: Response) => {
            
        });

        this.route.put("/tasks/:id", (req: Request, res: Response) => {
            
        });

        this.route.delete("/tasks/:id", (req: Request, res: Response) => {
            
        });

    }
}